import React from "react";
import { Link } from "react-router";
import { Button } from 'react-bootstrap';

import Header from '../components/Header';
import AddButton from '../components/AddButton';
import ViewButton from '../components/ViewButton';

import styles from '../styles/pages/Home';
import styleConstants from '../styles/styleConstants';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container}>
        <Header allowBack={false} />
        <AddButton size={48} />
        <ViewButton size={48} />
      </div >
    );
  }
}