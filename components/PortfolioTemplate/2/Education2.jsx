import Image from "next/image";
import img from "../../public/images/portfolio/eduImg1.jpeg"
import styles from '../../styles/TemplateCSS/Education2.module.css'

function Education() {
  return (
    <div className={styles.education_cont}>
      <h1 className={styles.edu_heading}>Education</h1>
      <div className={styles.main_edu_cont}>
        <div className={styles.edu_image_left}>
          <div className={styles.imgg_edu}>
            <Image
              src={img}
              alt={"Edu"}
              height="400"
              width="500"
            />
          </div>
        </div>
        <div className={styles.edu_content_right}>
          <div className={styles.edu_container}>
            <h3>Degree Name</h3>
            <h4>University Name</h4>
            <p>City, Country</p>
            <p>2020-2024</p>
          </div>
          <div className={styles.edu_container}>
            <h3>Degree Name</h3>
            <h4>University Name</h4>
            <p>City, Country</p>
            <p>2020-2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education

