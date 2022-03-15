import styles from "./HomePage.module.css";
import { test, registerUser } from "../../TralioAPI/tralio";
import { useState } from "react";
import registerForm from "../../TralioAPI/registerForm";
import Testomonial from "../../components/Testimonial/Testimonial";
import TopLandingScreen from "../../components/LandingPage/TopLandingScreen";

//Material UI
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
  const [registrationModal, setRegistrationModal] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [modalMessage, setModalMessage] = useState("");

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

  const handleRegistrationModal = () => {
    setRegistrationModal(false);
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
      
      setRegistrationModal(true);
      setModalHeading(response.statusText);
      setModalMessage("User Successfully Registered");
      // Further actions you want to perform after successful registration
    } else {
      const resError = await response.json();
      setRegistrationModal(true);
      setModalHeading(response.statusText);
      setModalMessage(resError.error.message);
    }
  };


  return (
    <div>
      <TopLandingScreen />
      <h1>Home Page</h1>
      

      {registerForm.map(generateSignUpForm)}    

      <button onClick={handleRegistration}>Register</button>

      <button onClick={handleSomeAPIOperation}>Test API</button>
      <Testomonial />
      <Modal
        open={registrationModal}
        onClose={handleRegistrationModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalHeading}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalMessage}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default HomePage;
