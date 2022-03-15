import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "../Layouts/Link"
import Logo from "/public/images/Logos/logo.svg"
import Image from "next/image";


const Footer = () => {

  const footerData = [
    {
      title: 'Company',
      content: [
        {
          head: 'About',
          href: '/'
        },
        {
          head: 'About',
          href: '/'
        },
        {
          head: 'About',
          href: '/'
        },
        {
          head: 'About',
          href: '/'
        },
      ]
    },
    {
      title: 'About',
      content: [
        {
          head: 'About',
          href: '/'
        },
        {
          head: 'About',
          href: '/'
        },
        {
          head: 'About',
          href: '/'
        },
        {
          head: 'About',
          href: '/'
        },
      ]
    },
    {
      title: 'Abcd',
      content: [
        {
          head: 'About',
          href: '/'
        },
        {
          head: 'About',
          href: '/'
        },
        {
          head: 'About',
          href: '/'
        },
        {
          head: 'About',
          href: '/'
        },
      ]
    },
  ]

  const generateFooter = (e) => {
    return(
        <>
          <Grid item sm={12} md={2} xs={12}>
            <Box display={'flex'} flexDirection={'column'} textAlign={{lg: 'left', md: 'left', sm: 'center', xs: 'center'}} mt={3}>
              <Box key={"footer " + e.title} fontSize={'20px'} fontWeight={'700'}>
                {e.title}
              </Box>
              <Box display={'flex'} flexDirection={'column'} mt={2} fontWeight={300}>
                {e.content.map(data => (
                    <Link key={data.head} underline="hover" color="inherit" href={data.href} sx={{marginBottom: 2}}>
                      {data.head}
                    </Link>
                ))}
              </Box>
            </Box>
          </Grid>
        </>
    )
  }

  return (
      <>
        <Box sx={{background: 'linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%)',}} color={'#FFF'} p={{lg: 6, md: 5, sm: 4, xs: 1}} width={'100%'}>
          <Container maxWidth={'lg'}>
            <Grid container spacing={0}>
              <Grid item sm={12} md={6} xs={12}>
                <Box mt={{lg: 5, md: 3, sm: 2, xs: 2}} textAlign={{lg: 'left', md: 'left', sm: 'center', xs: 'center'}}>
                  <Box component={Link} noLinkStyle href="/" width={'120px'} height={'41px'}>
                    <Image src={Logo} alt={'logo'} />
                  </Box>
                  <Box pr={{lg: 6, md: 5, sm: 0, xs: 0}} mt={1}>
                    Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online
                    for everyone
                  </Box>
                  <Box mt={3}>
                    ©Trafalgar PTY LTD 2020. All rights reserved
                  </Box>
                </Box>
              </Grid>
              {footerData.map(generateFooter)}
            </Grid>
          </Container>
        </Box >
      </>
  );
};




export default Footer;
