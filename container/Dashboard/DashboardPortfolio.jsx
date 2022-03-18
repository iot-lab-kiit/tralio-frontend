import React, {useState} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BackgroundSearch from "../../components/Dashboard/BackgroundSearch";

export default function DashboardPortfolio() {

    const [currentStage , setCurrentStage] = useState(0);

    return (
        <>
            <BackgroundSearch color={'#fff'} head={'Time and time again, Mosh\'s students praise his ability to break down complex topics into simple, digestible'} src={'/backgrounds/dashboardBg6.jpg'} />
            <Container maxWidth={'lg'}>
                Dashboard portfolio
            </Container>
            <Box mt={100} />
        </>
    )
}