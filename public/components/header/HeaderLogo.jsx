import React from 'react';

import styles from '../../css/header.css'

const HeaderLogo = ({fixture}) => {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logoImage} src={fixture.header.logo} />
    </div>
  )
}

export default HeaderLogo