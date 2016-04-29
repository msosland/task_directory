import React from 'react';

import styles from '../css/header.css'

export default class HeaderLogo extends React.Component {
  render() {
    return (
      <div className={styles.logoContainer}>
        <img className={styles.logoImage} src={this.props.fixture.header.logo} />
      </div>
      );
  }
}