// TODO: On Update Idea - Save to db, update editIdea in appropriate location of ideas array

import React from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

import styles from '../styles/pages/EditIdea';
import styleConstants from '../styles/styleConstants';

import Header from '../components/Header';
import Input from '../components/Input';
import CategoryDropdownButton from '../components/CategoryDropdownButton';
import FooterButton from '../components/FooterButton';

export class EditIdea extends React.Component {
    constructor(props) {
        super(props);

        this.navigateBack = this.navigateBack.bind(this);
        this.updateEditIdeaValue = this.updateEditIdeaValue.bind(this);
        this.navigateCategories = this.navigateCategories.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
        this.updateIdea = this.updateIdea.bind(this);
    }

    static get propTypes() {
        return {
            categories: React.PropTypes.array.isRequired,
            initialIdeaValue: React.PropTypes.string.isRequired,
            initialIdeaCategory: React.PropTypes.number.isRequired,
            editIdeaIndex: React.PropTypes.number.isRequired,  
            editIdeaValue: React.PropTypes.string,
            editIdeaCategory: React.PropTypes.number,
        };
    }

    navigateBack() {
        this.props.router.goBack();
    }

    updateEditIdeaValue(event) {
        this.props.dispatch({
            type: 'main.UPDATE_EDIT_IDEA_VALUE',
            value: event.target.value,
        });
    }

    navigateCategories() {
        browserHistory.push('categories');
    }

    selectCategory(eventId) {

        // 100 is reserved for blank categories, 200 is reserved as the categories button
        if (eventId !== 200) {
            if (eventId !== 100) {
                this.props.dispatch({
                    type: 'main.UPDATE_EDIT_IDEA_CATEGORY',
                    value: eventId
                });
            }
        }
        else {
            this.navigateCategories();
        }
    }

    componentDidMount() {

        // Initial Setup
        this.setState({
            currentCategory: this.props.categories[this.props.initialIdeaCategory]
        });

        this.props.dispatch({
            type: 'main.UPDATE_EDIT_IDEA_VALUE',
            value: this.props.initialIdeaValue,
        });

        this.props.dispatch({
            type: 'main.UPDATE_EDIT_IDEA_CATEGORY',
            value: this.props.initialIdeaCategory
        });

        this.props.dispatch({
            type: 'main.SET_EDIT_IDEA_INDEX',
            index: this.props.editIdeaIndex
        });
    }

    updateIdea() {
        // TODO: First we will save this data here, display loading then do the below when apiSaveSuccess received

        this.props.dispatch({
            type: 'main.UPDATE_IDEA'
        });

        this.navigateBack();
    }

    render() {
        return (
            <div
                className='add-idea'
                style={styles.container}>
                <Header handleClick={this.navigateBack} />
                <div style={styles.inputArea}>
                    <Input
                        value={this.props.editIdeaValue ? this.props.editIdeaValue : this.props.initialIdeaValue}
                        handleChange={this.updateEditIdeaValue} />
                    <CategoryDropdownButton
                        currentCategory={this.props.editIdeaCategory !== null ? this.props.categories[this.props.editIdeaCategory] : this.props.categories[this.props.initialIdeaCategory]}
                        handleSelect={this.selectCategory}
                        categories={this.props.categories}
                        initial='Select a Category' />
                </div>
                <FooterButton
                    text='UPDATE IDEA' 
                    handleClick={this.updateIdea} />
            </div >
        );
    }
}

function MapStateToProps(state) {
    return ({
        categories: state.main.categories,
        initialIdeaValue: state.routing.locationBeforeTransitions.query.idea,
        initialIdeaCategory: Number(state.routing.locationBeforeTransitions.query.categoryId),
        editIdeaIndex: Number(state.routing.locationBeforeTransitions.query.id),
        editIdeaValue: state.main.editIdea.value,
        editIdeaCategory: state.main.editIdea.categoryId,
    });
}

export default connect(MapStateToProps)(EditIdea);