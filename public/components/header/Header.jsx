import React from 'react';

import HeaderPrompt from './HeaderPrompt.jsx';
import HeaderLogo from './HeaderLogo.jsx';

import styles from '../../css/header.css'

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <header className={styles.header}>
          <HeaderPrompt task={this.props.task} fixture={this.props.fixture} />
          <HeaderLogo fixture={this.props.fixture} />
        </header>
      </div>
      );
  }
}
