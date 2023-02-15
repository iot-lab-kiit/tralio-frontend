import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import LoginIcons from '../../components/LoginIcons/LoginIcons';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import { loginUser } from '../../TralioAPI/tralio';
import restApp, {portfolioService} from '../../apis/rest.app';
import { useState } from 'react';
import { useRemoteUser } from '../../store/UserContext';
import {useRemotePortfolio} from "../../store/PortfolioContext";

export default function Login({ setCurrentStage }) {
    const Router = useRouter();
    const { enqueueSnackbar } = useSnackbar();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remoteUser, setRemoteUser] = useRemoteUser();
    const [remotePortfolio, setRemotePortfolio] = useRemotePortfolio();

    const createPortfolio = async () => {
        await portfolioService.create({})
            .then((res) => {
                setRemotePortfolio(res)
            })
            // .catch((err) => {
            //     enqueueSnackbar(err.message, {variant: 'error'});
            // });
    }

    const portfolioExists = async () => {
        await portfolioService.find()
            .then((res) => {
                if(res){
                    return res;
                }
                else return false
            })
            // .catch((err) => {
            //     enqueueSnackbar(err.message, { variant: 'error' });
            // });
    }

    const login = async (payload) => {
        await restApp
            .authenticate(payload)
            .then(async (res) => {
                setRemoteUser(res.user);
                console.log("hiii")
                await Router.push('/');
                console.log("done")
                enqueueSnackbar('Login successful', {variant: 'success'});
                const portfolio = await portfolioExists()
                // setRemotePortfolio(portfolio)
                portfolio ? setRemotePortfolio(portfolio) : await createPortfolio();
            })
            .catch((err) => {
                enqueueSnackbar(err.message, { variant: 'error' });
            });
    };

    const handleLogin = async () => {
        const payload = {
            email: email,
            password: password,
            strategy: 'local',
        };
        await login(payload);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    return (
        <>
            <Box fontSize={'15px'}>Welcome Back</Box>
            <Box fontSize={'20px'} fontWeight={600} mb={3}>
                Login to your account
            </Box>
            <Box
                width={'100%'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                pl={{ lg: 10, md: 8, sm: 6, xs: 2 }}
                pr={{ lg: 10, md: 8, sm: 6, xs: 2 }}
            >
                <TextField
                    fullWidth
                    name='email'
                    label='Username or Email'
                    variant='outlined'
                    value={email}
                    onChange={handleChange}
                />
                <Box mt={2} />
                <TextField
                    fullWidth
                    name='password'
                    label='Password'
                    variant='outlined'
                    value={password}
                    onChange={handleChange}
                />
                <Box mt={1} />
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    flexDirection={{
                        lg: 'row',
                        md: 'row',
                        sm: 'row',
                        xs: 'column',
                    }}
                    width={'100%'}
                    mb={1}
                >
                    <FormControlLabel
                        control={<Checkbox />}
                        label='Remember me'
                    />
                    <Hidden smDown>
                        <Box
                            color='#458FF6'
                            sx={{ cursor: 'pointer' }}
                            onClick={() => {
                                setCurrentStage(-1);
                            }}
                        >
                            {'Forgot Password?'}
                        </Box>
                    </Hidden>
                </Box>
                <Button
                    variant={'contained'}
                    sx={{ width: '100%' }}
                    onClick={handleLogin}
                >
                    Login
                </Button>
                <Hidden smUp>
                    <Box mt={1} />
                    <Box
                        color='#458FF6'
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                            setCurrentStage(-1);
                        }}
                    >
                        {'Forgot Password?'}
                    </Box>
                </Hidden>
                <Box mt={2} />
                <Divider orientation='horizontal' flexItem>
                    OR
                </Divider>
                <LoginIcons />
            </Box>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                mt={2}
            >
                <Box>{"Don't have an account?"}</Box>
                <Box mr={1} />
                <Box
                    color='#458FF6'
                    sx={{ cursor: 'pointer' }}
                    onClick={() => {
                        setCurrentStage(1);
                    }}
                >
                    {'Join Now'}
                </Box>
            </Box>
        </>
    );
}
