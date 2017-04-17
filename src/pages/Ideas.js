import React from "react";

import styles from '../styles/pages/Ideas';
import styleConstants from '../styles/styleConstants';

import Header from '../components/Header';
import AddIdeaButton from '../components/AddIdeaButton';

export default class Ideas extends React.Component {
  constructor(props) {
    super(props);

    this.navigateBack = this.navigateBack.bind(this);
  }

  navigateBack() {
    this.props.router.goBack();
  }

  render() {
    return (
      <div style={styles.container}>
        <Header handleClick={this.navigateBack} />
        <div style={styles.footer}>
          <AddIdeaButton size={36} />
        </div>
      </div >
    );
  }
}