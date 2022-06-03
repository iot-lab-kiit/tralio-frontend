import * as React from 'react';
import CustomLayout from '../components/Layouts/CustomLayout';
import { useEffect, useMemo, useState } from 'react';
import { SnackbarProvider } from 'notistack';
import globalStyles from '../styles/globals.css';
import { UserProvider } from '../store/UserContext';
import { PortfolioProvider } from '../store/PortfolioContext';
import restApp, { authCookieName, cookieStorage } from '../apis/rest.app';
import { useRouter } from 'next/router';
import { portfolioService } from '../apis/rest.app';

export default function MyApp(props) {
    const { Component, pageProps } = props;
    const [user, setUser] = useState(null);
    const [remotePortfolio, setRemotePortfolio] = useState(null);

    const Router = useRouter();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('access-token')) {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        async function fetchPortfolio() {
            const porfolio = await portfolioService.get('pass id here');
            setRemotePortfolio(porfolio);
        }
        // if (condition)
        //  fetchPortfolio();
    }, []);

    const [dashboardPage, setDashboardPage] = useState(0);

    return (
        <UserProvider value={user}>
            <PortfolioProvider value={remotePortfolio}>
                <SnackbarProvider>
                    <CustomLayout
                        isLoggedIn={isLoggedIn}
                        setDashboardPage={setDashboardPage}
                    >
                        <Component
                            isLoggedIn={isLoggedIn}
                            dashboardPage={dashboardPage}
                            setDashboardPage={setDashboardPage}
                            {...pageProps}
                        />
                    </CustomLayout>
                </SnackbarProvider>
            </PortfolioProvider>
        </UserProvider>
    );
}
