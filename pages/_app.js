import * as React from 'react';
import CustomLayout from "../components/Layouts/CustomLayout";
import {useEffect, useMemo, useState} from "react";

export default function MyApp(props) {

    const { Component, pageProps } = props;
    const [loading, setLoading] = useState(false);

    return (

        <CustomLayout>
            <Component {...pageProps} />
        </CustomLayout>
    );
}
