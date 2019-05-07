import React from 'react';

import styles from './ProgressTop.module.css';

const ProgressTop = (props) => {
  return (
    <div className={styles.ProgressTop + " progress fixed-top"}>
      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success w-100" role="progressbar"></div>
    </div>
  )
}

export default ProgressTop;