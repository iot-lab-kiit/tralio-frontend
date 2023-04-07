import styles from '../../../styles/TemplateCSS/2/About2.module.css'


function About() {
  return (
    <div className={styles.about_cont}>
        <div className={styles.card}>
          <div className={styles.head}>
            ABOUT ME!
          </div>
            <div className={styles.about_content}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            </div>

        </div>
    </div>
  )
}

export default About