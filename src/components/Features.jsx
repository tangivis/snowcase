import React from "react";
import assets from '../assets';
import styles from '../styles/Global';

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            ProNet has been deployed using a cross-platform techology, React Native.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features;
