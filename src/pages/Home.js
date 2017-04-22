import React from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import { Button } from 'react-bootstrap';

import Header from '../components/Header';
import AddButton from '../components/AddButton';
import ViewButton from '../components/ViewButton';
import ErrorMessage from '../components/ErrorMessage';

import styles from '../styles/pages/Home';
import styleConstants from '../styles/styleConstants';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.loadUserData = this.loadUserData.bind(this);

    this.state = {
      loading: false
    }
  }

  static get propTypes() {
    return {
      uid: React.PropTypes.string,
      errorMessage: React.PropTypes.string,
      apiSuccess: React.PropTypes.bool,
    };
  }


  loadUserData() {
    this.setState({
      loading: true
    });

    this.props.dispatch({
      type: 'main.RESET_API_SUCCESS'
    });

    this.props.dispatch({
      type: 'loadUserData',
      uid: this.props.uid,
    });
  }

  componentDidUpdate() {
    if (this.props.errorMessage) {
      if (this.state.loading) {
        this.setState({
          loading: false
        });
      }
    }
    else if (this.props.apiSuccess) {
      browserHistory.push('/ideas');
    }
  }

  render() {
    const errorMessage = this.props.errorMessage ?
      <ErrorMessage text={this.props.errorMessage} />
      :
      null;

    return (
      <div style={{ height: '100%' }}>
        <div style={styles.container}>
          <Header allowBack={false} />
          <AddButton size={48} />
          <ViewButton
            size={48}
            loading={this.state.loading}
            handleClick={this.loadUserData} />
        </div >
        {errorMessage}
      </div>
    );
  }
}

function MapStateToProps(state) {
  return ({
    uid: state.main.user.uid,
    errorMessage: state.main.user.errorMessage,
    apiSuccess: state.main.user.apiSuccess
  });
}

export default connect(MapStateToProps)(Home);