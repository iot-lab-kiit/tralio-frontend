import React from "react";
import styles from "../BgImage/BgImage.module.css"
export default function BgImage() {
  return (
    <>
      <div className={styles.firstContainer}>
        <div>
          <p className={styles.heading}>Lorem ipsum dolor sit amet, conse</p>
          <input className={styles.input} placeholder="Search 🔍" />
        </div>
      </div>
    </>
  );
}
