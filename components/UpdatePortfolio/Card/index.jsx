import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Dialog, IconButton } from "@mui/material";
import UpdateProfile from "../UpdateProfile";
import UpdateEducation from "../UpdateEducation";
import UpdateSkill from "../UpdateSkill";
import UpdateProject from "../UpdateProject";
import UpdateExperience from "../UpdateExperience";
import Course from "../Course";
import UpdateCourse from "../UpdateCourse";
import UpdateOrganisation from "../UpdateOrganisation";
import UpdateInterest from "../UpdateInterest";
import UpdateAward from "../UpdateAward";


const useStyles = makeStyles(() =>
    createStyles({
        backDrop: {
            backdropFilter: "blur(3px)",
            backgroundColor: "rgba(0, 0, 0, 0.81)",
        },
    })
);

const Index = ({index, children, icon, selectedButton }) => {
    const classes = useStyles();

    const [pop, setPop] = useState(false);
    const [clickedIndex, setClickedIndex] = useState(null)
    const handleClick = (event) => {
        setPop(true);
        setClickedIndex(index)
    };
    const handleClose = () => {
        setPop(false);
        // console.log(clickedIndex, selectedButton)
    };


    const renderEditPopper = () => {
        if(selectedButton === "Profile")
            return <UpdateProfile index={index} selectedButton={selectedButton} />
        if(selectedButton === "Educations")
            return <UpdateEducation index={index} selectedButton={selectedButton} />
        if(selectedButton === "Skills")
            return <UpdateSkill index={index} selectedButton={selectedButton} />
        if(selectedButton === "Projects")
            return <UpdateProject index={index} selectedButton={selectedButton} />
        if(selectedButton === "Experiences")
            return <UpdateExperience index={index} selectedButton={selectedButton} />
        if(selectedButton === "Courses")
            return <UpdateCourse index={index} selectedButton={selectedButton} />
        if(selectedButton === "Organisations")
            return <UpdateOrganisation index={index} selectedButton={selectedButton} />
        if(selectedButton === "Interests")
            return <UpdateInterest index={index} selectedButton={selectedButton} />
        if(selectedButton === "Awards")
            return <UpdateAward index={index} selectedButton={selectedButton} />
    }

    return (
        <>
            <Box
                width={"100%"}
                border={"1px solid #EAEAEA"}
                borderRadius={"15px"}
                overflow={"hidden"}
            >
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    bgcolor={"#DFF0FF"}
                    px={2}
                    py={2}
                >
                    {/*<Box fontSize={"16px"}>*/}
                    {/*    {icon}*/}
                    {/*</Box>*/}
                    <span />
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        fontSize={"16px"}
                        sx={{ cursor: "pointer" }}
                        onClick={handleClick}
                    >
                        <EditIcon sx={{ color: "#319EFF" }} />
                        <Box ml={1} mt={0.5}>
                            Edit
                        </Box>
                    </Box>
                </Box>
                <Box
                    width={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    px={5}
                    py={3}
                >
                    {children}
                </Box>
            </Box>
            <Dialog
                open={pop}
                onClose={handleClose}
                BackdropProps={{
                    classes: {
                        root: classes.backDrop,
                    },
                }}
            >
                <Box
                    width={"100%"}
                    height={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Box
                        py={3}
                        px={3}
                        zIndex={1}
                        width={"500px"}
                        bgcolor={"#FFF"}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Box
                            mb={4}
                            width={"100%"}
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                        >
                            <Box fontSize={"22px"} fontWeight={600}>
                                Edit {selectedButton.toLowerCase()}
                            </Box>
                            <IconButton onClick={handleClose}>
                                <CloseIcon sx={{ color: "#000" }} />
                            </IconButton>
                        </Box>
                        {
                            renderEditPopper()
                        }
                        {/*<Box />*/}
                    </Box>
                </Box>
            </Dialog>
        </>
    );
};
export default Index;
