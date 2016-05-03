import React from 'react';
// import ReactDOM from 'react-dom';
import Header from './header/Header.jsx';
import Instructor from './instructor/Instructor.jsx';
import Workspace from './workspace/Workspace.jsx';
import Footer from './footer/Footer.jsx';

import styles from '../css/wrapper.css';

import fixture from '../fixtures/task_img_verification.json';
const task = {
  concept: 'monster truck',
};

export default class Wrapper extends React.Component {

  render() {
    // console.log('bob', fixtureData);
    return (
      <div className={styles.wrapper}>
        <Header task={task} fixture={fixture} />
        <Instructor	fixture={fixture} />
        <Workspace fixture={fixture} />
        <Footer />
      </div>
    );
  }
}
