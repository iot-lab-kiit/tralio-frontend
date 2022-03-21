import {useState} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BackgroundSearch from "../../components/Dashboard/BackgroundSearch";

export default function DashboardPosts() {

    return (
        <>
            <BackgroundSearch color={'#fff'} head={'This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages'} src={'/backgrounds/dashboardBg2.jpg'} />
            <Container maxWidth={'lg'}>
                Dashboard posts
            </Container>
            <Box mt={100} />
        </>
    )
}