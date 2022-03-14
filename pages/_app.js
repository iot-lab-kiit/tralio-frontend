import * as React from 'react';
import CustomLayout from "../components/Layouts/CustomLayout";
import {useEffect, useMemo, useState} from "react";
import globalStyles from '../styles/globals.css'


export default function MyApp(props) {

    const { Component, pageProps } = props;
    const [loading, setLoading] = useState(false);

    return (
        <>
            <CustomLayout>
                <Component {...pageProps} />
            </CustomLayout>
        </>

    );
}
