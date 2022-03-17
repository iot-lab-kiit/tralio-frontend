import React from 'react';
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Hidden from "@mui/material/Hidden";
import Button from "@mui/material/Button";

export default function BackgroundSearch() {
    return (
        <>
            <Box p={1} color={'black'} width={'100%'}  display={'flex'} justifyContent={'space-around'} flexDirection={'column'} alignItems={'center'}>
                <Box mt={7} mb={4} fontSize={{lg: '37px', md: '37px', sm: '30px', xs: '25px'}} maxWidth={'600px'} fontWeight={'600'}>
                    The best free stock photos, royalty free images & videos shared by creators.
                </Box>
                <TextField
                    fullWidth
                    label={'Search'}
                    variant="outlined"
                    sx={{
                        background: 'white',
                        maxWidth: '600px',
                    }}
                    InputProps={{
                        endAdornment: (
                            <SearchIcon sx={{cursor: 'pointer'}} />
                        ),
                    }}
                />
                <Box color={'#5e5e5e'} fontSize={{lg: '15px', md: '15px', sm: '13x', xs: '13px'}} maxWidth={'600px'} mt={1}>
                    Suggested: business, mobile, office, programming, sports, gaming, marketing, more
                </Box>
            </Box>
            <Box p={1} mt={10} display={'flex'} justifyContent={'space-between'}>
                <Hidden smDown>
                    <Box/>
                </Hidden>
                <Button variant={'contained'} sx={{alignSelf: 'flex-end'}}>
                    Update Portfolio
                </Button>
            </Box>
        </>
    );
}
