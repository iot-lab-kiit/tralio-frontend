import * as React from 'react';
import CustomLayout from '../components/Layouts/CustomLayout';
import { useEffect, useMemo, useState } from 'react';
import { SnackbarProvider } from 'notistack';
import globalStyles from '../styles/globals.css';
import { UserProvider } from '../store/UserContext';
import restApp, { authCookieName, cookieStorage } from '../apis/rest.app'

export default function MyApp(props) {
    const { Component, pageProps } = props;
    const [user, setUser] = useState(null);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('access-token')) {
            setIsLoggedIn(true);
        }
    }, []);
    useEffect(() => {
        const token = localStorage.getItem(authCookieName);

        async function fetchUser() {
            if (token) {
                restApp
                    .authenticate({
                        strategy: 'jwt',
                        accessToken: token,
                    })
                    .then(async (res) => {
                        localStorage.setItem(authCookieName, res.accessToken);
                        cookieStorage.setItem(authCookieName, res.accessToken);
                        await restApp.reAuthenticate();
                        if (Router.pathname === '/login')
                            await Router.push('/');
                        setUser(res.user);
                    })
                    .catch(async (err) => {
                        if (Router.pathname !== '/login')
                            await Router.push('/login');
                    })
                    .finally(() => setLoading(false));
            } else {
                if (Router.pathname !== '/login') await Router.push('/login');
                setLoading(false);
            }
        }
        fetchUser();
    }, []);

    const [dashboardPage, setDashboardPage] = useState(0);

    return (
        <UserProvider value={user}>
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
        </UserProvider>
    );
}
