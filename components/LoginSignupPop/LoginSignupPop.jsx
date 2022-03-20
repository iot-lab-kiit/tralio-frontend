import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import Login from "../../container/Login/Login";
import SignUp from "../../container/SignUp/SignUp";
import ForgotPassword from "../../container/ForgotPassword/ForgotPassword";

const Pop = ({initial}) => {

    const [currentStage , setCurrentStage] = useState(initial);

    return(
        <>
            <Box width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Box zIndex={1} width={'500px'} bgcolor={'white'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} pt={6} pb={6}>
                    {
                        currentStage === 0 &&
                        <Login setCurrentStage={setCurrentStage} />
                    }
                    {
                        currentStage === 1 &&
                        <SignUp setCurrentStage={setCurrentStage} />
                    }
                    {
                        currentStage === -1 &&
                        <ForgotPassword setCurrentStage={setCurrentStage} />
                    }
                </Box>
            </Box>
        </>
    )
}

export default Pop;