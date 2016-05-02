import React from 'react';

import HeaderPrompt from './HeaderPrompt.jsx';
import HeaderLogo from './HeaderLogo.jsx';

import styles from '../../css/header.css'

const Header = ({task, fixture}) => {
  return (
    <div>
      <header className={styles.header}>
        <HeaderPrompt task={task} fixture={fixture} />
        <HeaderLogo fixture={fixture} />
      </header>
    </div>
  )
}

export default Header
