import Image from 'next/image'
import dp from '../../public/images/Testimonial/dp.svg'
import styles from './Testimonial.module.css'


function Testimonial() {
  
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.img}>
          <Image src={dp} alt="Pic" />
        </div>
        <div className={styles.content}>
          <p>Our dedicated patient engagement app and web portal allow you to access information.portal allow you to access information.</p>
          <h5>NAME</h5>
          <h4>CEO OF TRALIO</h4>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;
