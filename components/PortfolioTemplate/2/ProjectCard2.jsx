import styles from '../../../styles/TemplateCSS/2/ProjectCard2.module.css'

function ProjectCard() {
    return (
        <div className={styles.proj_cont}>
            <h1 className={styles.heading}>Projects</h1>
            <div className={styles.main}>
                <div className={styles.cont}>
                    <div>
                        <h2>PROJECT NAME</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error</p>
                        <p>START DATE - END DATE</p>
                    </div>
                    <div>
                        <button>VIEW</button>
                    </div>
                </div>
                <div className={styles.cont}>
                    <div>
                        <h2>PROJECT NAME</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error</p>
                        <p>START DATE - END DATE</p>
                    </div>
                    <div>
                        <button>VIEW</button>
                    </div>
                </div>
                <div className={styles.cont}>
                    <div>
                        <h2>PROJECT NAME</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error</p>
                        <p>START DATE - END DATE</p>
                    </div>
                    <div>
                        <button>VIEW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard