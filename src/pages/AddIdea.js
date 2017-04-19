import React from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

import styles from '../styles/pages/AddIdea';
import styleConstants from '../styles/styleConstants';

import Header from '../components/Header';
import Input from '../components/Input';
import CategoryDropdownButton from '../components/CategoryDropdownButton';
import FooterButton from '../components/FooterButton';

export class AddIdea extends React.Component {
  constructor(props) {
    super(props);

    this.navigateBack = this.navigateBack.bind(this);
    this.navigateEditCategories = this.navigateEditCategories.bind(this);  
    this.selectCategory = this.selectCategory.bind(this);

    this.state = {
      currentCategory: 'Select a Category'
    }
  }

  static get propTypes() {
    return {
      categories: React.PropTypes.array.isRequired,
    };
  }

  navigateBack() {
    this.props.router.goBack();
  }

  navigateEditCategories() {
    browserHistory.push('edit-categories');
  }

  selectCategory(eventId) {

    // 100 is reserved for blank categories, 200 is reserved as the edit-categories button
    if (eventId !== 200) {
      if (eventId !== 100) {
        this.setState({
          currentCategory: this.props.categories[eventId]
        });
      }
      else {
        this.setState({
          currentCategory: 'Select a Category'
        });
      }
    }
    else {
      this.navigateEditCategories();
    }
  }

  render() {
    return (
      <div 
        className='add-idea'
        style={styles.container}>
        <Header handleClick={this.navigateBack} />
        <div style={styles.inputArea}>
          <Input 
            placeholder="What's the big idea?" />
          <CategoryDropdownButton 
            currentCategory={this.state.currentCategory}
            handleSelect={this.selectCategory}
            categories={this.props.categories} 
            initial='Select a Category' />
        </div>
        <FooterButton
          text='ADD IDEA' />
      </div >
    );
  }
}

function MapStateToProps(state) {
  return ({
    categories: state.main.categories
  });
}

export default connect(MapStateToProps)(AddIdea);