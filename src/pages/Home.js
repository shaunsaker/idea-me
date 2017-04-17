import React from "react";

import styles from '../stylesheets/pages/Home';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {

    };
  }

  render() {
    return (
      <div style={styles.container}>
        <p>Hello World!</p>
      </div >
    );
  }
}