import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import Title from "../Title";

export default function AboutMe1() {
    return (
        <>
            <Container maxWidth={'lg'}>
                <Box textAlign={'center'} width={'100%'}>
                    <Title value={'About Me'} text={0} />
                    <Box mt={8} px={{lg: 8, md: 8, sm: 6, xs: 2}} fontSize={'20px'} fontWeight={500}>
                        {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis, dicta doloribus facere magni necessitatibus nihil odio optio porro quaerat?'}
                    </Box>
                </Box>
            </Container>
            <Box mb={10} />
        </>
    );
}
