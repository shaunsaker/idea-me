import React from "react";
import { connect } from "react-redux";
import { DropdownButton, MenuItem } from "react-bootstrap";
import EditIcon from "react-icons/lib/fa/pencil";

import styles from '../styles/pages/Ideas';
import styleConstants from '../styles/styleConstants';

import Header from '../components/Header';
import AddIdeaButton from '../components/AddIdeaButton';

export class Ideas extends React.Component {
  constructor(props) {
    super(props);

    this.navigateBack = this.navigateBack.bind(this);
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

  selectCategory(eventId) {

    // 100 is reserved for 'All' categories
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

  render() {
    const dropdownButton =
      <DropdownButton
        style={{ ...styles.dropdownButton, ...styleConstants.sourceSansPro }}
        id='sortDropdown'
        title={this.state.currentCategory}
        noCaret={true}
        onSelect={(event) => { this.selectCategory(event) }}>
        <MenuItem
          eventKey={100}
          style={{ ...styles.dropdownItem, ...styleConstants.sourceSansPro }}>
          All
        </MenuItem>
        {
          this.props.categories.map((value, index) => {
            return (
              <MenuItem
                eventKey={index}
                key={'category' + index}
                style={{ ...styles.dropdownItem, ...styleConstants.sourceSansPro }}>
                {value}
              </MenuItem>
            );
          })
        }
      </DropdownButton>

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
        <Header handleClick={this.navigateBack} />
        {dropdownButton}
        {ideas}
        <div style={styles.footer}>
          <AddIdeaButton size={36} />
        </div>
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