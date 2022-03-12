import React from 'react';
import Box from '@mui/material/Box';
import {createStyles, makeStyles} from '@mui/styles';
import Container from "@mui/material/Container";
import LandingNavbar from "../Navbar/LandingNavbar";
import Navbar from "../Navbar/Navbar";

const useStyles = makeStyles(() =>
    createStyles({
       main: {

       },
    }),
);

const CustomLayout = ({ children }) => {
    const classes = useStyles();

    return (
        <>
            {/*<LandingNavbar />*/}
            <Navbar />

            <Box mt={10}>
                { children }
            </Box>

            <Box>
                <Container maxWidth={'lg'}>

                </Container>
            </Box>
        </>
    );
};




export default CustomLayout;
