import React from "react";
import { Button } from 'react-bootstrap';
import BackIcon from 'react-icons/lib/fa/chevron-left';
import lightBulb from '../styles/img/lightbulb.png';

import styles from '../styles/components/Header';
import styleConstants from '../styles/styleConstants';

import AddButton from '../components/AddButton';
import ViewButton from '../components/ViewButton';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    static get propTypes()
    {
        return {
          handleClick: React.PropTypes.func
        };
    }

    render() {
        const backButton = this.props.allowBack === false ?
            null
            :
            <BackIcon 
                style={styles.leftIcon}
                onClick={this.props.handleClick} />;

        const addIdeaButton = this.props.ideas ? 
            <AddButton size={36} ideas={true} />
            :
            null;

        const addCategoryButton = this.props.categories ? 
            <AddButton size={36} categories={true} />
            :
            null; 

        const viewIdeasButton = this.props.viewIdeas ? 
            <ViewButton size={36} ideas={true} />
            :
            null;

        const viewCategoriesButton = this.props.viewCategories ? 
            <ViewButton size={36} categories={true} />
            :
            null;

        const homePageStyles = this.props.home ? 
            { justifyContent: 'center' }
            :
            {};

        return (
            <div style={{...styles.headerContainer, ...homePageStyles}}>
                { backButton }
                <div
                    className='logo-container' 
                    style={styles.logoContainer}>
                    <img src={lightBulb} width={50} height={50} style={styles.image} />
                    <p style={{ ...styles.title, ...styleConstants.dekko }}>IDEA ME!</p>
                </div>
                <div style={styles.rightIcon}>
                    { addIdeaButton }
                    { addCategoryButton }
                    { viewIdeasButton }
                    { viewCategoriesButton }
                </div>
            </div>
        );
    }
}