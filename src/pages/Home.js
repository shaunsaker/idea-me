import React from "react";

import styles from '../styles/pages/Home';
import styleConstants from '../styles/styleConstants';
import lightBulb from '../styles/img/lightbulb.png';

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
        <div style={styles.logoContainer}>
          <img src={lightBulb} width={50} height={50} style={styles.image}/>
          <p style={{...styles.title, ...styleConstants.dekko}}>IDEA ME!</p>
        </div>
      </div >
    );
  }
}