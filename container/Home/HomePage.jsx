import styles from './HomePage.module.css';
import { test } from '../../TralioAPI/tralio';
import { useState } from 'react';
import userPayloadInterface from '../../TralioAPI/payloadsInterface';
import Testomonial from '../../components/Testimonial/Testimonial';

function HomePage() {

  const [user, setUser] = useState(userPayloadInterface);   

  const handleSomeAPIOperation = async () => {

    const response = await test();
    console.log(response);
    return response;
  }


  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleSomeAPIOperation}>Test API</button>
      <Testomonial />
    </div>
  )
}

export default HomePage