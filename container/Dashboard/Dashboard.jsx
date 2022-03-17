import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BackgroundSearch from "../../components/Dashboard/BackgroundSearch";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import TimelineIcon from '@mui/icons-material/Timeline';
import React, {useState} from "react";
import Button from "@mui/material/Button";
import CustomButton from "../../components/Dashboard/CustomButton";
import Hidden from "@mui/material/Hidden";
import DashboardMenu from "../../components/Dashboard/DashboardMenu";
import {FormControl, InputLabel, MenuItem, OutlinedInput, Select} from "@mui/material";

export default function Dashboard() {

    const [currentStage , setCurrentStage] = useState(0);

    return (
        <>
            <BackgroundSearch head={'The best free stock photos, royalty free images & videos shared by creators.'} src={'/backgrounds/dashboardBg3.jpg'} />
            <Container maxWidth={'lg'}>
                {/*flexDirection={{lg: 'row', md: 'row', sm: 'row', xs: 'column'}}*/}
                <Box mt={7} p={1} width={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <CustomButton id={'Update Data'} image={<EditIcon Portfolio />} onClick={() => {window.location.href = '/portfolio/update'}} />
                    <CustomButton id={'Add Post'} image={<AddIcon />} onClick={() => {window.location.href = '/posts'}} />
                    <Hidden mdDown>
                        <CustomButton id={'Check Task'} image={<TimelineIcon />} />
                    </Hidden>
                </Box>
                <Hidden mdUp>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <CustomButton id={'Check Task'} image={<TimelineIcon />} />
                    </Box>
                </Hidden>
                <Box p={1}>
                    <DashboardMenu />
                </Box>
                <Box p={1} bgcolor={'red'}>
                    <Box mt={100} />
                </Box>
            </Container>
        </>
    )
}