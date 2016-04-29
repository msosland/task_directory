import React from 'react';
// import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Instructor from './Instructor.jsx';
import Workspace from './Workspace.jsx';
import Footer from './Footer.jsx';

import fixture from '../fixtures/task_img_verification.json';
const task = {
  concept: 'monster truck',
};

export default class Wrapper extends React.Component {

  render() {
    // console.log('bob', fixtureData);
    return (
      <div id="wrapper">
        <Header task={task} fixture={fixture} />
        <Instructor	fixture={fixture} />
        <Workspace />
        <Footer />
      </div>
    );
  }
}
