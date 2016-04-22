import React from 'react';
// import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Instructor from './Instructor.jsx';
import Workspace from './Workspace.jsx';
import Footer from './Footer.jsx';

export default class Wrapper extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Header	/>
        <Instructor	/>
        <Workspace />
        <Footer />
      </div>
    );
  }
}
