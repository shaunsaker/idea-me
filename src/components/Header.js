import React from "react";
import { Button } from 'react-bootstrap';
import BackIcon from 'react-icons/lib/fa/chevron-left';
import lightBulb from '../styles/img/lightbulb.png';

import styles from '../styles/components/Header';
import styleConstants from '../styles/styleConstants';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    static get propTypes()
    {
        return {
          handleClick: React.PropTypes.func.isRequired
        };
    }

    render() {
        const backButton = !this.props.home ?
            <BackIcon 
                style={styles.icon}
                onClick={this.props.handleClick} />
            :
            null

        return (
            <div style={styles.headerContainer}>
                { backButton }
                <div style={styles.logoContainer}>
                    <img src={lightBulb} width={50} height={50} style={styles.image} />
                    <p style={{ ...styles.title, ...styleConstants.dekko }}>IDEA ME!</p>
                </div>
            </div>
        );
    }
}