
import Box from "@mui/material/Box";
import {Button, Container, Grid} from "@mui/material";
import Title from "../Title";

export default function Education1() {
    return (
        <>
            <Box width={'100%'} bgcolor={'#000'} py={4} sx={{
                clipPath: 'polygon(0% 7%, 100% 0%, 100% 100%, 0% 100%)',
            }}>
                <Container maxWidth={'lg'}>
                    <Box width={'100%'} my={6}>
                        <Title value={'Education'} text={1} />
                        <Box mt={10} />
                        <Grid container spacing={4}>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Box width={'100%'} bgcolor={'rgba(255, 255, 255, 0.1)'} p={5} color={'#fff'}>
                                    <Box color={'#ffb44b'} fontWeight={700} fontSize={'25px'}>
                                        {'2014-15'}
                                    </Box>
                                    <Box mt={1} fontSize={'25px'} fontWeight={500}>
                                        {'Master Degree of Design'}
                                    </Box>
                                    <Box letterSpacing={'2.3px'} mt={2} fontSize={'18px'} fontWeight={400} color={'#636363'}>
                                        {'CAMBRIDGE UNIVERSITY'}
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Box width={'100%'} bgcolor={'rgba(255, 255, 255, 0.1)'} p={5} color={'#fff'}>
                                    <Box color={'#ffb44b'} fontWeight={700} fontSize={'25px'}>
                                        {'2014-15'}
                                    </Box>
                                    <Box mt={1} fontSize={'25px'} fontWeight={500}>
                                        {'Master Degree of Design'}
                                    </Box>
                                    <Box letterSpacing={'2.3px'} mt={2} fontSize={'18px'} fontWeight={400} color={'#636363'}>
                                        {'CAMBRIDGE UNIVERSITY'}
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Box width={'100%'} bgcolor={'rgba(255, 255, 255, 0.1)'} p={5} color={'#fff'}>
                                    <Box color={'#ffb44b'} fontWeight={700} fontSize={'25px'}>
                                        {'2014-15'}
                                    </Box>
                                    <Box mt={1} fontSize={'25px'} fontWeight={500}>
                                        {'Master Degree of Design'}
                                    </Box>
                                    <Box letterSpacing={'2.3px'} mt={2} fontSize={'18px'} fontWeight={400} color={'#636363'}>
                                        {'CAMBRIDGE UNIVERSITY'}
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Box width={'100%'} bgcolor={'rgba(255, 255, 255, 0.1)'} p={5} color={'#fff'}>
                                    <Box color={'#ffb44b'} fontWeight={700} fontSize={'25px'}>
                                        {'2014-15'}
                                    </Box>
                                    <Box mt={1} fontSize={'25px'} fontWeight={500}>
                                        {'Master Degree of Design'}
                                    </Box>
                                    <Box letterSpacing={'2.3px'} mt={2} fontSize={'18px'} fontWeight={400} color={'#636363'}>
                                        {'CAMBRIDGE UNIVERSITY'}
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Box mt={10} />
        </>
    );
}
