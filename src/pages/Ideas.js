import React from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import { DropdownButton, MenuItem } from "react-bootstrap";
import EditIcon from "react-icons/lib/fa/pencil";

import styles from '../styles/pages/Ideas';
import styleConstants from '../styles/styleConstants';

import Header from '../components/Header';
import CategoryDropdownButton from '../components/CategoryDropdownButton';

export class Ideas extends React.Component {
  constructor(props) {
    super(props);

    this.navigateBack = this.navigateBack.bind(this);
    this.navigateEditCategories = this.navigateEditCategories.bind(this);
    this.selectCategory = this.selectCategory.bind(this);

    this.state = {
      currentCategory: 'All'
    }
  }

  static get propTypes() {
    return {
      categories: React.PropTypes.array,
      ideas: React.PropTypes.array
    };
  }

  navigateBack() {
    this.props.router.goBack();
  }

  navigateEditCategories() {
    browserHistory.push('edit-categories');
  }

  selectCategory(eventId) {

    // 100 is reserved for 'All' categories, 200 is reserved as the edit-categories button
    if (eventId !== 200) {
      if (eventId !== 100) {
        this.setState({
          currentCategory: this.props.categories[eventId]
        });
      }
      else {
        this.setState({
          currentCategory: 'All'
        });
      }
    }
    else {
      this.navigateEditCategories();
    }
  }

  render() {
    const ideas =
      <div className="ideas-container" style={styles.ideasContainer}>
        {
          this.props.ideas.map((value, index) => {
            if (this.state.currentCategory === 'All' || this.props.categories[value.categoryId] === this.state.currentCategory) {
              return (
                <div key={'idea' + index} style={styles.ideaItem} className="idea-item">
                  <p style={{ ...styles.ideaText, ...styleConstants.sourceSansPro }}>
                    {value.idea}
                  </p>
                  <div style={styles.labelsContainer} className="label-container">
                    {
                      this.state.currentCategory == 'All' ?
                        <p style={{ ...styles.ideaChip, ...styleConstants.sourceSansPro }}>{this.props.categories[value.categoryId]}</p>
                        :
                        <div></div>
                    }
                    <EditIcon style={styles.editIcon} />
                  </div>
                </div>
              );
            }
          })
        }
      </div>

    return (
      <div style={styles.container}>
        <Header
          handleClick={this.navigateBack}
          ideas={true} />
        <CategoryDropdownButton
          currentCategory={this.state.currentCategory}
          handleSelect={this.selectCategory}
          categories={this.props.categories}
        />
        {ideas}
      </div >
    );
  }
}

function MapStateToProps(state) {
  return ({
    categories: state.main.categories,
    ideas: state.main.ideas,
  });
}

export default connect(MapStateToProps)(Ideas);