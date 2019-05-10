import React from 'react';

import styles from './MobileMenuButton.module.css';

const MobileMenuButton = (props) => {
  return (
    <div className={styles.Mobile}>
      <button className={styles.Button + " btn texto-4"} onClick={props.open}><i className="fas fa-bars"></i></button>
    </div>
  )
}

export default MobileMenuButton;