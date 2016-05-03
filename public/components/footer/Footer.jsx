import React from 'react';

import styles from '../../css/footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <button className={styles.submitButton}>Submit</button>
      </div>
      );
  }
}
