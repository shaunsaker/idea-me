import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function (WrappedComponent) {
  class Auth extends React.Component {
    static get propTypes() {
      return {
        authenticated: React.PropTypes.bool
      };
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.dispatch({
          type: 'getUserAuth'
        });
      }
    }

    componentDidUpdate() {
      if (this.props.authenticated) {
        // Allow user to view page
      }
      else if (this.props.redirectUserToSignIn) {
        browserHistory.push('/sign-in');
      }
    } 

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { 
      authenticated: state.main.user.authenticated ,
      redirectUserToSignIn: state.main.user.signInRedirect
    };
  }

  return connect(mapStateToProps)(Auth);
}