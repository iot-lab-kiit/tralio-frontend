import React from 'react';
import Box from '@mui/material/Box';
import Link from "../../components/Layouts/Link";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import {Checkbox, Divider, FormControlLabel} from "@mui/material";
import Button from "@mui/material/Button";
import Google from "../../public/images/Logos/googleLogol.svg";
import Apple from "../../public/images/Logos/appleLogo.svg";
import Linkedin from "../../public/images/Logos/linkedInLogo.svg";
import Github from "../../public/images/Logos/githubLogo.svg";
import Hidden from "@mui/material/Hidden";


const Login = ({ setCurrentStage }) => {

    return (
        <>
            {/*<Box component={Link} noLinkStyle href="/" width={'120px'} height={'41px'} mb={2}>*/}
            {/*    <Image src={Logo} alt={'logo'} />*/}
            {/*</Box>*/}
            <Box fontSize={'15px'}>
                Welcome Back
            </Box>
            <Box fontSize={'20px'} fontWeight={600} mb={3}>
                Login to your account
            </Box>
            <Box width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} pl={{lg: 10, md: 8, sm: 6, xs: 2}}  pr={{lg: 10, md: 8, sm: 6, xs: 2}}>
                <TextField  fullWidth label="Username or Email" variant="outlined" />
                <Box mt={2} />
                <TextField  fullWidth label="Password" variant="outlined" />
                <Box mt={1} />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} flexDirection={{lg: 'row', md: 'row', sm: 'row', xs: 'column'}} width={'100%'} mb={1}>
                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                    <Hidden smDown>
                        <Link underline="hover" color="inherit" href={'/'} sx={{}}>
                            {'Forgot password?'}
                        </Link>
                    </Hidden>
                </Box>
                <Button variant={'contained'} sx={{width: '100%'}}>
                    Login
                </Button>
                <Hidden smUp>
                    <Box mt={1} />
                    <Link underline="hover" color="#458FF6" href={'/'}>
                        {'Forgot password?'}
                    </Link>
                </Hidden>
                <Box mt={2}/>
                <Divider orientation="horizontal" flexItem>
                    OR
                </Divider>
                <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} width={'100%'} mt={2} pl={4} pr={4}>
                    <Box component={Link} noLinkStyle href="/" width={'25px'} height={'25px'}>
                        <Image src={Google} alt={'logo'} />
                    </Box>
                    <Box component={Link} noLinkStyle href="/" width={'25px'} height={'25px'} mt={-1}>
                        <Image src={Apple} alt={'logo'} />
                    </Box>
                    <Box component={Link} noLinkStyle href="/" width={'25px'} height={'25px'}>
                        <Image src={Linkedin} alt={'logo'} />
                    </Box>
                    <Box component={Link} noLinkStyle href="/" width={'25px'} height={'25px'}>
                        <Image src={Github} alt={'logo'} />
                    </Box>
                </Box>
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mt={2}>
                <Box>
                    {'Don\'t have an account?'}
                </Box>
                <Box mr={1} />
                <Box color="#458FF6" sx={{cursor: 'pointer'}} onClick={() => {
                    setCurrentStage(1);
                }}>
                    {'Join Now'}
                </Box>
            </Box>
        </>
    );
};




export default Login;
