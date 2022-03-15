import React from 'react'
import styles from "./Dashboard.module.css"
export default function Templates() {
    return (
        <>
            <div className={styles.TemplatesParent}>
                <div className={styles.Templates}>
                    <img className={styles.TemplateImages} src="https://randompicturegenerator.com/img/people-generator/g917aa4b51bce7abf6b715d9755db732cbcf18c8d371adc10794d3f8c2017c67fa61633f7d036e9c55f4e5d1be17d4ab5_640.jpg" alt="" srcset="" />
                </div>
                <div className={styles.Templates}>
                    <img className={styles.TemplateImages} src="https://randompicturegenerator.com/img/people-generator/gbc4552953e8b863f0e84b8885f5de840e4db37c57c8802d19d6a72019ceba0b42878e1c87eeb3c00edb542fc7e223ce8_640.jpg" alt="" srcset="" />
                </div>
                <div className={styles.Templates}>
                    <img className={styles.TemplateImages} src="https://randompicturegenerator.com/img/people-generator/g07e340b4031806c79a1e3b09810a4cd1bba49351c028eb0e64cd85b55a26bb291777dfe4059b0938e9aa5a38c8fbf32b_640.jpg" alt="" srcset="" />
                </div>

            </div>

        </>
    )
}
