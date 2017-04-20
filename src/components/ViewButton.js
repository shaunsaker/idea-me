import React from "react";
import { Link } from "react-router";
import { Button } from 'react-bootstrap';
import EyeIcon from 'react-icons/lib/fa/eye';

import styles from '../styles/components/ViewButton';
import styleConstants from '../styles/styleConstants';

export default class ViewButton extends React.Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            size: React.PropTypes.number.isRequired,
            ideas: React.PropTypes.bool,
            categories: React.PropTypes.bool
        };
    }

    render() {
        const button = (this.props.ideas || this.props.categories) ?
            <EyeIcon
                style={{ ...styles.icon, fontSize: this.props.size }} />
            :
            <Button
                style={styles.button} >
                <EyeIcon
                    style={{ ...styles.icon, fontSize: this.props.size }} />
            </Button>

        const link = this.props.categories ? '/categories' : '/ideas';

        return (
            <Link to={link}>
                { button }
            </Link>
        );
    }
}