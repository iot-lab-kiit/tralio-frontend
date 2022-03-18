import React, {useState} from "react";
import DashboardDefault from "./DashboardDefault";
import DashboardPosts from "./DashboardPosts";
import DashboardPortfolio from "./DashboardPortfolio";
import Profile from "./Profile";
import UpdatePortfolioData from "./UpdatePortfolioData";

export default function Dashboard({dashboardPage, setDashboardPage}) {


    return (
        <>
            {
                dashboardPage === 0 &&
                    <DashboardDefault setDashboardPage={setDashboardPage} />
            }
            {
                dashboardPage === 1 &&
                    <DashboardPortfolio />
            }
            {
                dashboardPage === 2 &&
                    <DashboardPosts />
            }
            {
                dashboardPage === 3 &&
                    <Profile />
            }
            {
                dashboardPage === 4 &&
                    <UpdatePortfolioData />
            }
        </>
    )
}