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
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";

import {
  portfolioFields,
  portfolioButtons,
} from "../../TralioAPI/portfolioForm";
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

  const [portfolioFormName, setPortfolioFormName] = useState("Profile");

  const tempPortfolioFields = portfolioFields
  const [currentPortfolioForm, setCurrentPortfolioForm] = useState(
    tempPortfolioFields["Profile"]
  );

  const [counters, setCounters] = useState({});

  const addFeature = [
    "Education",
    "Projects",
    "Experience",
    "Courses",
    "Organisation",
    "Interest",
    "Award",
  ];

  function handleCurrentPortfolioForm(formName) {
    setCurrentPortfolioForm(portfolioFields[formName]);
    setPortfolioFormName(formName);
    setPop(false);
  }

  const handlePortfolioDataChange = (e) => {
    const { name, value } = e.target;
    setPortfolioData({
      ...portfolioData,
      [name]: value,
    });
  };

  const handleDateChange = (newDate, name) => {
    setPortfolioData({
      ...portfolioData,
      [name]: newDate,
    });
  };

  const generateFields = (input) => {
    console.log(input);
    if (input.type === "text") {
      return (
        <Box key={{ portfolioFormName } + input.name} width={"100%"}>
          <TextField
            fullWidth
            name={input.name}
            label={input.name}
            id="outlined-textarea"
            type={input.type}
            multiline
            onChange={handlePortfolioDataChange}
          />
          <Box mt={2} />
        </Box>
      );
    } else if (input.type === "date") {
      return (
        <Box
          key={{ portfolioFormName } + input.name}
          display={"flex"}
          flexDirection={{ md: "row", xs: "column" }}
          width={"100%"}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              fullWidth
              views={["year", "month"]}
              label="Start Date"
              value={portfolioData.startDate}
              minDate={new Date("2012-03-01")}
              maxDate={new Date("2023-06-01")}
              onChange={(date) => handleDateChange(date, "startDate")}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  sx={{
                    pr: { md: 1, xs: 0 },
                    py: { md: 0, xs: 1 },
                  }}
                  {...params}
                  helperText={null}
                />
              )}
            />
            <DatePicker
              fullWidth
              views={["year", "month"]}
              label="End Date"
              name="endDate"
              minDate={new Date("2012-03-01")}
              maxDate={new Date("2023-06-01")}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  sx={{
                    pl: { md: 1, xs: 0 },
                    py: { md: 0, xs: 2 },
                  }}
                  {...params}
                  helperText={null}
                />
              )}
            />
          </LocalizationProvider>
        </Box>
      );
    } else if (input.type === "select") {
      return (
        <Box key={{ portfolioFormName } + input.name} width={"100%"}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {input.placeholder}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label={input.placeholder}
              onChange={handlePortfolioDataChange}
            >
              {input.options.map((option, index) => (
                <MenuItem key={"Skills Option " + index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box mt={2} />
        </Box>
      );
    }
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
            onChange={handlePortfolioDataChange}
          >
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
        sx={{ py: 1, mx: 1, textAlign: "center" }}
      >
        <Button
          variant="contained"
          sx={{
            width: 150,
            p: 1,
          }}
          onClick={() => handleCurrentPortfolioForm(buttonName)}
        >
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
  const handleDialogClose = () => {
    setPop(false);
  };
  const handleAddClick = () => {
    console.log("Iinitial",currentPortfolioForm)
    const counterName = portfolioFormName.toLowerCase()+"Counter"
    setCurrentPortfolioForm(
        ...currentPortfolioForm,
        portfolioFields[portfolioFormName]
      
    )

    console.log("Final",currentPortfolioForm)
    
    if (portfolioFormName == "Education") {
      setEducationCounter((prevEducationCounter) => prevEducationCounter + 1);
      setEducationIndexes((prevEducationIndexes) => [
        ...prevEducationIndexes,
        educationCounter,
      ]);
    } 
  };

  const handleDialogOpen = () => {
    setPop(true);
  };

  const AddSaveButton = () => {
    return (
      <Box sx={{ my: 3 }}>
        {addFeature.includes(portfolioFormName) ? (
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
    <Grid display={"flex"} justifyContent={"space-between"}>
      <Grid xs={0} sm={3} md={2}>
        <Hidden smDown>
          <Box
            mt={12}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
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
                }}
              >
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
                  zIndex={1}
                  width={"500px"}
                  bgcolor={"white"}
                  display={"flex"}
                  flexWrap={"wrap"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  pt={6}
                  pb={6}
                >
                  {portfolioButtons.map(generatePortfolioButtons)}
                </Box>
              </Box>
            </Dialog>
          </Hidden>
          <Box
            sx={{
              p: 2,
            }}
          >
            <Box display={"flex"} justifyContent={"space-between"}>
              <h1>{portfolioFormName}</h1>
              <Hidden smDown>{AddSaveButton()}</Hidden>
            </Box>
            {currentPortfolioForm.map(generateFields)}
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}
