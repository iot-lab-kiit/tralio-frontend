import Box from "@mui/material/Box";
import {Container, createTheme, Grid, LinearProgress} from "@mui/material";
import PropTypes from 'prop-types';
import Title from "../Title";

const LinearProgressWithLabel = ({value}) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%' }}>
                <LinearProgress sx={{height: '15px', borderRadius: '10px', background: '#000',}} color={'secondary'} variant="determinate" value={value} />
            </Box>
        </Box>
    );
}
LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function Skills1({skills}) {

    const percentage = (level) => {
        if(level.toLowerCase() === "beginner") return "25"
        if(level.toLowerCase() === "intermediate") return "50"
        if(level.toLowerCase() === "advanced") return "75"
        if(level.toLowerCase() === "expert") return "99"
    }

    return (
        <>
            <Container maxWidth={'lg'}>
                <Box textAlign={'center'} width={'100%'}>
                    <Title value={'Skills'} text={0} />
                    <Box mt={10} />
                </Box>
                <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center">
                    {
                        skills.map((each) => (
                            <Grid item lg={6} md={6} sm={12} xs={12} key={each.name}>
                                <Box width={'100%'} py={3} px={6}>
                                    <Box mb={2} width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Box fontWeight={700} fontSize={'25px'}>
                                            {each.name}
                                        </Box>
                                        <Box color={'#ffb44b'} fontWeight={700} fontSize={'25px'}>
                                            {percentage(each.level) + '%'}
                                        </Box>
                                    </Box>
                                    <LinearProgressWithLabel value={percentage(each.level)} />
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
            <Box mb={10} />
        </>
    );
}
