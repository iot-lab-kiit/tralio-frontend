import {Box, Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import OtpInput from "react-otp-input";
import {useSnackbar} from "notistack";
import {useRouter} from "next/router";

export default function Otp ({setCurrentStage}) {

    const Router = useRouter();
    const { enqueueSnackbar } = useSnackbar();
    const [OTP, setOTP] = useState('');
    const [time, setTime] = useState(15);

    useEffect(() => {
        if (time > 0){
            setTimeout(function () {
                setTime(time - 1);
            }, 1000);
        }
    }, [time]);

    const handleOtp = () => {
        if(OTP === '000000'){
            localStorage.setItem("access-token", "test-access-token");
            enqueueSnackbar("User Successfully Registered", {
                variant: "success",
            });
            Router.reload();
        }
    }

    return <>
        <Box width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} p={1} pl={{lg: 10, md: 8, sm: 6, xs: 2}}  pr={{lg: 10, md: 8, sm: 6, xs: 2}}>
            <Box fontWeight={500}  fontSize={'20px'} mb={1}>
                Get OTP on your email
            </Box>
            <Box mb={3} textAlign={'center'}>
                Please enter the OTP that has been sent to your given Email ID
            </Box>
            <Box display="flex" justifyContent="center" alignItems={'center'}>
                <OtpInput
                    errorStyle="error"
                    focusStyle={{
                        border: '2px solid #458FF6',
                    }}
                    hasErrored={false}
                    inputStyle={{
                        color: 'black',
                        backgroundColor: '#F2F2F2',
                        width: 35,
                        height: 50,
                        borderRadius: '10px',
                        border: `1px solid #317CEB`,
                        outline: 'none',
                    }}
                    isDisabled={false}
                    isInputNum={true}
                    numInputs={6}
                    onChange={(otp) => {
                        setOTP(otp);
                    }}
                    separator={<Box width="10px" />}
                    // shouldAutoFocus
                    value={OTP}
                />
            </Box>
            <Box textAlign={'center'} mt={2.5} p={1} bgcolor={'#e5e5e5'} width={36} borderRadius={20}>
                {time !== 0 ? time : '0'}
            </Box>
            <Box display="flex" alignItems={'center'} justifyContent="center" mt={2}>
                <Typography variant={'body2'}>
                    Didn’t got the OTP?
                </Typography>
                <Box mr={1} />
                <Button disabled={time !== 0 } variant={'outlined'} size={'small'} onClick={()=>{
                    setOTP('');
                    setTime(15);
                    enqueueSnackbar('OTP sent successfully', {
                        variant: 'success',
                    });
                }}>
                    {'RESEND OTP'}
                </Button>
            </Box>
            <Box mt={3} />
            <Button variant={'contained'} sx={{width: '100%'}} onClick={handleOtp}>
                Verify OTP
            </Button>
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mt={3}
            >
                <Box>{"Have an account?"}</Box>
                <Box mr={1} />
                <Box
                    color="#458FF6"
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                        setCurrentStage(0);
                    }}
                >
                    {"Login"}
                </Box>
            </Box>
        </Box>
    </>
};