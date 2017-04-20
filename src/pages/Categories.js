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
  }

  static get propTypes() {
    return {
      categories: React.PropTypes.array.isRequired,
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
          text='SAVE AND CONTINUE' />
      </div >
    );
  }
}

function MapStateToProps(state) {
  return ({
    categories: state.main.categories
  });
}

export default connect(MapStateToProps)(Categories);