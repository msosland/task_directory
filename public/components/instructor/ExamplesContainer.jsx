import React from 'react';
// import ReactDOM from 'react-dom';
import ExampleImage from './ExampleImage.jsx';

import styles from '../../css/instructor.css';

export default class ExamplesContainer extends React.Component {
  render() {
    console.log(this.props.fixture.instructor.images);
    var exampleImages = this.props.fixture.instructor.images.map(function(exampleImage) {
      return (
        <ExampleImage src={exampleImage.src} exampleAnswer={exampleImage.exampleAnswer} correct={exampleImage.correct}/>
      );
    });
    return (
      <div className={styles.example}>
        {exampleImages}
      </div>
    );
  }
}
