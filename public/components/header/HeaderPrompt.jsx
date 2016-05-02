import React from 'react';

import styles from '../../css/header.css'

const HeaderPrompt = ({fixture, task}) => {
  return (
    <div className={styles.prompt}>
        <span>{fixture.header.prompt.principal} <span className={styles.green}>{task.concept.toUpperCase()}</span>{fixture.header.prompt.punctuation}</span>
    </div>
  )
}

export default HeaderPrompt

