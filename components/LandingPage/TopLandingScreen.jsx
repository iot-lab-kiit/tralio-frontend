import React from 'react'
import { useState  } from 'react';
import Image from 'next/image'
import SideImage from '../../public/images/mainSidePic.svg'
import Login from "../../container/Login/Login";
import SignUp from "../../container/SignUp/SignUp";
import ForgotPassword from "../../container/ForgotPassword/ForgotPassword";
import styles from './TopLandingScreen.module.css'

import Box from "@mui/material/Box";
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

function TopLandingScreen() {
   const classes = useStyles();

   const [pop, setPop] = useState(false);

   const handleClick = (event) => {
     setPop(true);
   };

   const handleClose = () => {
     setPop(false);
   };
  return (
    <div className={styles.bg}>
      <div className={styles.leftText}>
        <div>
          <h1 className={styles.heading}>Lorem Ipsum Emet IoT Web</h1>
          <p className={styles.desc}>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button href="#" className={styles.bt} onClick={handleClick}>
            Join Us &rarr;
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
      </div>
      <div className={styles.imgSize}>
        <Image src={SideImage} alt="Pic" width={650} height={650} layout="intrinsic"/>
      </div>
    </div>
    // <div className={styles.bg}>
    //     <div className={styles.container}>
    //         <div className={styles.box1}>
    //             <div className={styles.heading}>
    //                 Lorem Ipsum Emet IoT Web
    //             </div>
    //             <div className={styles.descMain}>
    //                 <p className={styles.desc}>
    //                     Trafalgar provides progressive, and affordable
    //                     healthcare, accessible on mobile and online
    //                     for everyone
    //                 </p>
    //             </div>
    //             <button href="#" className={styles.bt}>Join Us &rarr;</button>
    //         </div>

    // <div className={styles.box2}>
    //     <Image src={SideImage} alt="Pic" className={styles.imgSize} />
    // </div>
    //     </div>
    // </div>
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
export default TopLandingScreen