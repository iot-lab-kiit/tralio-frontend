import styles from '../../../styles/TemplateCSS/2/Organization2.module.css'

function Organization() {
  return (
    <div className={styles.organization_cont}>
        <h1 className={styles.heading}>Organization</h1>
        <div className={styles.container}>
          <h3>Organization Name</h3>
          <p>Job Title</p>
          <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
          <p>City</p>
          <p>Country</p>
          <p>2020-2024</p>
        </div>
        <div className={styles.container}>
          <h3>Organization Name</h3>
          <p>Job Title</p>
          <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
          <p>City Name</p>
          <p>Country Name</p>
          <p>2020-2024</p>
        </div>    
    </div>
  )
}

export default Organization