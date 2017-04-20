import React from "react";
import { Link } from "react-router";
import { Button } from 'react-bootstrap';
import PlusIcon from 'react-icons/lib/fa/plus';

import styles from '../styles/components/AddButton';
import styleConstants from '../styles/styleConstants';

export default class AddButton extends React.Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            size: React.PropTypes.number.isRequired
        };
    }

    render() {
        const button = (this.props.ideas || this.props.categories) ?
            <PlusIcon
                style={{ ...styles.icon, fontSize: this.props.size }} />
            :
            <Button
                style={styles.button} >
                <PlusIcon
                    style={{ ...styles.icon, fontSize: this.props.size }} />
            </Button>

        const link = this.props.categories ? '/add-category' : '/add-idea';

        return (
            <Link to={link}>
                { button }
            </Link>
        );
    }
}