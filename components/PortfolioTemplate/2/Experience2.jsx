import styles from '../../styles/TemplateCSS/Experience2.module.css'

function Experience() {
  return (
    <div className={styles.experience_cont}>
        <h1 className={styles.heading}>Experience</h1>
        <div className={styles.container}>
          <h3>Company Name</h3>
          <p>Job Title</p>
          <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem</p>
          <p>City, Country</p>
          <p>2020-2024</p>
        </div>
        <div className={styles.container}>
          <h3>Company Name</h3>
          <p>Job Title</p>
          <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem</p>
          <p>City, Country</p>
          <p>2020-2024</p>
        </div>    
    </div>
  )
}

export default Experience