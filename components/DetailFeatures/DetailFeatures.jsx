import React from "react";
import styles from './DetailFeatures.module.css'
import Image from "next/image";

function DetailFeatures(props) {
  return (
    <>  
      <div className={styles.Feature} key={props.id}>
        <Image className={styles.ImgFeature} src={props.images} alt={props.heading} width={45} height={40}/>
        <h2>{props.heading}</h2>
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default DetailFeatures; 