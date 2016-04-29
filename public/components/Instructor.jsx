import React from 'react';
// import ReactDOM from 'react-dom';
import InstructorPrompt from './InstructorPrompt.jsx';
import ExamplesContainer from './ExamplesContainer.jsx';

import styles from '../css/instructor.css';

export default class Instructor extends React.Component {
  render() {
    return (
      <div>
        <InstructorPrompt fixture={this.props.fixture} />
        <ExamplesContainer fixture={this.props.fixture} />
      </div>
    );
  }
}
