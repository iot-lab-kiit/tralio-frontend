import HomePage from "../container/Home/HomePage";
import Dashboard from "../container/Dashboard/Dashboard";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home({dashboardPage, setDashboardPage}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("access-token")) {
            setIsLoggedIn(true);
        }
    }, []);

    return isLoggedIn ? <Dashboard dashboardPage={dashboardPage} setDashboardPage={setDashboardPage} /> : <HomePage />;
}
