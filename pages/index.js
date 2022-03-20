import HomePage from "../container/Home/HomePage";
import Dashboard from "../container/Dashboard/Dashboard";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home({dashboardPage, setDashboardPage, isLoggedIn}) {

    return isLoggedIn ? <Dashboard dashboardPage={dashboardPage} setDashboardPage={setDashboardPage} /> : <HomePage />;
}
