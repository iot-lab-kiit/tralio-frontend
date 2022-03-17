import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import DashboardNavbar from "../Navbar/DashboardNavbar";
import LandingNavbar from "../Navbar/LandingNavbar";
import Navbar from "../Navbar/Navbar";
import {useRouter} from "next/router";
import Footer from "../Footer/Footer";
import Dashboard from "../../container/Dashboard/Dashboard";
import HomePage from "../../container/Home/HomePage";

const CustomLayout = ({ children }) => {

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
            {!isLoggedIn ? <LandingNavbar /> : path === '/' ? <DashboardNavbar /> : <Navbar />}

            {/*if ur components are going inside navbar then insert <Box mt={8}/> before it*/}
            <Box width={'100vw'}>
                { children }
            </Box>

            <Footer />
        </>
    );
};




export default CustomLayout;
