import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BackgroundSearch from "../../components/Dashboard/BackgroundSearch";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import TimelineIcon from '@mui/icons-material/Timeline';
import {useState} from "react";
import CustomButton from "../../components/Dashboard/CustomButton";
import Hidden from "@mui/material/Hidden";
import DashboardMenu from "../../components/Dashboard/DashboardMenu";

export default function DashboardDefault({setDashboardPage}) {

    const [currentStage , setCurrentStage] = useState(0);

    return (
      <>
        <BackgroundSearch
          color={"#fff"}
          head={"The best way to foresee the future is to make it happen."}
          src={"/backgrounds/dashboardBg3.jpg"}
        />
        <Container maxWidth={"lg"}>
          {/*flexDirection={{lg: 'row', md: 'row', sm: 'row', xs: 'column'}}*/}
          <Box
            mt={7}
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}>
            <CustomButton
              id={"Update Data"}
              image={<EditIcon />}
              onClick={() => {
                setDashboardPage(4);
              }}
            />
            <CustomButton
              id={"Add Post"}
              image={<AddIcon />}
              onClick={() => {
                window.location.href = "/add-post";
              }}
            />
            <Hidden mdDown>
              <CustomButton id={"Check Task"} image={<TimelineIcon />} />
            </Hidden>
          </Box>
          {/*<Hidden mdUp>*/}
          {/*    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>*/}
          {/*        <CustomButton id={'Check Task'} image={<TimelineIcon />} />*/}
          {/*    </Box>*/}
          {/*</Hidden>*/}
          <Box p={1}>
            <DashboardMenu setCurrentStage={setCurrentStage} />
          </Box>
          <Box p={1} bgcolor={"red"} width={"100%"}>
            {currentStage === 1 && (
              <>
                <Box textAlign={"center"}>My Posts</Box>
              </>
            )}
            {currentStage === 2 && (
              <>
                <Box textAlign={"center"}>My Portfolio</Box>
              </>
            )}
            {currentStage === 3 && (
              <>
                <Box textAlign={"center"}>Activity</Box>
              </>
            )}
            <Box mt={100} />
          </Box>
        </Container>
      </>
    );
}