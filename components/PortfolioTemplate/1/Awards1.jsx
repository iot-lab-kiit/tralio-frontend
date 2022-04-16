
import Box from "@mui/material/Box";
import {Button, Container, Grid} from "@mui/material";
import Title from "../Title";

export default function Awards1({awards}) {
    return (
        <>
            <Box width={'100%'} bgcolor={'#000'} py={10}  sx={{
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}>
                <Container maxWidth={'lg'}>
                    <Title value={'Awards'} text={1} />
                    <Box mt={10} />
                    <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center">
                        {
                            awards.map((each) => (
                                <Grid item lg={6} md={6} sm={12} xs={12} key={each.name}>
                                    <Box width={'100%'} bgcolor={'rgba(255, 255, 255, 0.1)'} p={5} color={'#ffb44b'} height={{lg: '140px', md: '140px', sm: '150px', xs: '160px'}} sx={{overflowX: 'scroll'}}>
                                        <Box color={'#ffb44b'} fontWeight={700} fontSize={'25px'}>
                                            {each.name}
                                        </Box>
                                        <Box letterSpacing={'2.3px'} mt={1} fontSize={'18px'} fontWeight={400} color={'#636363'}>
                                            {each.issuer}
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
