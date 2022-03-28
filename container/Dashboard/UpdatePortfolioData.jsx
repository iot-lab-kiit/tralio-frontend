import { useState } from "react";
import { userPortfolio } from "../../TralioAPI/tralio";

import {
  Box,
  Container,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Dialog,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { createStyles, makeStyles } from "@mui/styles";
import Hidden from "@mui/material/Hidden";

const useStyles = makeStyles(() =>
  createStyles({
    backDrop: {
      backdropFilter: "blur(3px)",
      backgroundColor: "rgba(0,0,30,0.4)",
    },
  })
);

export default function UpdatePortfolioData() {
  const classes = useStyles();
  const [portfolioData, setPortfolioData] = useState({});
  const [inputList, setInputList] = useState([{}]);
  const [pop, setPop] = useState(false);
  const [educationIndexes, setEducationIndexes] = useState([]);
  const [educationCounter, setEducationCounter] = useState(0);

  const [projectsIndexes, setProjectsIndexes] = useState([]);
  const [projectsCounter, setProjectsCounter] = useState(0);

  const [experienceIndexes, setExperienceIndexes] = useState([]);
  const [experienceCounter, setExperienceCounter] = useState(0);

  const [skillsIndexes, setSkillsIndexes] = useState([]);
  const [skillsCounter, setSkillsCounter] = useState(0);

  const [coursesIndexes, setCoursesIndexes] = useState([]);
  const [coursesCounter, setCoursesCounter] = useState(0);

  const [organisationIndexes, setOrganisationIndexes] = useState([]);
  const [organisationCounter, setOrganisationCounter] = useState(0);

  const [interestIndexes, setInterestIndexes] = useState([]);
  const [interestCounter, setInterestCounter] = useState(0);

  const [awardIndexes, setAwardIndexes] = useState([]);
  const [awardCounter, setAwardCounter] = useState(0);
  const portfolioButtons = [
    "Profile",
    "Education",
    "Skills",
    "Projects",
    "Experience",
    "Courses",
    "Organisation",
    "Interest",
    "Award",
  ];
  const [btn, setbtn] = useState("Profile");
  const portfolioFields = {
    Profile: [
      {
        type: "text",
        name: "First Name",
        placeholder: "First Name",
        validation: {
          required: true,
          minLength: 3,
          maxLength: 20,
        },
      },
      {
        type: "text",
        name: "Last Name",
        placeholder: "Last Name",
        validation: {
          required: true,
          minLength: 3,
          maxLength: 20,
        },
      },
      {
        type: "text",
        name: "Bio",
        placeholder: "Bio",
        validation: {
          required: true,
          minLength: 3,
          maxLength: 20,
        },
      },
    ],
    Education: [
      {
        type: "text",
        name: "Degree",
        placeholder: "Degree",
      },
      {
        type: "text",
        name: "School/ College/ University",
        placeholder: "School/ College/ University",
      },
      {
        type: "text",
        name: "City",
        placeholder: "City",
      },
      {
        type: "text",
        name: "Country",
        placeholder: "Country",
      },
    ],
    Skills: [
      {
        type: "text",
        name: "Skill",
        placeholder: "Skill",
      },
      {
        type: "text",
        name: "Information/ Sub-skill",
        placeholder: "Information/ Sub-skill",
      },
    ],
    Projects: [
      {
        type: "text",
        name: "Project Title",
        placeholder: "Project Title",
      },
      {
        type: "text",
        name: "Short Description",
        placeholder: "Short Description",
      },
    ],
    Experience: [
      {
        type: "text",
        name: "Job Title",
        placeholder: "Job Title",
      },
      {
        type: "text",
        name: "Short Description",
        placeholder: "Short Description",
      },
      {
        type: "text",
        name: "City",
        placeholder: "City",
      },
      {
        type: "text",
        name: "Country",
        placeholder: "Country",
      },
    ],
    Courses: [
      {
        type: "text",
        name: "Course Title",
        placeholder: "Course Title",
      },
      {
        type: "text",
        name: "Institution",
        placeholder: "Institution",
      },
      {
        type: "text",
        name: "City",
        placeholder: "City",
      },
      {
        type: "text",
        name: "Country",
        placeholder: "Country",
      },
    ],
    Organisation: [
      {
        type: "text",
        name: "Organisation",
        placeholder: "Organisation",
      },
      {
        type: "text",
        name: "Position",
        placeholder: "Position",
      },
      {
        type: "text",
        name: "City",
        placeholder: "City",
      },
      {
        type: "text",
        name: "Country",
        placeholder: "Country",
      },
    ],
    Interest: [
      {
        type: "text",
        name: "Interest",
        placeholder: "Interest",
      },
      {
        type: "text",
        name: "Additional Information",
        placeholder: "Additional Information",
      },
    ],
    Award: [
      {
        type: "text",
        name: "Award",
        placeholder: "Award",
      },
      {
        type: "text",
        name: "Issuer",
        placeholder: "Issuer",
      },
    ],
  };
  function handleChange(btnName) {
    setbtn(btnName);
    setPop(false);
  }
  const handleUserInfo = (e) => {
    const { name, value } = e.target;
    setPortfolioData({
      ...portfolioData,
      [name]: value,
    });
  };

  const handleChangeStartDate = (newDate) => {
    setPortfolioData({
      ...portfolioData,
      startDate: newDate,
    });
    console.log(portfolioData);
  };
  const handleChangeEndDate = (newDate) => {
    setPortfolioData({
      ...portfolioData,
      endDate: newDate,
    });
    console.log(portfolioData);
  };

  const handleChangeIssueDate = (newDate) => {
    setPortfolioData({
      ...portfolioData,
      issueDate: newDate,
    });
    console.log(portfolioData);
  };
  const generateStartEndDate = () => {
    return (
      <Box
        display={"flex"}
        flexDirection={{ md: "row", xs: "column" }}
        width={"100%"}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            fullWidth
            views={["year", "month"]}
            label="Start Date"
            value={portfolioData.startDate}
            minDate={new Date("2012-03-01")}
            maxDate={new Date("2023-06-01")}
            onChange={handleChangeStartDate}
            renderInput={(params) => (
              <TextField
                fullWidth
                sx={{ pr: { md: 1, xs: 0 }, py: { md: 0, xs: 1 } }}
                {...params}
                helperText={null}
              />
            )}
          />
          <DatePicker
            views={["year", "month"]}
            label="End Date"
            value={portfolioData.endDate}
            minDate={new Date("2012-03-01")}
            maxDate={new Date("2023-06-01")}
            onChange={handleChangeEndDate}
            renderInput={(params) => (
              <TextField
                fullWidth
                sx={{ pl: { md: 1, xs: 0 }, py: { md: 0, xs: 2 } }}
                {...params}
                helperText={null}
              />
            )}
          />
        </LocalizationProvider>
      </Box>
    );
  };
  const generateDate = () => {
    return (
      <Box
        display={"flex"}
        flexDirection={{ md: "row", xs: "column" }}
        width={"100%"}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            fullWidth
            views={["year", "month"]}
            label="Date"
            value={portfolioData.issueDate}
            minDate={new Date("2012-03-01")}
            maxDate={new Date("2023-06-01")}
            onChange={handleChangeIssueDate}
            renderInput={(params) => (
              <TextField
                fullWidth
                sx={{ pr: { md: 1, xs: 0 }, py: { md: 0, xs: 1 } }}
                {...params}
                helperText={null}
              />
            )}
          />
        </LocalizationProvider>
      </Box>
    );
  };
  const generateFields = (input) => {
    return (
      <Box key={{ btn } + input.name} width={"100%"}>
        <TextField
          fullWidth
          name={input.name}
          label={input.name}
          id="outlined-textarea"
          type={input.type}
          multiline
          onChange={handleUserInfo}
        />
        <Box mt={2} />
      </Box>
    );
  };
  const skillSelectGenerateFields = () => {
    return (
      <Box width={"100%"}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Select Skill Level
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select Skills Level"
            onChange={handleUserInfo}>
            <MenuItem value={"Novice"}>Novice</MenuItem>
            <MenuItem value={"Beginner"}>Beginner</MenuItem>
            <MenuItem value={"Skillful"}>Skillful</MenuItem>
            <MenuItem value={"Experienced"}>Experienced</MenuItem>
            <MenuItem value={"Expert"}>Expert</MenuItem>
          </Select>
        </FormControl>
        <Box mt={2} />
      </Box>
    );
  };
  const generatePortfolioButtons = (buttonName) => {
    return (
      <Box
        key={"button" + { buttonName }}
        sx={{ py: 1, mx: 1, textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            width: 150,
            p: 1,
          }}
          onClick={() => handleChange(buttonName)}>
          {buttonName}
        </Button>
      </Box>
    );
  };

  const handleSave = async () => {
    console.log(portfolioData);
    const response = await userPortfolio(portfolioData);
    if (response.status >= 200 && response.status < 300) {
      const newData = await response.json();
      console.log(newData);
    } else {
      const resError = await response.json();
      enqueueSnackbar(
        resError.error ? resError.error.message : "Something went wrong",
        {
          variant: "error",
        }
      );
    }
  };

  const handleAddClick = () => {
    setInputList([...inputList, portfolioData]);
    setPortfolioData("");
    if (btn == "Education") {
      setEducationCounter((prevEducationCounter) => prevEducationCounter + 1);
      setEducationIndexes((prevEducationIndexes) => [
        ...prevEducationIndexes,
        educationCounter,
      ]);
    } else if (btn == "Projects") {
      setProjectsCounter((prevProjectsCounter) => prevProjectsCounter + 1);
      setProjectsIndexes((prevProjectsIndexes) => [
        ...prevProjectsIndexes,
        projectsCounter,
      ]);
    } else if (btn == "Experience") {
      setExperienceCounter(
        (prevExperienceCounter) => prevExperienceCounter + 1
      );
      setExperienceIndexes((prevExperienceIndexes) => [
        ...prevExperienceIndexes,
        experienceCounter,
      ]);
    } else if (btn == "Skills") {
      setSkillsCounter((prevSkillsCounter) => prevSkillsCounter + 1);
      setSkillsIndexes((prevSkillsIndexes) => [
        ...prevSkillsIndexes,
        skillsCounter,
      ]);
    } else if (btn == "Courses") {
      setCoursesCounter((prevCoursesCounter) => prevCoursesCounter + 1);
      setCoursesIndexes((prevCoursesIndexes) => [
        ...prevCoursesIndexes,
        coursesCounter,
      ]);
    } else if (btn == "Organisation") {
      setOrganisationCounter(
        (prevOrganisationCounter) => prevOrganisationCounter + 1
      );
      setOrganisationIndexes((prevOrganisationIndexes) => [
        ...prevOrganisationIndexes,
        organisationCounter,
      ]);
    } else if (btn == "Interest") {
      setInterestCounter((prevInterestCounter) => prevInterestCounter + 1);
      setInterestIndexes((prevInterestIndexes) => [
        ...prevInterestIndexes,
        interestCounter,
      ]);
    } else if (btn == "Award") {
      setAwardCounter((prevAwardCounter) => prevAwardCounter + 1);
      setAwardIndexes((prevAwardIndexes) => [
        ...prevAwardIndexes,
        awardCounter,
      ]);
    }
    console.log(projectsIndexes);
  };

  const handleDialogOpen = () => {
    setPop(true);
  };

  const handleDialogClose = () => {
    setPop(false);
  };
  const AddSaveButton = () => {
    return (
      <Box sx={{ my: 3 }}>
        {btn == "Education" ||
        btn == "Projects" ||
        btn == "Experience" ||
        btn == "Courses" ||
        btn == "Organisation" ||
        btn == "Interest" ||
        btn == "Award" ? (
          <Button sx={{ mr: 2 }} variant="contained" onClick={handleAddClick}>
            Add
          </Button>
        ) : (
          <Box />
        )}
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </Box>
    );
  };
  return (
    <>
      <Grid display={"flex"} justifyContent={"space-between"}>
        <Grid xs={0} sm={3} md={2}>
          <Hidden smDown>
            <Box
              mt={12}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}>
              {portfolioButtons.map(generatePortfolioButtons)}
            </Box>
          </Hidden>
        </Grid>
        <Grid mt={8} xs={12} sm={9} md={10}>
          <Container>
            <Hidden smUp>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Button
                  variant={"contained"}
                  onClick={handleDialogOpen}
                  sx={{
                    padding: {
                      lg: "5px 44px",
                      md: "5px 44px",
                      sm: "5px 34px",
                      sx: "5px 27px",
                    },
                    my: 3,
                    background: "#1981FF",
                  }}>
                  Portfolio Fields
                </Button>
                {AddSaveButton()}
              </Box>
              <Dialog
                open={pop}
                onClose={handleDialogClose}
                BackdropProps={{
                  classes: {
                    root: classes.backDrop,
                  },
                }}>
                <Box
                  width={"100%"}
                  height={"100%"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}>
                  <Box
                    zIndex={1}
                    width={"500px"}
                    bgcolor={"white"}
                    display={"flex"}
                    flexWrap={"wrap"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    pt={6}
                    pb={6}>
                    {portfolioButtons.map(generatePortfolioButtons)}
                  </Box>
                </Box>
              </Dialog>
            </Hidden>
            <Box
              sx={{
                p: 2,
              }}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <h1>{btn}</h1>
                <Hidden smDown>{AddSaveButton()}</Hidden>
              </Box>
              {portfolioFields[btn].map(generateFields)}
              <Box mt={2} />
              {btn == "Education" ||
              btn == "Projects" ||
              btn == "Experience" ||
              btn == "Courses" ||
              btn == "Organisation"
                ? generateStartEndDate()
                : btn == "Skills"
                ? skillSelectGenerateFields()
                : btn == "Award"
                ? generateDate()
                : ""}
              <Box mt={4} />

              {btn == "Education"
                ? educationIndexes.map((index) => (
                    <Box key={index}>
                      <Box mt={4} />
                      {portfolioFields[btn].map(generateFields)}
                      {generateStartEndDate()}
                    </Box>
                  ))
                : btn == "Projects"
                ? projectsIndexes.map((index) => (
                    <Box key={index}>
                      <Box mt={4} />
                      {portfolioFields[btn].map(generateFields)}
                      {generateStartEndDate()}
                    </Box>
                  ))
                : btn == "Experience"
                ? experienceIndexes.map((index) => (
                    <Box key={index}>
                      <Box mt={4} />
                      {portfolioFields[btn].map(generateFields)}
                      {generateStartEndDate()}
                    </Box>
                  ))
                : btn == "Skills"
                ? skillsIndexes.map((index) => (
                    <Box key={index}>
                      <Box mt={4} />
                      {portfolioFields[btn].map(generateFields)}{" "}
                      {skillSelectGenerateFields()}
                    </Box>
                  ))
                : btn == "Courses"
                ? coursesIndexes.map((index) => (
                    <Box key={index}>
                      <Box mt={4} />
                      {portfolioFields[btn].map(generateFields)}{" "}
                      {generateStartEndDate()}
                    </Box>
                  ))
                : btn == "Organisation"
                ? organisationIndexes.map((index) => (
                    <Box key={index}>
                      <Box mt={4} />
                      {portfolioFields[btn].map(generateFields)}{" "}
                      {generateStartEndDate()}
                    </Box>
                  ))
                : btn == "Interest"
                ? interestIndexes.map((index) => (
                    <Box key={index}>
                      <Box mt={4} />
                      {portfolioFields[btn].map(generateFields)}
                    </Box>
                  ))
                : btn == "Award"
                ? awardIndexes.map((index) => (
                    <Box key={index}>
                      <Box mt={4} />
                      {portfolioFields[btn].map(generateFields)}
                      {generateDate()}
                    </Box>
                  ))
                : ""}
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
