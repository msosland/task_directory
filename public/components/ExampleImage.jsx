import React from 'react';
// import ReactDOM from 'react-dom';
import styles from '../css/instructor.css';

export default class ExampleImage extends React.Component {
  render() {
    var className = styles.exampleAnswer;
    if (this.props.correct === "true") {
      className = styles.correct;
    }
    return (
      <div className={styles.example}>
        <img className={styles.exampleImage} src={this.props.src} />
        <div className={className}>{this.props.exampleAnswer}</div>
      </div>
    );
  }
}
