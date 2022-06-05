import styles from "../../styles/TemplateCSS/Course2.module.css"
import React from 'react'

function Course() {
    return (
        <div className={styles.course_cont}>
            <div className={styles.card}>
                <h1 className={styles.heading}>Courses</h1>
                <div className={styles.course_content}>
                    <div className={styles.course}>
                        <h3>Course Title</h3>
                        <h5>Institution Name</h5>
                        <p>City, Country</p>
                        <p>04/21 - 22/21</p>
                    </div>
                    <div className={styles.course}>
                        <h3>Course Title</h3>
                        <h5>Institution Name</h5>
                        <p>City, Country</p>
                        <p>04/21 - 22/21</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Course