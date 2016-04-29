import React from 'react';
// import ReactDOM from 'react-dom';
import styles from '../css/instructor.css';

export default class InstructorPrompt extends React.Component {
  render() {
    return (
      <div>
        <span className={styles.question}>{this.props.fixture.instructor.prompt}</span>
      </div>
    );
  }
}
