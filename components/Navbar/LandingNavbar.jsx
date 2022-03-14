import React, { useEffect, useRef, useState } from 'react';
import AppBar from "@mui/material/AppBar";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Link from "../Layouts/Link"
import Logo from "/public/images/Logos/logo.svg"
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import Login from "../../container/Login/Login";
import SignUp from "../../container/SignUp/SignUp";
import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        backDrop: {
            backdropFilter: "blur(3px)",
            backgroundColor:'rgba(0,0,30,0.4)'
        },
    }),
);

const LandingNavbar = () => {
    const classes = useStyles();

    // const [onTop, setOnTop] = useState(true);
    // const navRef = useRef();
    //
    // useEffect(() => {
    //     const position = navRef.current.offsetTop;
    //     window.onscroll = function () {
    //         if (window.pageYOffset > position) {
    //             setOnTop(false);
    //         } else {
    //             setOnTop(true);
    //         }
    //     };
    // });

    const [pop, setPop] = useState(false);

    const handleClick = (event) => {
        setPop(true);
    };

    const handleClose = () => {
        setPop(false);
    };

    return (
        <>
            <AppBar
                color={'transparent'}
                elevation={0}
                position="absolute"
            >
                <Container maxWidth={'lg'}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} pt={1} pb={1}>
                        <Box component={Link} noLinkStyle href="/" width={'120px'} height={'41px'}>
                            <Image src={Logo} alt={'logo'} />
                        </Box>
                        <Button variant={'contained'} onClick={handleClick}>
                            Login
                        </Button>
                        <Dialog
                            open={pop}
                            onClose={handleClose}
                            BackdropProps={{
                                classes: {
                                    root: classes.backDrop,
                                },
                            }}
                        >
                            <Pop />
                        </Dialog>
                    </Box>
                </Container>
            </AppBar>
        </>
    );
};

const Pop = () => {

    const [currentStage , setCurrentStage] = useState(0);

    return(
        <>
            <Box width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Box zIndex={1} width={'500px'} bgcolor={'white'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} pt={6} pb={6}>
                    {
                        currentStage === 0 &&
                        <Login setCurrentStage={setCurrentStage} />
                    }
                    {
                        currentStage === 1 &&
                        <SignUp setCurrentStage={setCurrentStage} />
                    }
                </Box>
            </Box>
        </>
    )
}

export default LandingNavbar;
