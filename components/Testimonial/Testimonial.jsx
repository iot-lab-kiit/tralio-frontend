import Image from 'next/image'
import dp from '../../public/images/Testimonial/dp.svg'
import styles from './Testimonial.module.css'


function Testimonial(props) {
  
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.img}>
          <Image src={props.avtar} alt="Pic" width={70} height={70}/>
        </div>
        <div className={styles.content}>
          <p>{props.description}</p>
          <h5>{props.name}</h5>
          <h4>{props.designation}</h4>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;
