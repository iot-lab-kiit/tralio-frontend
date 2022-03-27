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

  const portfolioButtons = [
    "Profile",
    "Education",
    "Skills",
    "Projects",
    "Experience",
  ];
  const [btn, setbtn] = useState("Education");
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
  const generateFields = (input) => {
    return (
      <Box key={{ btn } + input.name} width={"100%"}>
        <TextField
          fullWidth
          name={input.name}
          label={input.name}
          variant="outlined"
          type={input.type}
          onChange={handleUserInfo}
        />
        <Box mt={2} />
      </Box>
    );
  };
  const generateFieldsBio = () => {
    return (
      <Box width={"100%"}>
        <TextField
          fullWidth
          id="outlined-textarea"
          label="Bio"
          placeholder="Bio"
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
            width: { md: 150, xs: 110 },
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
    }
    console.log(projectsIndexes);
  };

  const handleDialogOpen = (event) => {
    setPop(true);
  };

  return (
    <>
      <Hidden smDown>
        <Box
          mt={8}
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}>
          {portfolioButtons.map(generatePortfolioButtons)}
        </Box>
      </Hidden>
      <Container>
        <Hidden smUp>
          <Box mt={8} />
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
              background: "#1981FF",
            }}>
            Portfolio Fields
          </Button>
          <Dialog
            open={pop}
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
            <Box sx={{ my: 3 }}>
              {btn == "Education" ||
              btn == "Projects" ||
              btn == "Experience" ||
              btn == "Skills" ? (
                <Button
                  sx={{ mr: 2 }}
                  variant="contained"
                  onClick={handleAddClick}>
                  Add
                </Button>
              ) : (
                <Box />
              )}
              <Button variant="contained" onClick={handleSave}>
                Save
              </Button>
            </Box>
          </Box>
          {portfolioFields[btn].map(generateFields)}
          <Box mt={2} />
          {btn == "Profile"
            ? generateFieldsBio()
            : btn == "Education" || btn == "Projects" || btn == "Experience"
            ? generateStartEndDate()
            : btn == "Skills"
            ? skillSelectGenerateFields()
            : portfolioFields[btn].map(generateFields)}
          <Box mt={4} />
          {btn == "Education"
            ? educationIndexes.map((index) => (
                <Box key={index}>
                  <Box mt={4} />
                  {portfolioFields[btn].map(generateFields)}{" "}
                  {generateStartEndDate()}
                </Box>
              ))
            : btn == "Projects"
            ? projectsIndexes.map((index) => (
                <Box key={index}>
                  <Box mt={4} />
                  {portfolioFields[btn].map(generateFields)}{" "}
                  {generateStartEndDate()}
                </Box>
              ))
            : btn == "Experience"
            ? experienceIndexes.map((index) => (
                <Box key={index}>
                  <Box mt={4} />
                  {portfolioFields[btn].map(generateFields)}{" "}
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
            : ""}
        </Box>
      </Container>
    </>
  );
}
