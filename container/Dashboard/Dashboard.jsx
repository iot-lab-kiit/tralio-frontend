import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BackgroundSearch from "../../components/Dashboard/BackgroundSearch";
import {useState} from "react";

export default function Dashboard() {
    const [currentStage , setCurrentStage] = useState(0);


    return (
        <>
            <Box
                width={'100%'}
                sx={{
                    background: {lg: `url(${'/backgrounds/dashboardBg1.jpg'})`,
                        md: `url(${'/backgrounds/dashboardBg1.jpg'})`,
                        sm: `url(${'/backgrounds/dashboardBg1.jpg'})`,
                        xs: '#f3edeb'
                    },
                    backgroundSize: 'cover',
                    height: '550px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Container maxWidth={'lg'}>
                    <BackgroundSearch />
                </Container>
            </Box>
            <Container maxWidth={'lg'}>
                <Box p={1} width={'100%'}>
                    <Box mt={100} />
                </Box>
            </Container>
        </>
    )
}