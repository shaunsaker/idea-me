import React from "react";

import Header from '../components/Header';

import styles from '../styles/pages/NotFound';
import styleConstants from '../styles/styleConstants';

export default class NotFound extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <Header />
                <p style={styles.text}>
                    This page does not exist.
        </p>
            </div>
        );
    }
}
