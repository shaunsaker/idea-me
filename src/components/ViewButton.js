import React from "react";
import { Link } from "react-router";
import { Button } from 'react-bootstrap';
import EyeIcon from 'react-icons/lib/fa/eye';

import Spinner from './Spinner';

import styles from '../styles/components/ViewButton';
import styleConstants from '../styles/styleConstants';

export default class ViewButton extends React.Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            size: React.PropTypes.number.isRequired,
            loading: React.PropTypes.bool,
            handleClick: React.PropTypes.func.isRequired,
        };
    }

    render() {
        const content = this.props.loading ?
            <Spinner />
            :
            <EyeIcon
                style={{ ...styles.icon, fontSize: this.props.size }} />
        return (
            <Button
                style={styles.button}
                onClick={this.props.handleClick} >
                {content}
            </Button>
        );
    }
}