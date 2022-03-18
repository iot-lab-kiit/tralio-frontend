import React, {useEffect, useRef, useState} from 'react';
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";

export default function BackgroundSearch({head, src}) {


    return (
        <>
            <Box
                width={'100%'}
                sx={{
                    background: `url(${src})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: {xl: '650px', lg: '570px', md: '550px', sm: '550px', xs: '550px'},
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Container maxWidth={'lg'}>
                    <Box p={1} color={'black'} width={'100%'}  display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
                        <Box maxWidth={{lg: '700px', md: '600px', sm: '600px', xs: '600px'}}>
                            <Box mb={4} fontSize={{lg: '37px', md: '37px', sm: '30px', xs: '25px'}} fontWeight={'600'}>
                                {head}
                            </Box>
                            <TextField
                                focused
                                fullWidth
                                label={'Search'}
                                variant="outlined"
                                sx={{
                                    background: 'transparent',
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <SearchIcon sx={{cursor: 'pointer', color: 'white'}} />
                                    ),
                                }}
                            />
                            <Box color={'#c7c7c7'} fontSize={{lg: '15px', md: '15px', sm: '13x', xs: '13px'}} mt={2}>
                                Suggested: business, mobile, office, programming, sports, gaming, marketing, more
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
