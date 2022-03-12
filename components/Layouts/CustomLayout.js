import React from 'react';
import Box from '@mui/material/Box';
import LandingNavbar from "../Navbar/LandingNavbar";
import Navbar from "../Navbar/Navbar";
import {useRouter} from "next/router";
import Footer from "../Footer/Footer";


const CustomLayout = ({ children }) => {

    const Router = useRouter();
    const path = Router.pathname;

    return (
        <>
            {path === '/' ? <LandingNavbar /> : <Navbar />}

            <Box mt={8}>
                { children }
            </Box>

            <Footer />
        </>
    );
};




export default CustomLayout;
