import React from "react";
import { Link } from "react-router";
import { Button } from 'react-bootstrap';
import PlusIcon from 'react-icons/lib/fa/plus';

import styles from '../styles/components/AddIdeaButton';
import styleConstants from '../styles/styleConstants';

export default class AddIdeaButton extends React.Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            size: React.PropTypes.number.isRequired
        };
    }

    render() {
        const button = this.props.ideas ?
            <PlusIcon
                style={{ ...styles.icon, fontSize: this.props.size }} />
            :
            <Button
                style={styles.button} >
                <PlusIcon
                    style={{ ...styles.icon, fontSize: this.props.size }} />
            </Button>

        return (
            <Link to='/add-idea'>
                { button }
            </Link>
        );
    }
}