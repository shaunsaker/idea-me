import React from "react";

import styles from '../styles/components/Count';
import styleConstants from '../styles/styleConstants';

export default class Count extends React.Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            count: React.PropTypes.number.isRequired,
            total: React.PropTypes.number.isRequired,
            unit: React.PropTypes.string.isRequired,
        };
    }

    render() {
        return (
            <div id='count' style={styles.countContainer}>
                <p style={{...styles.countText, ...styleConstants.sourceSansPro}}>
                    {this.props.count}
                    <span style={styles.separator}>/</span>
                    {this.props.total}
                    <span style={styles.unit}>{this.props.unit}</span>
                </p>
            </div>
        );
    }
}