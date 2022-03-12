import React, { useEffect, useRef, useState } from 'react';
import AppBar from "@mui/material/AppBar";
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {createStyles, makeStyles, useTheme} from '@mui/styles';
import {Avatar, Container, Divider, Grid, Typography} from "@mui/material";
import Link from "../Layouts/Link"
import Logo from "/public/images/Logos/logo.svg"
import Image from "next/image";

const useStyles = makeStyles(() =>
    createStyles({
       main: {

       },
    }),
);

const LandingNavbar = () => {
    // const classes = useStyles();

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
                        <Button variant={'contained'}>
                            Login
                        </Button>
                    </Box>
                </Container>
            </AppBar>
        </>
    );
};




export default LandingNavbar;
