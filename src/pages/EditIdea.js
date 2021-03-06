import React from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

import styles from '../styles/pages/EditIdea';
import styleConstants from '../styles/styleConstants';

import Header from '../components/Header';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Dropdown from '../components/Dropdown';
import FooterButton from '../components/FooterButton';

export class EditIdea extends React.Component {
    constructor(props) {
        super(props);

        this.navigateBack = this.navigateBack.bind(this);
        this.updateEditIdeaTitle = this.updateEditIdeaTitle.bind(this);
        this.updateEditIdeaDescription = this.updateEditIdeaDescription.bind(this);
        this.navigateCategories = this.navigateCategories.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
        this.selectPriority = this.selectPriority.bind(this);
        this.updateIdea = this.updateIdea.bind(this);
    }

    static get propTypes() {
        return {
            categories: React.PropTypes.array.isRequired,
            priorities: React.PropTypes.array.isRequired,
            initialIdeaTitle: React.PropTypes.string.isRequired,
            initialIdeaDescription: React.PropTypes.string,
            initialIdeaCategory: React.PropTypes.number.isRequired,
            initialIdeaPriority: React.PropTypes.number.isRequired,
            editIdeaIndex: React.PropTypes.number.isRequired,
            editIdeaTitle: React.PropTypes.string,
            editIdeaDescription: React.PropTypes.string,
            editIdeaCategory: React.PropTypes.number,
            editIdeaPriority: React.PropTypes.number,
        };
    }

    navigateBack() {
        this.props.router.goBack();
    }

    updateEditIdeaTitle(event) {
        this.props.dispatch({
            type: 'main.UPDATE_EDIT_IDEA_TITLE',
            value: event.target.value,
        });
    }

    updateEditIdeaDescription(event) {
        this.props.dispatch({
            type: 'main.UPDATE_EDIT_IDEA_DESCRIPTION',
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

    selectPriority(eventId) {

        // 100 is reserved for blank priority
        if (eventId !== 100) {
            this.props.dispatch({
                type: 'main.UPDATE_EDIT_IDEA_PRIORITY',
                value: eventId,
            });
        }
    }

    componentDidMount() {

        // Initial Setup
        this.setState({
            currentCategory: this.props.categories[this.props.initialIdeaCategory]
        });

        this.props.dispatch({
            type: 'main.UPDATE_EDIT_IDEA_TITLE',
            value: this.props.initialIdeaTitle,
        });

        this.props.dispatch({
            type: 'main.UPDATE_EDIT_IDEA_DESCRIPTION',
            value: this.props.initialIdeaDescription,
        });

        this.props.dispatch({
            type: 'main.UPDATE_EDIT_IDEA_CATEGORY',
            value: this.props.initialIdeaCategory
        });

        this.props.dispatch({
            type: 'main.UPDATE_EDIT_IDEA_PRIORITY',
            value: this.props.initialIdeaPriority
        });

        this.props.dispatch({
            type: 'main.SET_EDIT_IDEA_INDEX',
            index: this.props.editIdeaIndex
        });
    }

    updateIdea() {
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
                        value={this.props.editIdeaTitle ? this.props.editIdeaTitle : this.props.initialIdeaTitle}
                        handleChange={this.updateEditIdeaTitle} />
                    <TextArea
                        value={this.props.editIdeaDescription ? this.props.editIdeaDescription : this.props.initialIdeaDescription}
                        placeholder={this.props.editIdeaDescription ? '' : 'Enter your description here...'}
                        handleChange={this.updateEditIdeaDescription} />
                    <Dropdown
                        displayText='Select a Category'
                        value={this.props.editIdeaCategory !== null ? this.props.categories[this.props.editIdeaCategory] : this.props.categories[this.props.initialIdeaCategory]}
                        handleSelect={this.selectCategory}
                        values={this.props.categories}
                        editItem={true} />
                    <Dropdown
                        displayText='Select a Priority'
                        value={this.props.editIdeaPriority !== null ? this.props.priorities[this.props.editIdeaPriority] : this.props.priorities[this.props.initialIdeaPriority]}
                        handleSelect={this.selectPriority}
                        values={this.props.priorities} />
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
        priorities: state.main.priorities,
        initialIdeaTitle: state.routing.locationBeforeTransitions.query.title,
        initialIdeaDescription: state.routing.locationBeforeTransitions.query.description,
        initialIdeaCategory: Number(state.routing.locationBeforeTransitions.query.categoryId),
        initialIdeaPriority: Number(state.routing.locationBeforeTransitions.query.priorityId),
        editIdeaIndex: Number(state.routing.locationBeforeTransitions.query.id),
        editIdeaTitle: state.main.editIdea.title,
        editIdeaDescription: state.main.editIdea.description,
        editIdeaCategory: state.main.editIdea.categoryId,
        editIdeaPriority: state.main.editIdea.priorityId,
    });
}

export default connect(MapStateToProps)(EditIdea);