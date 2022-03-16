import React from 'react';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import LoginIcons from '../../components/LoginIcons/LoginIcons';
import registerForm from "../../TralioAPI/registerForm";

export default function SignUp({ setCurrentStage }) {

    const generateSignUpForm = (input) => {
        return (
          <>
            <TextField
              key={input.name}
              fullWidth
              label={input.placeholder}
              variant="outlined"
              type={input.type}
              required={input.validation.required}
            />
            <Box mt={1} />
          </>
        );
    }

    return (
        <>
            <Box fontSize={'15px'} fontWeight={300}>
                Yay ! Happy to have you onboard
            </Box>
            <Box fontSize={'20px'} fontWeight={600} mb={3}>
                Sign Up with Us
            </Box>
            <Box width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} pl={{lg: 10, md: 8, sm: 6, xs: 2}}  pr={{lg: 10, md: 8, sm: 6, xs: 2}}>

                {registerForm.map(generateSignUpForm)}

                <Box mt={1} />
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
