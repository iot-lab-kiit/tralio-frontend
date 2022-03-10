import styles from "./HomePage.module.css";
import { test, registerUser } from "../../TralioAPI/tralio";
import { useState } from "react";
import registerForm from "../../TralioAPI/registerForm";
import Testomonial from "../../components/Testimonial/Testimonial";

function HomePage() {
  const [user, setUser] = useState({});

  const handleSomeAPIOperation = async () => {
    const response = await test();
    console.log(response);
    return response;
  };

  const handleUserInfo = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  function generateSignUpForm(input) {
    return (
      <div className={styles.form} key={input.name}>
        <input
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
          value={input.value}
          onChange={handleUserInfo}
        />
      </div>
    );
  }

  async function handleRegistration() {
    const response = await registerUser(user);
    console.log("Response", response);
    console.log("Status Code", response.status);
    console.log("Status Text",response.statusText);
    console.log("Data", response.data);
    console.log("JSON", await response.json());
  }

  return (
    <div>
      <h1>Home Page</h1>

      {registerForm.map(generateSignUpForm)}

      <button
        onClick={handleRegistration}
      >
        Register
      </button>

      <button onClick={handleSomeAPIOperation}>Test API</button>
      <Testomonial />
    </div>
  );
}

export default HomePage;
