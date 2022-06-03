import {Grid} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import Card from "./Card";
import Box from "@mui/material/Box";


export default function Education({selectedButton}) {

    return (
        <>
            <Grid container spacing={4} display={"flex"} justifyContent={"space-between"}>
                <Grid item xs={12} sm={12} md={6}>
                    <Card icon={<PersonIcon sx={{ color: "#319EFF" }} />} selectedButton={selectedButton} index={0}>
                        <Box width={"100%"}>
                            <Box display={"flex"} alignItems={"flex-start"} fontSize={"16px"}>
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    Degree:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    B.Tech
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    School/University:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    KIIT
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    City:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    {/*{user?.education?.course ? user.education?.course : <span />}*/}
                                   Mumbai
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    Country:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    India
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    From:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    July 2020
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    To:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    May 2022
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card icon={<PersonIcon sx={{ color: "#319EFF" }} />} selectedButton={selectedButton} index={1}>
                        <Box width={"100%"}>
                            <Box display={"flex"} alignItems={"flex-start"} fontSize={"16px"}>
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    Degree:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    B.Tech
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    School/University:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    KIIT
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    City:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    {/*{user?.education?.course ? user.education?.course : <span />}*/}
                                    Mumbai
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    Country:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    India
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    From:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    July 2020
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    To:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    May 2022
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card icon={<PersonIcon sx={{ color: "#319EFF" }} />} selectedButton={selectedButton} index={2}>
                        <Box width={"100%"}>
                            <Box display={"flex"} alignItems={"flex-start"} fontSize={"16px"}>
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    Degree:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    B.Tech
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    School/University:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    KIIT
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    City:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    {/*{user?.education?.course ? user.education?.course : <span />}*/}
                                    Mumbai
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    Country:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    India
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    From:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    July 2020
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    To:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    May 2022
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card icon={<PersonIcon sx={{ color: "#319EFF" }} />} selectedButton={selectedButton} index={3}>
                        <Box width={"100%"}>
                            <Box display={"flex"} alignItems={"flex-start"} fontSize={"16px"}>
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    Degree:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    B.Tech
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    School/University:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    KIIT
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    City:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    {/*{user?.education?.course ? user.education?.course : <span />}*/}
                                    Mumbai
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    Country:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    India
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    From:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    July 2020
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    To:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    May 2022
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}