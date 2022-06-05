import {useState} from "react";
import {Box, Button, Grid, Hidden} from "@mui/material";
import {portfolioButtons} from "../../utils/UpdatePortfolioHelper";
import Divider from "@mui/material/Divider";
import Profile from "../../components/UpdatePortfolio/Profile";
import UpdateProfile from "../../components/UpdatePortfolio/UpdateProfile";
import Education from "../../components/UpdatePortfolio/Education";
import Skill from "../../components/UpdatePortfolio/Skill";
import Project from "../../components/UpdatePortfolio/Project";
import Experience from "../../components/UpdatePortfolio/Experience";
import Course from "../../components/UpdatePortfolio/Course";
import Organisation from "../../components/UpdatePortfolio/Organisation";
import Interest from "../../components/UpdatePortfolio/Interest";
import Award from "../../components/UpdatePortfolio/Award";
import AddPortfolioData from "../../components/AddPortfolioData";

export default function UpdatePortfolioDataNew() {

    const [selectedButton, setSelectedButton] = useState('Profile')

    const generatePortfolioButtons = (buttonName) => {
        return (
            <Box
                key={buttonName}
                sx={{ py: 1, mx: 1, textAlign: "center" }}>
                <Button
                    variant={selectedButton === buttonName ? "outlined" : 'contained'}
                    sx={{
                        width: 150,
                        p: 1,
                    }}
                    onClick={() => {
                        setSelectedButton(buttonName)
                    }}
                >
                    {buttonName}
                </Button>
            </Box>
        );
    };

    const renderDetails = () => {
        if(selectedButton === "Profile")
            return <Profile selectedButton={selectedButton} />
        if(selectedButton === "Educations")
            return <Education selectedButton={selectedButton} />
        if(selectedButton === "Skills")
            return <Skill selectedButton={selectedButton} />
        if(selectedButton === "Projects")
            return <Project selectedButton={selectedButton} />
        if(selectedButton === "Experiences")
            return <Experience selectedButton={selectedButton} />
        if(selectedButton === "Courses")
            return <Course selectedButton={selectedButton} />
        if(selectedButton === "Organisations")
            return <Organisation selectedButton={selectedButton} />
        if(selectedButton === "Interests")
            return <Interest selectedButton={selectedButton} />
        if(selectedButton === "Awards")
            return <Award selectedButton={selectedButton} />
    }


    return (
        <>
            <Grid container display={"flex"} justifyContent={"space-between"}>
                <Grid item xs={0} sm={3} md={2}>
                    <Hidden smDown>
                        <Box
                            mt={12}
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={"center"}>
                            {portfolioButtons.map(generatePortfolioButtons)}
                        </Box>
                    </Hidden>
                </Grid>
                <Grid item mt={8} xs={12} sm={9} md={10}>
                    <Box width={'100%'} px={{lg: 8, md: 8, sm: 6, xs: 2}} mt={4} mb={4}>
                        <Box display={"flex"}
                             alignItems={"center"}
                             justifyContent={"space-between"}
                        >
                            <h1>{selectedButton}</h1>
                            <AddPortfolioData selectedButton={selectedButton} />
                        </Box>

                        <Divider />
                        <Box mt={5} />
                        {
                            renderDetails()
                        }
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}