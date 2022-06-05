
import Box from "@mui/material/Box";

import PortfolioTemplate2 from "../../container/PortfolioTemplate/PortfolioTemplate2";
import PortfolioTemplate1 from "../../container/PortfolioTemplate/PortfolioTemplate1";
import UpdatePortfolioDataNew from "../../container/Dashboard/UpdatePortfolioDataNew";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import Navbar from "../../components/Navbar/Navbar";

const Portfolio = () => {
    return (
        <>

            <PortfolioTemplate2 />
            <PortfolioTemplate1 />
            <Navbar />
            <UpdatePortfolioDataNew />
        </>
    );
}

export default Portfolio;
Portfolio.layout = null;
