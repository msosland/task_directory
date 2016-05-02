import React from 'react';
// import ReactDOM from 'react-dom';
import ExampleImage from './ExampleImage.jsx';

import styles from '../../css/instructor.css';

export default class ExamplesContainer extends React.Component {
  render() {
    return (
      <div className={styles.example}>
        {this.props.fixture.instructor.images.map((exampleImage) => {
          return <ExampleImage src={exampleImage.src} exampleAnswer={exampleImage.exampleAnswer} correct={exampleImage.correct}/>
        })}
      </div>
    );
  }
}
