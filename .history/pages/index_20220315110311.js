import HomePage from "../container/Home/HomePage";
import Dashboard from "../container/Dashboard/Dashboard";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("access-token")) {
            setIsLoggedIn(true);
        }
    }, []);

    return isLoggedIn ? <Dashboard /> : <HomePage />;
}
