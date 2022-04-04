import { useState } from "react";
import Box from "@mui/material/Box";
import { Container, Avatar, Typography, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function Profile(props) {
  const data = {
    id: 1,
    username: "Something",
    firstName: "Manisa",
    lastName: "Basak",
    email: "something@g.com",
    password: "popop",
    gender: "female",
  };
  const [userData, setUserData] = useState({});
  return (
    <>
      <Box mt={8} />
      <Container maxWidth={"lg"}>
        <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Avatar sx={{ height: 200, width: 200, fontSize: 100 }}>
              {data.firstName[0]}
            </Avatar>
            <Typography variant="h5" fontSize={30} py={2}>
              {data.firstName + " " + data.lastName}
            </Typography>
            <Button
              variant="contained"
              sx={{ px: 6, fontSize: 13 }}
              onClick={() => {
                window.location.href = "/settings";
              }}>
              Settings <EditIcon sx={{ ml: 1 }} fontSize="small" />
            </Button>
          </Box>
          <Box p={{ xs: 2, md: 8 }} width={"100%"}>
            <Box mt={4} />
            <Typography
              variant="h6"
              p={2}
              backgroundColor="#1981FF"
              color="white">
              PROFILE INFORMATION
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={{ xs: "space-between", md: "flex-start" }}
              p={2}
              borderBottom={1}>
              <Typography width={"15%"}>NAME</Typography>
              <Typography>{data.firstName + " " + data.lastName}</Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={{ xs: "space-between", md: "flex-start" }}
              p={2}
              borderBottom={1}>
              <Typography width={"15%"}>EMAIL</Typography>
              <Typography>{data.email}</Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={{ xs: "space-between", md: "flex-start" }}
              p={2}
              borderBottom={1}>
              <Typography width={"15%"}>GENDER</Typography>
              <Typography>{data.gender}</Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={{ xs: "space-between", md: "flex-start" }}
              p={2}
              borderBottom={1}>
              <Typography width={"15%"}>NAME</Typography>
              <Typography>{data.firstName + " " + data.lastName}</Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={{ xs: "space-between", md: "flex-start" }}
              p={2}
              borderBottom={1}>
              <Typography width={"15%"}>NAME</Typography>
              <Typography>{data.firstName + " " + data.lastName}</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
