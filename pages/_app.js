import * as React from 'react';
import CustomLayout from "../components/Layouts/CustomLayout";
import {useEffect, useMemo, useState} from "react";
import {SnackbarProvider} from "notistack";
import globalStyles from '../styles/globals.css'


export default function MyApp(props) {

    const { Component, pageProps } = props;

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("access-token")) {
            setIsLoggedIn(true);
        }
    }, []);

    const [dashboardPage,setDashboardPage] = useState(0);

    return (
        <>
            <SnackbarProvider>
                <CustomLayout isLoggedIn={isLoggedIn} setDashboardPage={setDashboardPage}>
                    <Component isLoggedIn={isLoggedIn} dashboardPage={dashboardPage} setDashboardPage={setDashboardPage} {...pageProps} />
                </CustomLayout>
            </SnackbarProvider>
        </>

    );
}
