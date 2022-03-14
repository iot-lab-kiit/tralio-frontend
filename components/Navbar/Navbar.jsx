import React, { useEffect, useRef, useState } from 'react';
import AppBar from "@mui/material/AppBar";
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import Avatar from "@mui/material/Avatar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Navbar = () => {

    const [onTop, setOnTop] = useState(true);
    const navRef = useRef();

    useEffect(() => {
        const position = navRef.current.offsetTop;
        window.onscroll = function () {
            if (window.pageYOffset > position) {
                setOnTop(false);
            } else {
                setOnTop(true);
            }
        };
    });

    return (
        <>
            <AppBar
                color={'transparent'}
                ref={navRef}
                elevation={!onTop ? 4 : 0}
                position="fixed"
            >
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    p={1}
                    bgcolor={!onTop ? '#317CEB' : ''}
                    color={!onTop ? '#FFF' : '#317CEB'}
                >
                    <Box display={'flex'} alignItems={'center'}>
                        <IconButton>
                            <ArrowBackIcon />
                        </IconButton>
                        <Hidden mdDown>
                            <Box ml={1} fontSize={'20px'}>
                                Back to Dashboard
                            </Box>
                        </Hidden>
                    </Box>
                    <Avatar>K</Avatar>
                </Box>
            </AppBar>
        </>
    );
};




export default Navbar;
