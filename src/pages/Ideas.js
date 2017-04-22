import React from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import { DropdownButton, MenuItem } from "react-bootstrap";
import EditIcon from "react-icons/lib/fa/pencil";
import DeleteIcon from "react-icons/lib/fa/close";
import FooterButton from "../components/FooterButton";

import styles from '../styles/pages/Ideas';
import styleConstants from '../styles/styleConstants';

import Header from '../components/Header';
import Dropdown from '../components/Dropdown';
import Count from '../components/Count';

export class Ideas extends React.Component {
  constructor(props) {
    super(props);

    this.navigateBack = this.navigateBack.bind(this);
    this.navigateCategories = this.navigateCategories.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.editIdea = this.editIdea.bind(this);
    this.deleteIdea = this.deleteIdea.bind(this);
    this.saveUserIdeas = this.saveUserIdeas.bind(this);

    this.state = {
      currentCategory: 'All',
      loading: false
    }
  }

  static get propTypes() {
    return {
      categories: React.PropTypes.array,
      ideas: React.PropTypes.array,
      uid: React.PropTypes.string.isRequired,
      errorMessage: React.PropTypes.string,
      apiSaveSuccess: React.PropTypes.bool,
    };
  }

  navigateBack() {
    this.props.router.goBack();
  }

  navigateCategories() {
    browserHistory.push('categories');
  }

  selectCategory(eventId) {

    // 100 is reserved for 'All' categories, 200 is reserved as the categories button
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
      this.navigateCategories();
    }
  }

  editIdea(idea) {
    browserHistory.push(`/edit-idea?title=${idea.title}&description=${idea.description}&categoryId=${idea.categoryId}&priorityId=${idea.priorityId}&id=${idea.index}`);
  }

  deleteIdea(index) {
    this.props.dispatch({
      type: 'main.DELETE_IDEA',
      index
    });
  }

  saveUserIdeas() {
    this.setState({
      loading: true
    });

    this.props.dispatch({
      type: 'main.RESET_API_SAVE_SUCCESS'
    });

    this.props.dispatch({
      type: 'saveUserIdeas',
      uid: this.props.uid,
      ideas: this.props.ideas
    });
  }

  componentDidUpdate() {
    if (this.props.errorMessage || this.props.apiSaveSuccess) {
      if (this.state.loading) {
        this.setState({
          loading: false
        });
      }
    }
  }

  render() {
    let counter = 0;
    let ideas = <div style={{flex: 1}}></div>;

    if (this.props.ideas) {
      let noPriority = [];
      let highPriority = [];
      let mediumPriority = [];
      let lowPriority = [];
      let allIdeas = [];

      this.props.ideas.map((value) => {
        if (value.priorityId === 0) {
          highPriority.push(value);
        }
        else if (value.priorityId === 1) {
          mediumPriority.push(value);
        }
        else if (value.priorityId === 2) {
          lowPriority.push(value);
        }
        else {
          noPriority.push(value);
        }
      });

      noPriority.map((value) => {
        allIdeas.push(value);
      });

      highPriority.map((value) => {
        allIdeas.push(value);
      });

      mediumPriority.map((value) => {
        allIdeas.push(value);
      });

      lowPriority.map((value) => {
        allIdeas.push(value);
      });

      ideas =
        <div className="ideas-container" style={styles.ideasContainer}>
          {
            allIdeas.map((value, index) => {
              if (this.state.currentCategory === 'All' || this.props.categories[value.categoryId] === this.state.currentCategory) {
                counter++;

                return (
                  <div key={'idea' + index} style={styles.ideaItem} className="idea-item">
                    <div style={styles.textContainer}>
                      <p style={{ ...styles.ideaTextTitle, ...styleConstants.sourceSansPro }}>
                        {value.title}
                      </p>
                      <p style={{ ...styles.ideaTextDescription, ...styleConstants.sourceSansPro }}>
                        {value.description}
                      </p>
                    </div>
                    <div style={styles.labelsContainer} className="label-container">
                      {
                        this.state.currentCategory == 'All' && (value.categoryId === 0 || value.categoryId) ?
                          <p style={{ ...styles.ideaChip, ...styleConstants.sourceSansPro }}>{this.props.categories[value.categoryId]}</p>
                          :
                          <div></div>
                      }
                      {
                        value.priorityId === 0 || value.priorityId ?
                          <p style={{ ...styles.ideaChip, ...styles.priority, ...styleConstants.sourceSansPro }}>{this.props.priorities[value.priorityId].split('')[0]}</p>
                          :
                          <div></div>
                      }
                      <EditIcon
                        style={styles.editIcon}
                        onClick={() => this.editIdea({ ...value, index })} />
                      <DeleteIcon
                        style={styles.deleteIcon}
                        onClick={() => this.deleteIdea(index)} />
                    </div>
                  </div>
                );
              }
            })
          }
        </div>;
    }

    return (
      <div style={styles.container}>
        <Header
          handleClick={this.navigateBack}
          ideas={true} />
        <div id='infoContainer' style={styles.infoContainer}>
          <Dropdown
            value={this.state.currentCategory}
            handleSelect={this.selectCategory}
            values={this.props.categories}
            editItem={true} />
          <Count
            count={counter}
            total={this.props.ideas ? this.props.ideas.length : 0}
            unit='ideas' />
        </div>
        {ideas}
        <FooterButton
          text='SAVE IDEAS'
          handleClick={this.saveUserIdeas}
          loading={this.state.loading} />
      </div >
    );
  }
}

function MapStateToProps(state) {
  return ({
    categories: state.main.categories,
    priorities: state.main.priorities,
    ideas: state.main.ideas,
    uid: state.main.user.uid,
    errorMessage: state.main.user.errorMessage,
    apiSaveSuccess: state.main.user.apiSaveSuccess,
  });
}

export default connect(MapStateToProps)(Ideas);