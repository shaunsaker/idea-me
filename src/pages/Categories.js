import React from "react";
import { connect } from "react-redux";
import DeleteIcon from "react-icons/lib/fa/close";

import styles from '../styles/pages/Categories';
import styleConstants from '../styles/styleConstants';

import Header from '../components/Header';
import Input from '../components/Input';
import FooterButton from '../components/FooterButton';

export class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.navigateBack = this.navigateBack.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.saveUserCategories = this.saveUserCategories.bind(this);

    this.state = {
      loading: false
    }
  }

  static get propTypes() {
    return {
      categories: React.PropTypes.array.isRequired,
      uid: React.PropTypes.string,
      errorMessage: React.PropTypes.string,
      apiSuccess: React.PropTypes.bool
    };
  }

  navigateBack() {
    this.props.router.goBack();
  }

  deleteCategory(index) {
    this.props.dispatch({
      type: 'main.DELETE_CATEGORY',
      index
    });
  }

  saveUserCategories() {
    this.setState({
      loading: true
    });

    this.props.dispatch({
      type: 'main.RESET_API_SUCCESS'
    });

    this.props.dispatch({
      type: 'saveUserCategories',
      uid: this.props.uid,
      categories: this.props.categories
    });
  }

  componentDidUpdate() {
    if (this.props.errorMessage || this.props.apiSuccess) {
      if (this.state.loading) {
        this.setState({
          loading: false
        });
      }
    }
  }

  render() {
    const categories = this.props.categories.map((value, index) => {
      return (
        <div
          key={'category' + index}
          style={styles.categoryItem}>
          <div style={styles.categoryTextContainer}>
            <p style={{ ...styles.categoryText, ...styleConstants.sourceSansPro }}>{value}</p>
          </div>
          <div style={styles.iconContainer}>
            <DeleteIcon
              style={styles.deleteIcon} 
              onClick={() => this.deleteCategory(index)} />
          </div>
        </div>
      )
    });

    return (
      <div
        className='add-idea categories'
        style={styles.container}>
        <Header 
          handleClick={this.navigateBack} 
          categories={true} />
        <div style={styles.categoriesContainer}>
          {categories}
        </div>
        <FooterButton
          text='SAVE AND CONTINUE' 
          loading={this.state.loading} 
          handleClick={this.saveUserCategories} />
      </div >
    );
  }
}

function MapStateToProps(state) {
  return ({
    categories: state.main.categories,
    uid: state.main.user.uid,
    errorMessage: state.main.user.errorMessage,
    apiSuccess: state.main.user.apiSuccess
  });
}

export default connect(MapStateToProps)(Categories);