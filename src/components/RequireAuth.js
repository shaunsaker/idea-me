import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function (WrappedComponent) {
  class Auth extends React.Component {  
    static get propTypes()
    {
        return {
          authenticated: React.PropTypes.bool.isRequired
        };
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push('/sign-in');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.main.user.authenticated };
  }

  return connect(mapStateToProps)(Auth);
}