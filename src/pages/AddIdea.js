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
import ErrorMessage from '../components/ErrorMessage';

export class AddIdea extends React.Component {
  constructor(props) {
    super(props);

    this.navigateBack = this.navigateBack.bind(this);
    this.updateNewIdeaValue = this.updateNewIdeaValue.bind(this);
    this.navigateCategories = this.navigateCategories.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.addNewIdea = this.addNewIdea.bind(this);

    this.state = {
      newIdeaCategory: 'Select a Category'
    }
  }

  static get propTypes() {
    return {
      categories: React.PropTypes.array.isRequired,
      newIdeaValue: React.PropTypes.string,
      newIdeaCategory: React.PropTypes.string,
      errorMessage: React.PropTypes.string
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

  navigateCategories() {
    browserHistory.push('/categories');
  }

  selectCategory(eventId) {

    // 100 is reserved for blank categories, 200 is reserved as the categories button
    if (eventId !== 200) {
      if (eventId !== 100) {
        this.props.dispatch({
          type: 'main.UPDATE_NEW_IDEA_CATEGORY',
          value: eventId,
        });
      }
    }
    else {
      this.navigateCategories();
    }
  }

  addNewIdea() {

    if (this.props.newIdeaValue) {

      // TODO: First we will save this data here, display loading then do the below when apiSaveSuccess received

      this.props.dispatch({
        type: 'main.ADD_NEW_IDEA'
      });

      browserHistory.push('/ideas');
    }
    else {
      this.props.dispatch({
        type: 'main.USER_ERROR',
        message: 'You forgot to enter your idea'
      });
      setTimeout(() => {
        this.props.dispatch({
          type: 'main.RESET_USER_ERROR'
        });
      }, 2500);
    }
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'main.RESET_USER_ERROR'
    });
  }

  render() {
    const errorMessage = this.props.errorMessage ?
      <ErrorMessage text={this.props.errorMessage} />
      :
      null;

    return (
      <div style={{ height: '100%' }}>
        <div
          className='add-idea'
          style={styles.container}>
          <Header
            handleClick={this.navigateBack} />
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
            text='ADD IDEA'
            handleClick={this.addNewIdea} />
        </div >
        {errorMessage}
      </div>
    );
  }
}

function MapStateToProps(state) {
  return ({
    categories: state.main.categories,
    newIdeaValue: state.main.newIdea.value,
    newIdeaCategory: state.main.categories[state.main.newIdea.categoryId] || 'Select a Category',
    errorMessage: state.main.user.errorMessage
  });
}

export default connect(MapStateToProps)(AddIdea);