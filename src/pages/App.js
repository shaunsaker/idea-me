import React from "react";
import "../styles/main.scss";

import styles from '../styles/pages/App';

export default class App extends React.Component {  
  render() {
    return (
      <div style={styles.container}>
        {this.props.children}
      </div>
    );
  }
}
