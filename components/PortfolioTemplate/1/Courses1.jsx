
import Box from "@mui/material/Box";
import {Button, Container, Grid} from "@mui/material";
import Title from "../Title";

export default function Courses1() {
    return (
        <>
            <Box width={'100%'} bgcolor={'#000'} py={10}  sx={{
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}>
                <Container maxWidth={'lg'}>
                    <Title value={'Courses'} text={1} />
                    <Box mt={10} />
                    <Grid container spacing={4}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Box width={'100%'} bgcolor={'rgba(255, 255, 255, 0.1)'} p={5} color={'#fff'}>
                                <Box fontSize={'25px'} fontWeight={500}>
                                    {'Web Development using React Js'}
                                </Box>
                                <Box letterSpacing={'2.3px'} mt={2} fontSize={'18px'} fontWeight={400} color={'#636363'}>
                                    {'Udemy'}
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Box width={'100%'} bgcolor={'rgba(255, 255, 255, 0.1)'} p={5} color={'#fff'}>
                                <Box fontSize={'25px'} fontWeight={500}>
                                    {'Web Development using React Js'}
                                </Box>
                                <Box letterSpacing={'2.3px'} mt={2} fontSize={'18px'} fontWeight={400} color={'#636363'}>
                                    {'Udemy'}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
