import React from "react";
import { browserHistory } from "react-router";

import Header from '../components/Header';
import FooterButton from '../components/FooterButton';

import styles from '../styles/pages/NotFound';
import styleConstants from '../styles/styleConstants';

export default class NotFound extends React.Component {
    constructor(props) {
        super(props);

        this.navigateHome = this.navigateHome.bind(this);
    }

    navigateHome() {
        browserHistory.push('/');
    }

    render() {
        return (
            <div style={styles.container}>
                <Header />
                <p style={styles.text}>This page does not exist.</p>
                <FooterButton
                   text='GO HOME' 
                   handleClick={this.navigateHome} />
            </div>
        );
    }
}
