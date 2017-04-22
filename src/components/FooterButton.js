import React from "react";
import { Button } from 'react-bootstrap';

import Spinner from './Spinner';

import styles from '../styles/components/FooterButton';
import styleConstants from '../styles/styleConstants';

export default class FooterButton extends React.Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            text: React.PropTypes.string.isRequired,
            handleClick: React.PropTypes.func.isRequired,
            loading: React.PropTypes.bool
        };
    }

    render() {
        const content = this.props.loading ?
            <Spinner />
            :
            <p style={{ ...styles.buttonText, ...styleConstants.dekko }}>{this.props.text}</p>;

        return (
            <Button
                style={styles.button}
                onClick={this.props.handleClick} >
                {content}
            </Button>
        );
    }
}