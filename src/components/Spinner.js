import React from "react";

import styles from '../styles/components/Spinner';
import styleConstants from '../styles/styleConstants';

export default class Spinner extends React.Component {
    render() {
        return (
            <div id='spinner' style={styles.container}>
                <div style={styles.spinner}></div>
            </div>
        );
    }
}