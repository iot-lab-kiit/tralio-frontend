import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import DashboardNavbar from "../Navbar/DashboardNavbar";
import LandingNavbar from "../Navbar/LandingNavbar";
import Navbar from "../Navbar/Navbar";
import {useRouter} from "next/router";
import Footer from "../Footer/Footer";

const CustomLayout = ({ children, setDashboardPage }) => {

    const Router = useRouter();
    const path = Router.pathname;

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("access-token")) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <>
            {!isLoggedIn ? <LandingNavbar  /> : path === '/' ? <DashboardNavbar setDashboardPage={setDashboardPage} /> : <Navbar setDashboardPage={setDashboardPage} />}

            {/*if ur components are going inside navbar then insert <Box mt={8}/> before it*/}
            <Box width={'100%'}>
                { children }
            </Box>

            <Footer />
        </>
    );
};




export default CustomLayout;
