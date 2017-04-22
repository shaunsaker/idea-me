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
import CategoryDropdownButton from '../components/CategoryDropdownButton';

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
      categories: React.PropTypes.array.isRequired,
      ideas: React.PropTypes.array.isRequired,
      errorMessage: React.PropTypes.string,
      apiSuccess: React.PropTypes.bool,
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
    browserHistory.push(`/edit-idea?idea=${idea.value}&categoryId=${idea.categoryId}&id=${idea.index}`);
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
      type: 'main.RESET_API_SUCCESS'
    });

    this.props.dispatch({
      type: 'saveUserIdeas',
      uid: this.props.uid,
      ideas: this.props.ideas
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
    const ideas =
      <div className="ideas-container" style={styles.ideasContainer}>
        {
          this.props.ideas.map((value, index) => {
            if (this.state.currentCategory === 'All' || this.props.categories[value.categoryId] === this.state.currentCategory) {
              return (
                <div key={'idea' + index} style={styles.ideaItem} className="idea-item">
                  <p style={{ ...styles.ideaText, ...styleConstants.sourceSansPro }}>
                    {value.value}
                  </p>
                  <div style={styles.labelsContainer} className="label-container">
                    {
                      this.state.currentCategory == 'All' && value.categoryId !== null ?
                        <p style={{ ...styles.ideaChip, ...styleConstants.sourceSansPro }}>{this.props.categories[value.categoryId]}</p>
                        :
                        <div></div>
                    }
                    <EditIcon 
                      style={styles.editIcon} 
                      onClick={() => this.editIdea({...value, index})} />
                    <DeleteIcon
                      style={styles.deleteIcon}
                      onClick={() => this.deleteIdea(index)} />
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
          initial='All'
        />
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
    ideas: state.main.ideas,
    uid: state.main.user.uid,
    errorMessage: state.main.user.errorMessage,
    apiSuccess: state.main.user.apiSuccess,
  });
}

export default connect(MapStateToProps)(Ideas);