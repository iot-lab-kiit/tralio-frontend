import * as React from 'react';
import CustomLayout from "../components/Layouts/CustomLayout";
import {useEffect, useMemo, useState} from "react";
import {SnackbarProvider} from "notistack";
import globalStyles from '../styles/globals.css'


export default function MyApp(props) {

    const { Component, pageProps } = props;
    const [loading, setLoading] = useState(false);

    return (
        <>
            <SnackbarProvider>
                <CustomLayout>
                    <Component {...pageProps} />
                </CustomLayout>
            </SnackbarProvider>
        </>

    );
}
