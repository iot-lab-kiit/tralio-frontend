import React, {useState} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BackgroundSearch from "../../components/Dashboard/BackgroundSearch";

export default function DashboardPortfolio() {

    return (
        <>
            <BackgroundSearch color={'#fff'} head={'Time and time again, Moshes students praise his ability to break down complex topics into simple, digestible'} src={'/backgrounds/dashboardBg1.jpg'} />
            <Container maxWidth={'lg'}>
                Dashboard portfolio
            </Container>
            <Box mt={100} />
        </>
    )
}