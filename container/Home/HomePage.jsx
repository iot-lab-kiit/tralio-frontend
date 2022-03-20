import Head from "next/head";
import { useState } from "react";
import styles from "./HomePage.module.css";

// Components
import Pop from "../../components/LoginSignupPop/LoginSignupPop";
import DetailFeatures from "../../components/DetailFeatures/DetailFeatures";
import DetailSummary from "../../components/DetailSummary/DetailSummary";
import TopLandingScreen from "../../components/LandingPage/TopLandingScreen";

// Data Utilities
import homeDetailSummary from "../../TralioAPI/DetailSummary";
import homeDetailFeature from "../../TralioAPI/homeDetailFeature";

import Carousel from "../../components/Carousel/Carousel";

//Material UI
import { Container } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { createStyles, makeStyles } from "@mui/styles";

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

  const generateHomeDetailSummary = ({ id, images, heading, description }) => {
    return (
      <div key={"Home Summary " + id}>
        <DetailSummary
          id={id}
          images={images}
          heading={heading}
          description={description}
        />
      </div>
    );
  };

  const generateHomeDetailFeature = ({
    id,
    left_icon,
    left_heading,
    left_description,
    right_icon,
    right_heading,
    right_description,
  }) => {
    return (
      <div key={"Home Feature" + id}>
        <DetailFeatures
          leftImages={left_icon}
          leftHeading={left_heading}
          leftDescription={left_description}
          rightImages={right_icon}
          rightHeading={right_heading}
          rightDescription={right_description}
        />
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>Tralio</title>
      </Head>
      <TopLandingScreen />
      <Container maxWidth="lg" className={styles.increase_padding}>
        {homeDetailSummary.map(generateHomeDetailSummary)}
      </Container>
      <div className={styles.testimonial}>
        <div className={styles.testimonial_start}>
          <h2>A better way to build your resume</h2>
        </div>
        <Carousel />
      </div>
      <Container className={styles.increase_padding}>
        <div className={styles.feature_start}>
          <h2>A better way to build your resume</h2>
          <p>
            More flexible than templates, easier than using a word processor
          </p>
        </div>
        {homeDetailFeature.map(generateHomeDetailFeature)}
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
            }}
          >
            <Pop initial={1} />
          </Dialog>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
