import React from 'react'
import Image from 'next/image'
import SideImage from '../../public/images/mainSidePic.svg'
import styles from './TopLandingScreen.module.css'

function TopLandingScreen() {
    return (
        <div className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.box1}>
                    <div className={styles.heading}>
                        Lorem Ipsum Emet IoT Web
                    </div>
                    <div className={styles.descMain}>
                        <p className={styles.desc}>
                            Trafalgar provides progressive, and affordable
                            healthcare, accessible on mobile and online
                            for everyone
                        </p> 
                    </div>
                    <button href="#" className={styles.bt}>Join Us &rarr;</button>
                </div>

                <div className={styles.box2}>
                    <Image src={SideImage} alt="Pic" className={styles.imgSize} />
                </div>
            </div>
        </div>
    )
}

export default TopLandingScreen