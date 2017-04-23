import React from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

import styles from '../styles/pages/AddCategory';
import styleConstants from '../styles/styleConstants';

import Header from '../components/Header';
import Input from '../components/Input';
import FooterButton from '../components/FooterButton';
import ErrorMessage from '../components/ErrorMessage';

export class AddCategory extends React.Component {
  constructor(props) {
    super(props);

    this.navigateBack = this.navigateBack.bind(this);
    this.updateNewCategoryValue = this.updateNewCategoryValue.bind(this);
    this.addNewCategory = this.addNewCategory.bind(this);
  }

  static get propTypes() {
    return {
      newCategoryValue: React.PropTypes.string,
      errorMessage: React.PropTypes.string
    };
  }

  navigateBack() {
    this.props.router.goBack();
  }

  updateNewCategoryValue(event) {
    this.props.dispatch({
      type: 'main.UPDATE_NEW_CATEGORY_VALUE',
      value: event.target.value
    });
  }

  addNewCategory() {

    if (this.props.newCategoryValue) {
      this.props.dispatch({
        type: 'main.ADD_NEW_CATEGORY'
      });

      this.navigateBack();
    }
    else {
      this.props.dispatch({
        type: 'main.USER_ERROR',
        message: 'You forgot to enter a category'
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
              placeholder="Enter new category..."
              value={this.props.newCategoryValue}
              handleChange={this.updateNewCategoryValue} />
          </div>
          <FooterButton
            text='ADD CATEGORY'
            handleClick={this.addNewCategory} />
        </div >
        { errorMessage }
      </div>
    );
  }
}

function MapStateToProps(state) {
  return ({
    newCategoryValue: state.main.newCategory.value,
    errorMessage: state.main.user.errorMessage
  });
}

export default connect(MapStateToProps)(AddCategory);