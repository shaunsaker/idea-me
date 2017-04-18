import React from "react";

import styles from '../styles/pages/EditCategories';
import styleConstants from '../styles/styleConstants';

import Header from '../components/Header';

export default class EditCategories extends React.Component {
  constructor(props) {
    super(props);

    this.navigateBack = this.navigateBack.bind(this);
  }

  navigateBack() {
    this.props.router.goBack();
  }

  render() {
    return (
      <div 
        className='add-idea'
        style={styles.container}>
        <Header handleClick={this.navigateBack} />

      </div >
    );
  }
}