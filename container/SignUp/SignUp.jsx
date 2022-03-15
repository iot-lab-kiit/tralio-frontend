import React from 'react';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Link from "../../components/Layouts/Link";
import Button from "@mui/material/Button";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import Google from "../../public/images/Logos/googleLogol.svg";
import Apple from "../../public/images/Logos/appleLogo.svg";
import Linkedin from "../../public/images/Logos/linkedInLogo.svg";
import Github from "../../public/images/Logos/githubLogo.svg";
import LoginIcons from '../../components/LoginIcons/LoginIcons';

export default function SignUp({ setCurrentStage }) {

    return (
        <>
            <Box fontSize={'15px'} fontWeight={300}>
                Yay ! Happy to have you onboard
            </Box>
            <Box fontSize={'20px'} fontWeight={600} mb={3}>
                Sign Up with Us
            </Box>
            <Box width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} pl={{lg: 10, md: 8, sm: 6, xs: 2}}  pr={{lg: 10, md: 8, sm: 6, xs: 2}}>
                <TextField  fullWidth label="Username" variant="outlined" />
                <Box mt={1} />
                <TextField  fullWidth label="Full Name" variant="outlined" />
                <Box mt={1} />
                <TextField  fullWidth label="Email" variant="outlined" />
                <Box mt={1} />
                <TextField  fullWidth label="Phone Number" variant="outlined" />
                <Box mt={1} />
                <TextField  fullWidth label="Password" variant="outlined" />
                <Box mt={1} />
                <TextField  fullWidth label="Confirm Password" variant="outlined" />
                <Box mt={2} />
                <Button variant={'contained'} sx={{width: '100%'}}>
                    Sign Up
                </Button>
                <Box mt={2}/>
                <Divider orientation="horizontal" flexItem>
                    OR
                </Divider>
                <LoginIcons />
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mt={2}>
                <Box>
                    {'Have an account?'}
                </Box>
                <Box mr={1} />
                <Box color="#458FF6" sx={{cursor: 'pointer'}} onClick={() => {
                    setCurrentStage(0);
                }}>
                    {'Login'}
                </Box>
            </Box>
        </>
    );
};
