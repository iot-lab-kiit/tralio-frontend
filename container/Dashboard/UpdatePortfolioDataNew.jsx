import {useState} from "react";
import {Box, Button, Grid, Hidden} from "@mui/material";
import {portfolioButtons} from "../../utils/UpdatePortfolioHelper";
import Divider from "@mui/material/Divider";
import Profile from "../../components/UpdatePortfolio/Profile";

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
                    <Box width={'100%'} px={8} mt={4}>
                        <h1>{selectedButton}</h1>
                        <Divider />
                        <Box mt={5} />
                        <Profile selectedButton={selectedButton} />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}