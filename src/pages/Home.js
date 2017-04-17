import React from "react";
import { Link } from "react-router";
import { Button } from 'react-bootstrap';
import EyeIcon from 'react-icons/lib/fa/eye';

import Header from '../components/Header';
import AddIdeaButton from '../components/AddIdeaButton';

import styles from '../styles/pages/Home';
import styleConstants from '../styles/styleConstants';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container}>
        <Header home={true} />
        <AddIdeaButton size={48}/>
        <Link to='ideas'>
          <Button
            style={styles.button} >
            <EyeIcon
              style={styles.icon} />
          </Button>
        </Link>
      </div >
    );
  }
}