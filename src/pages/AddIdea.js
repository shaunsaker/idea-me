// TODO: On Save Idea - Save to db, add newIdea to ideas array

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
    this.updateNewIdeaValue = this.updateNewIdeaValue.bind(this);
    this.navigateEditCategories = this.navigateEditCategories.bind(this);  
    this.selectCategory = this.selectCategory.bind(this);

    this.state = {
      newIdeaCategory: 'Select a Category'
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

  updateNewIdeaValue(event) {
    this.props.dispatch({
      type: 'main.UPDATE_NEW_IDEA_VALUE',
      value: event.target.value
    });
  }

  navigateEditCategories() {
    browserHistory.push('edit-categories');
  }

  selectCategory(eventId) {

    // 100 is reserved for blank categories, 200 is reserved as the edit-categories button
    if (eventId !== 200) {
      if (eventId !== 100) {
        this.props.dispatch({
          type: 'main.UPDATE_NEW_IDEA_CATEGORY',
          value: this.props.categories[eventId],
          id: eventId
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
            placeholder="What's the big idea?"
            value={this.props.newIdeaValue}
            handleChange={this.updateNewIdeaValue} />
          <CategoryDropdownButton 
            currentCategory={this.props.newIdeaCategory}
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
    categories: state.main.categories,
    newIdeaValue: state.main.newIdea.value || null,
    newIdeaCategory: state.main.newIdea.category || 'Select a Category'
  });
}

export default connect(MapStateToProps)(AddIdea);