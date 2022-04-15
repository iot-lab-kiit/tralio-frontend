
import Box from "@mui/material/Box";
import {Button, Container, Grid} from "@mui/material";
import Title from "../Title";

export default function Project1() {
    return (
        <>
            <Box width={'100%'} bgcolor={'#000'} py={10}  sx={{
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}>
                <Container maxWidth={'lg'}>
                    <Title value={'Projects'} text={1} />
                    <Box mt={10} />
                    <Grid container spacing={4}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Box width={'100%'} bgcolor={'rgba(255, 255, 255, 0.1)'} p={5} color={'#fff'}>
                                <Box fontSize={'25px'} fontWeight={500}>
                                    {'Trailo'}
                                </Box>
                                <Box lineHeight={1.5} mt={2} fontSize={'18px'} fontWeight={400} color={'#909090'}>
                                    {'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'}
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Box width={'100%'} bgcolor={'rgba(255, 255, 255, 0.1)'} p={5} color={'#fff'}>
                                <Box fontSize={'25px'} fontWeight={500}>
                                    {'Trailo'}
                                </Box>
                                <Box lineHeight={1.5} mt={2} fontSize={'18px'} fontWeight={400} color={'#909090'}>
                                    {'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'}
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Box width={'100%'} bgcolor={'rgba(255, 255, 255, 0.1)'} p={5} color={'#fff'}>
                                <Box fontSize={'25px'} fontWeight={500}>
                                    {'Trailo'}
                                </Box>
                                <Box lineHeight={1.5} mt={2} fontSize={'18px'} fontWeight={400} color={'#909090'}>
                                    {'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'}
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Box width={'100%'} bgcolor={'rgba(255, 255, 255, 0.1)'} p={5} color={'#fff'}>
                                <Box fontSize={'25px'} fontWeight={500}>
                                    {'Trailo'}
                                </Box>
                                <Box lineHeight={1.5} mt={2} fontSize={'18px'} fontWeight={400} color={'#909090'}>
                                    {'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}