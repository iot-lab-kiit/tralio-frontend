import * as React from 'react';
import CustomLayout from '../components/Layouts/CustomLayout';
import { useEffect, useMemo, useState } from 'react';
import {SnackbarProvider, useSnackbar} from 'notistack';
import globalStyles from '../styles/globals.css';
import { UserProvider } from '../store/UserContext';
import { PortfolioProvider } from '../store/PortfolioContext';
import restApp, { authCookieName, cookieStorage } from '../apis/rest.app';
import { useRouter } from 'next/router';
import { portfolioService } from '../apis/rest.app';
import loginForm from "../TralioAPI/loginForm";

export default function MyApp(props) {
    const { Component, pageProps } = props;
    const [user, setUser] = useState(null);
    const [remotePortfolio, setRemotePortfolio] = useState(null);
    let Layout = CustomLayout;
    if (Component.layout === null) Layout = React.Fragment;
    else if (Component.layout) Layout = Component.layout;

    const Router = useRouter();

    const createPortfolio = async () => {
        await portfolioService.create({})
            .then((res) => {
                setRemotePortfolio(res)
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const portfolioExists = async () => {
        await portfolioService.find()
            .then((res) => {
                if(res){
                    // console.log("res", res)
                    setRemotePortfolio(res)
                }
                else createPortfolio()
            })
            .catch((err) => {
                console.log(err)
            });
    }

    useEffect(() => {
        if(!remotePortfolio)
            portfolioExists().then(r => console.log(r));
    })


    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        try {
            restApp.reAuthenticate().then(async (res) => {
                // console.log("Response auth", res);
                setIsLoggedIn(true);
                setUser(res.user);
                // portfolio ? setRemotePortfolio(portfolio) : await createPortfolio();
            }).catch((err) => {
                setIsLoggedIn(false);
            });
        }
        catch (error) {
            console.log(error);
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
    // console.log(remotePortfolio)

    return (
        <UserProvider value={user}>
            <PortfolioProvider value={remotePortfolio}>
                <SnackbarProvider>
                    <Layout
                        isLoggedIn={isLoggedIn}
                        setDashboardPage={setDashboardPage}
                    >
                        <Component
                            isLoggedIn={isLoggedIn}
                            dashboardPage={dashboardPage}
                            setDashboardPage={setDashboardPage}
                            {...pageProps}
                        />
                    </Layout>
                </SnackbarProvider>
            </PortfolioProvider>
        </UserProvider>
    );
}
