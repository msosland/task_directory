import React from 'react';

import styles from '../css/header.css'

export default class HeaderPrompt extends React.Component {
  render() {
    return (
      <div className={styles.prompt}>
          <span>{this.props.fixture.prompt.principal} <span className={styles.green}>{this.props.task.concept.toUpperCase()}</span>{this.props.fixture.prompt.punctuation}</span>
      </div>
      );
  }
}