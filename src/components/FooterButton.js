import React from "react";
import { Button } from 'react-bootstrap';

import styles from '../styles/components/FooterButton';
import styleConstants from '../styles/styleConstants';

export default class FooterButton extends React.Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            text: React.PropTypes.string.isRequired,
            handleClick: React.PropTypes.func.isRequired
        };
    }

    render() {
        return (
            <Button
                style={styles.button} 
                onClick={this.props.handleClick} >
                <p style={{...styles.buttonText, ...styleConstants.dekko}}>{this.props.text}</p>
            </Button>
        );
    }
}