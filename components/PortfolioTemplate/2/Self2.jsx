import Image from "next/image";
import selfImg1 from "../../public/images/portfolio/selfImg1.svg"
import styles from '../../styles/TemplateCSS/Self2.module.css'


function self() {
  return (
    <div className={styles.self_cont}>
      <div className={styles.text_self}>
        <h1> Heyy, I am Tralio!</h1>
        <button className={styles.btn}>ABOUT ME</button>
      </div>
      {/* <div className={styles.imgg}>
        <Image
          src={selfImg1}
          alt={"self"}
        />
      </div> */}
    </div>
  )
}

export default self