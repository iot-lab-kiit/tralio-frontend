import styles from "./HomePage.module.css";
import { test, registerUser } from "../../TralioAPI/tralio";
import { useState } from "react";
import registerForm from "../../TralioAPI/registerForm";
import Testomonial from "../../components/Testimonial/Testimonial";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function HomePage() {
  const [user, setUser] = useState({});
  const [registrationError, setRegistrationError] = useState(false);
  const [errorHeading, setErrorHeading] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  const generateSignUpForm = (input) => {
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
  };

  const handleRegistration = async () => {
    const response = await registerUser(user);

    // Checking if the response is an error
    if (response.status >= 200 && response.status < 300) {
      const newUser = await response.json();
      console.log("USER", newUser);
      // Further actions you want to perform after successful registration
    } else {
      const resError = await response.json();
      setRegistrationError(true);
      setErrorHeading(response.statusText);
      setErrorMessage(resError.error.message);
    }
  };

  const handleCloseRegistrationError = () => {
    setRegistrationError(false);
  };

  return (
    <div>
      <h1>Home Page</h1>

      {registerForm.map(generateSignUpForm)}

      <button onClick={handleRegistration}>Register</button>

      <button onClick={handleSomeAPIOperation}>Test API</button>
      <Testomonial />
      <Modal
        open={registrationError}
        onClose={handleCloseRegistrationError}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {errorHeading}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {errorMessage}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default HomePage;
