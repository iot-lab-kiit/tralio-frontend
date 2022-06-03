import {Grid} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import Card from "./Card";
import Box from "@mui/material/Box";


export default function Organisation({selectedButton}) {

    return (
        <>
            <Grid container spacing={4} display={"flex"} justifyContent={"space-between"}>
                <Grid item xs={12} sm={12} md={6}>
                    <Card icon={<PersonIcon sx={{ color: "#319EFF" }} />} selectedButton={selectedButton} index={0}>
                        <Box width={"100%"}>
                            <Box display={"flex"} alignItems={"flex-start"} fontSize={"16px"}>
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    Name:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    IoT
                                </Box>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                fontSize={"16px"}
                                mt={2}
                            >
                                <Box color={"#545454"} minWidth={"132px"} mr={4}>
                                    Position:
                                </Box>
                                <Box color={"#000"} fontSize={"16px"} fontWeight={600}>
                                    Member
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
                                    Delhi
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
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}