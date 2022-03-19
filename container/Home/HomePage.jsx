import styles from "./HomePage.module.css";
import { test, registerUser } from "../../TralioAPI/tralio";
import { useState } from "react";
import registerForm from "../../TralioAPI/registerForm";
import Testomonial from "../../components/Testimonial/Testimonial";
import DetailSummary from "../../components/DetailSummary/DetailSummary";
import { HomeDetailSummary } from "../../TralioAPI/DetailSummary";
import DetailFeatures from "../../components/DetailFeatures/DetailFeatures";
import TopLandingScreen from "../../components/LandingPage/TopLandingScreen";
import Login from "../../container/Login/Login";
import SignUp from "../../container/SignUp/SignUp";
import ForgotPassword from "../../container/ForgotPassword/ForgotPassword";
import { HomeDetailFeature } from "../../TralioAPI/DetailFeature";
import Carousel from "../../components/Carousel/Carousel";

//Material UI
import { Box, Container } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { createStyles, makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const useStyles = makeStyles(() =>
  createStyles({
    backDrop: {
      backdropFilter: "blur(3px)",
      backgroundColor: "rgba(0,0,30,0.4)",
    },
  })
);

function HomePage() {
  const classes = useStyles();

  const [pop, setPop] = useState(false);

  const handleClick = (event) => {
    setPop(true);
  };

  const handleClose = () => {
    setPop(false);
  };

  const PropsDetailSummary = HomeDetailSummary.map(
    ({ id, images, heading, description }) => {
      return (
        <div>
          <DetailSummary
            id={id}
            images={images}
            heading={heading}
            description={description}
          />
        </div>
      );
    }
  );

  const PropsDetailFeature = HomeDetailFeature.map(
    ({ id, left_icon,  left_heading, left_description, right_icon, right_heading, right_description,}) => {
      return (
        <div>
          <DetailFeatures
            id={id}
            leftImages={left_icon}
            leftHeading={left_heading}
            leftDescription={left_description}
            rightImages={right_icon}
            rightHeading={right_heading}
            rightDescription={right_description}
          />
        </div>
      );
    }
  );


  return (
    <div>
      <TopLandingScreen />
      <Container maxWidth="lg">{PropsDetailSummary}</Container>
      <div className={styles.testimonial}>
        <div className={styles.testimonial_start}>
          <h2>A better way to build your resume</h2>
        </div>
        <Carousel />
        {/* <Testomonial /> */}
      </div>
      <Container>
        <div className={styles.feature_start}>
          <h2>A better way to build your resume</h2>
          <p>
            More flexible than templates, easier than using a word processor
          </p>
        </div>
        {PropsDetailFeature}
        <div className={styles.profBox}>
          <p className={styles.profile}>Flourish your profile online</p>
          <button href="#" className={styles.bt} onClick={handleClick}>
            Join Now
          </button>
          <Dialog
            open={pop}
            onClose={handleClose}
            BackdropProps={{
              classes: {
                root: classes.backDrop,
              },
            }}>
            <Pop />
          </Dialog>
        </div>
      </Container>
    </div>
  );
}

const Pop = () => {
  const [currentStage, setCurrentStage] = useState(1);

  return (
    <>
      <Box
        width={"100%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}>
        <Box
          zIndex={1}
          width={"500px"}
          bgcolor={"white"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          pt={6}
          pb={6}>
          {currentStage === 0 && <Login setCurrentStage={setCurrentStage} />}
          {currentStage === 1 && <SignUp setCurrentStage={setCurrentStage} />}
          {currentStage === -1 && (
            <ForgotPassword setCurrentStage={setCurrentStage} />
          )}
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
