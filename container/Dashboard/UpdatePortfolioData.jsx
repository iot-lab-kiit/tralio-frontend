import { useState } from "react";
import { userPortfolio } from "../../TralioAPI/tralio";

// MUI Material Basic Components
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
  Grid,
  Hidden,
} from "@mui/material";

import { createStyles, makeStyles } from "@mui/styles";

// MUI imports for Date Support
import {
  // AdapterDateFns,
  DatePicker,
  LocalizationProvider,
} from "@mui/lab";

// todo: Adding AdapterDateFns in above import creates an error,
// Why ??? I don't know, hence alag se import hai
import AdapterDateFns from "@mui/lab/AdapterDateFns";

// Portfolio Forms Template
import {
  portfolioFields,
  portfolioButtons,
  addFeature,
} from "../../TralioAPI/portfolioForm";

const useStyles = makeStyles(() =>
  createStyles({
    backDrop: {
      backdropFilter: "blur(3px)",
      backgroundColor: "rgba(0,0,30,0.4)",
    },
  })
);

// Declared outside the function to avoid re-initialization
const tempPortfolioFields = JSON.parse(JSON.stringify(portfolioFields));

export default function UpdatePortfolioData() {
  const classes = useStyles();

  const [pop, setPop] = useState(false);

  const [portfolioData, setPortfolioData] = useState({});
  const [portfolioFormName, setPortfolioFormName] = useState("Profile");

  const [currentPortfolioForm, setCurrentPortfolioForm] = useState(
    tempPortfolioFields["Profile"]
  );

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}_${Math.random() * 1000000}`;
  };

  function handleCurrentPortfolioForm(formName) {
    setCurrentPortfolioForm(tempPortfolioFields[formName]);
    setPortfolioFormName(formName);
    setPop(false);
  }

  const handlePortfolioDataChange = (e) => {
    const { name, value } = e.target;
    setPortfolioData({
      ...portfolioData,
      [portfolioFormName]: {
        ...portfolioData[portfolioFormName],
      },
    });
  };

  const handleDateChange = (newDate, name) => {
    setPortfolioData({
      ...portfolioData,
      [name]: newDate,
    });
  };

  const assembleGenerateFields = (dataFields) => {
    console.log("Test data", dataFields);
    return <>{dataFields.map(generateFields)}</>;
  };

  const generateDateField = (dateSettings) => {
    return (
      <DatePicker
        fullWidth
        views={["year", "month"]}
        label={dateSettings.placeholder}
        value={portfolioData.startDate}
        minDate={new Date("2012-03-01")}
        maxDate={new Date("2023-06-01")}
        onChange={(date) => handleDateChange(date, dateSettings.name)}
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
    );
  };

  const generateFields = (input) => {
    if (input.type === "text") {
      return (
        <Box key={generateKey(portfolioFormName + input.name)} width={"100%"}>
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
    } else if (input.type === "dual-date") {
      return (
        <Box
          key={generateKey(portfolioFormName + input.name)}
          display={"flex"}
          flexDirection={{ md: "row", xs: "column" }}
          width={"100%"}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            {generateDateField(input.date1)}
            {generateDateField(input.date2)}
          </LocalizationProvider>
          <Box mt={2} />
        </Box>
      );
    } else if (input.type === "select") {
      return (
        <Box key={generateKey(portfolioFormName + input.name)} width={"100%"}>
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
                <MenuItem
                  key={generateKey("Skills Option " + index)}
                  value={option}
                >
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

  const generatePortfolioButtons = (buttonName) => {
    return (
      <Box
        key={generateKey("button" + buttonName)}
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
    tempPortfolioFields[portfolioFormName] = tempPortfolioFields[
      portfolioFormName
    ].concat(portfolioFields[portfolioFormName]);

    setCurrentPortfolioForm(tempPortfolioFields[portfolioFormName]);
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
    <Grid container display={"flex"} justifyContent={"space-between"}>
      <Grid item xs={0} sm={3} md={2}>
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
      <Grid item mt={8} xs={12} sm={9} md={10}>
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
            {currentPortfolioForm.map((dataFields) =>
              dataFields.map(generateFields)
            )}
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}
