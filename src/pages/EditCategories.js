import React from "react";
import { connect } from "react-redux";
import EditIcon from "react-icons/lib/fa/pencil";
import DeleteIcon from "react-icons/lib/fa/close";

import styles from '../styles/pages/EditCategories';
import styleConstants from '../styles/styleConstants';

import Header from '../components/Header';
import Input from '../components/Input';
import FooterButton from '../components/FooterButton';

export class EditCategories extends React.Component {
  constructor(props) {
    super(props);

    this.navigateBack = this.navigateBack.bind(this);
  }

  static get propTypes() {
    return {
      categories: React.PropTypes.array.isRequired,
    };
  }

  navigateBack() {
    this.props.router.goBack();
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
          <div style={styles.iconsContainer}>
            <EditIcon
              style={styles.editIcon} />
            <DeleteIcon
              style={styles.deleteIcon} />
          </div>
        </div>
      )
    });

    return (
      <div
        className='add-idea edit-categories'
        style={styles.container}>
        <Header handleClick={this.navigateBack} />
        <Input
          placeholder='Add New Category' />
        <FooterButton
          text='ADD CATEGORY' />
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

export default connect(MapStateToProps)(EditCategories);