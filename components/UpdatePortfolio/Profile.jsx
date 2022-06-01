import {Grid} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import Card from "./Card";
import Box from "@mui/material/Box";


export default function Profile({selectedButton}) {

    return (
        <>
            <Grid container display={"flex"} justifyContent={"space-between"}>
                <Grid item xs={12} sm={12} md={6}>
                    <Card icon={<PersonIcon sx={{ color: "#319EFF" }} />} selectedButton={selectedButton} index={0}>
                        <Box width={"100%"}>
                            <Box display={"flex"} alignItems={"flex-start"} fontSize={"16px"}>
                                <Box color={"#545454"} minWidth={"100px"} mr={4}>
                                    First Name:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    Roshan
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"100px"} mr={4}>
                                    Last Name
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    Chatei
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"100px"} mr={4}>
                                    Bio:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    {/*{user?.education?.course ? user.education?.course : <span />}*/}
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Excepturi, rem!
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"100px"} mr={4}>
                                    Email:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    abc@gmail.com
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"100px"} mr={4}>
                                    Date of Birth:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    09-10-2002
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}