import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "../Layouts/Link";
import Logo from "/public/images/Logos/logo.svg";
import Image from "next/image";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import footerData from "./footerData";
import Hidden from "@mui/material/Hidden";


const Footer = () => {
    const mobileFooter = (e) => {
        return (
            <Grid key={"footer " + e.title} item sm={12} md={2} xs={12}>
                <Accordion sx={{background: 'transparent', boxShadow: '0', color: '#fff'}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{fontSize: "20px", fontWeight: "500"}}>{e.title}</Typography>
                    </AccordionSummary>
                    {e.content.map((data) => (
                        <AccordionDetails key={data.head} sx={{pl: 5}}>
                            <Typography>{data.head}</Typography>
                        </AccordionDetails>
                    ))}

                </Accordion>
            </Grid>
        )
    }
    const generateFooter = (e) => {
    return (
      <>
        <Grid key={"footer " + e.title} item sm={12} md={2} xs={12}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            textAlign={{ lg: "left", md: "left", sm: "center", xs: "center" }}
            mt={3}
          >
            <Box fontSize={"20px"} fontWeight={"700"}>
              {e.title}
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              mt={2}
              fontWeight={300}
            >
              {e.content.map((data) => (
                <Link
                  key={data.head}
                  underline="hover"
                  color="inherit"
                  href={data.href}
                  sx={{ marginBottom: 2 }}
                >
                  {data.head}
                </Link>
              ))}
            </Box>
          </Box>
        </Grid>
      </>
    );
  };

  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%)",
        }}
        color={"#FFF"}
        p={{ lg: 6, md: 5, sm: 4, xs: 1 }}
        width={"100%"}
      >
        <Container maxWidth={"lg"}>
          <Grid container spacing={0}>
            <Grid item sm={12} md={6} xs={12}>
              <Box
                mt={{ lg: 5, md: 3, sm: 2, xs: 2 }}
                textAlign={{
                  lg: "left",
                  md: "left",
                  sm: "center",
                  xs: "center",
                }}
              >
                <Box
                  component={Link}
                  noLinkStyle
                  href="/"
                  width={"120px"}
                  height={"41px"}
                >
                  <Image src={Logo} alt={"logo"} />
                </Box>
                <Box pr={{ lg: 6, md: 5, sm: 0, xs: 0 }} mt={1}>
                  Trafalgar provides progressive, and affordable healthcare,
                  accessible on mobile and online for everyone
                </Box>
                  <Hidden mdDown>
                      <Box mt={3}>©Trafalgar PTY LTD 2020. All rights reserved</Box>
                  </Hidden>
                  <Hidden mdUp>
                      <Box mt={5} />
                  </Hidden>
              </Box>
            </Grid>
              <Hidden mdDown>
                  {footerData.map(generateFooter)}
              </Hidden>
              <Hidden mdUp>
                  {footerData.map(mobileFooter)}
              </Hidden>
          </Grid>
            <Hidden mdUp>
                <Box mt={3} textAlign={'center'}>©Trafalgar PTY LTD 2020. All rights reserved</Box>
            </Hidden>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
