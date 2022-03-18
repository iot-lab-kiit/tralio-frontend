import * as React from 'react';
import CustomLayout from "../components/Layouts/CustomLayout";
import {useEffect, useMemo, useState} from "react";
import {SnackbarProvider} from "notistack";
import globalStyles from '../styles/globals.css'


export default function MyApp(props) {

    const { Component, pageProps } = props;
    const [loading, setLoading] = useState(false);

    const [dashboardPage,setDashboardPage] = useState(0);

    return (
        <>
            <SnackbarProvider>
                <CustomLayout setDashboardPage={setDashboardPage}>
                    <Component dashboardPage={dashboardPage} setDashboardPage={setDashboardPage} {...pageProps} />
                </CustomLayout>
            </SnackbarProvider>
        </>

    );
}
