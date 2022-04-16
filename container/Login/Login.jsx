import Box from '@mui/material/Box';
import Link from "../../components/Layouts/Link";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Google from "../../public/images/Logos/googleLogol.svg";
import Apple from "../../public/images/Logos/appleLogo.svg";
import Linkedin from "../../public/images/Logos/linkedInLogo.svg";
import Github from "../../public/images/Logos/githubLogo.svg";
import Hidden from "@mui/material/Hidden";
import LoginIcons from '../../components/LoginIcons/LoginIcons';
import {useSnackbar} from "notistack";
import {useRouter} from "next/router";
import { loginUser } from '../../TralioAPI/tralio';

import { useState } from 'react';


export default function Login ({ setCurrentStage }) {

    const Router = useRouter();
    const { enqueueSnackbar } = useSnackbar();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async() => {
        const payload = {
            userEmail: email,
            userPassword: password
        }
        const response = await loginUser(payload);

        if (response.status >= 200 && response.status < 300) {
          const loginRes = await response.json();
          console.log("Login User data", loginRes);
          localStorage.setItem("access-token", loginRes.access_token);
          localStorage.setItem("username", loginRes.user.username);
          localStorage.setItem("firstname", loginRes.user.firstname);
          localStorage.setItem("lastname", loginRes.user.lastname);
          enqueueSnackbar("Login Successful", {
            variant: "success",
          });
          Router.reload();
          // Further actions you want to perform after successful registration
        } else {
          const resError = await response.json();
          enqueueSnackbar(
            resError.error ? resError.error.message : "Login Failed",
            {
              variant: "error",
            }
          );
        }
        
        
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    return (
        <>
            <Box fontSize={'15px'}>
                Welcome Back
            </Box>
            <Box fontSize={'20px'} fontWeight={600} mb={3}>
                Login to your account
            </Box>
            <Box width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} pl={{lg: 10, md: 8, sm: 6, xs: 2}}  pr={{lg: 10, md: 8, sm: 6, xs: 2}}>
                <TextField  fullWidth name="email" label="Username or Email" variant="outlined" value={email} onChange={handleChange}/>
                <Box mt={2} />
                <TextField  fullWidth name="password" label="Password" variant="outlined" value={password} onChange={handleChange}/>
                <Box mt={1} />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} flexDirection={{lg: 'row', md: 'row', sm: 'row', xs: 'column'}} width={'100%'} mb={1}>
                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                    <Hidden smDown>
                        <Box color="#458FF6" sx={{cursor: 'pointer'}} onClick={() => {
                            setCurrentStage(-1);
                        }}>
                            {'Forgot Password?'}
                        </Box>
                    </Hidden>
                </Box>
                <Button variant={'contained'} sx={{width: '100%'}} onClick={handleLogin}>
                    Login
                </Button>
                <Hidden smUp>
                    <Box mt={1} />
                    <Box color="#458FF6" sx={{cursor: 'pointer'}} onClick={() => {
                        setCurrentStage(-1);
                    }}>
                        {'Forgot Password?'}
                    </Box>
                </Hidden>
                <Box mt={2}/>
                <Divider orientation="horizontal" flexItem>
                    OR
                </Divider>
                <LoginIcons />
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
