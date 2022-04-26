import styles from '../../styles/TemplateCSS/Award2.module.css'

function Award() {
  return (
    <div className={styles.award_cont}>
        <div className={styles.card}>
            Awards
            <div className={styles.award_content}>
                <div className={styles.award}>
                    award
                </div>
                <div className={styles.award}>
                    award
                </div>
                <div className={styles.award}>
                    award
                </div>
                <div className={styles.award}>
                    award
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Award