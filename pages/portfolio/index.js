import React from 'react';
import Box from "@mui/material/Box";
import BackgroundSearch from "../../components/Dashboard/BackgroundSearch";

export default function Portfolio() {
    return (
        <>
            <BackgroundSearch head={'The best free stock photos, royalty free images & videos shared by creatorCollaborate, manage projects'} src={'/backgrounds/dashboardBg3.jpg'} />
            <Box mt={2} textAlign={'center'}>Portfolio page*</Box>
            <Box mt={100}/>
        </>
    );
}
