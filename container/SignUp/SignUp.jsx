import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import LoginIcons from '../../components/LoginIcons/LoginIcons';
import registerForm from "../../TralioAPI/registerForm";
import {registerUser, test} from "../../TralioAPI/tralio";
import {useSnackbar} from "notistack";
import {FormControl, InputLabel, MenuItem, OutlinedInput, Select} from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

export default function SignUp({ setCurrentStage }) {

    const [user, setUser] = useState({});
    const { enqueueSnackbar } = useSnackbar();

    const validate = ({user, reregisterForm}) => {
        //here we need to verify the input fields
        return true;
    }

    const handleUserInfo = (e) => {
        const { id, value } = e.target;
        setUser({
            ...user,
            [id]: value,
        });
    };

    const handleRegistration = async () => {

        setUser({
            ...user,
            userGender: gender,
            userDOB: userDOB,
        });
        console.log(user);
        const response = await registerUser(user);

        if(validate(user)) {
            // Checking if the response is an error
            if (response.status >= 200 && response.status < 300) {
                const newUser = await response.json();
                console.log("USER ", newUser);
                enqueueSnackbar('User Successfully Registered', {
                    variant: 'success',
                });
                // Further actions you want to perform after successful registration
            } else {
                const resError = await response.json();
                enqueueSnackbar(resError.error ? resError.error.message : 'Something went wrong', {
                    variant: 'error',
                });
            }
        }
    };

    const generateSignUpForm = (input) => {
        return (
            <>
                <TextField
                    fullWidth
                    id={input.name}
                    label={input.placeholder}
                    variant="outlined"
                    type={input.type}
                    onChange={handleUserInfo}
                />
                <Box mt={2} />
            </>
        )
    }

    const [gender, setGender] = useState('');
    const handleGenderChange = (event) => {
        const {
            target: { value },
        } = event;
        setGender(value);
    };

    const [userDOB, setUserDOB] = useState(new Date());
    const handleDate = (newValue) => {
        setUserDOB(newValue);
    };

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
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                        <FormControl sx={{width: {lg: '200px', md: '200px', sm: '190px', xs: '180px'}}}>
                            <InputLabel>Gender</InputLabel>
                            <Select
                                input={<OutlinedInput label="Gender" />}
                                value={gender}
                                onChange={handleGenderChange}
                            >
                                <MenuItem key="male" value="male">Male</MenuItem>
                                <MenuItem key="female" value="female">Female</MenuItem>
                                <MenuItem key="other" value="other">Other</MenuItem>
                            </Select>
                        </FormControl>
                        <Box mr={2} />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Date of Birth"
                                inputFormat="dd/MM/yyyy"
                                value={userDOB}
                                onChange={handleDate}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>

                    <Box mt={3} />
                    <Button onClick={handleRegistration} variant={'contained'} sx={{width: '100%'}}>
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
