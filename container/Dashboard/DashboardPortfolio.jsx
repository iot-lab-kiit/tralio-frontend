import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BackgroundSearch from "../../components/Dashboard/BackgroundSearch";

export default function DashboardPortfolio() {
  return (
    <>
      <BackgroundSearch
        color={"#6a6a6a"}
        head={
          "If you're waiting until you feel talented enough to make it, you'll never make it."
        }
        src={"/backgrounds/dashboardBg1.jpg"}
      />
      <Container maxWidth={"lg"}>Dashboard portfolio</Container>
      <Box mt={100} />
    </>
  );
}
