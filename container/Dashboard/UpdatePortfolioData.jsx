import { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import { TextField } from "@mui/material";
import { userPortfolio } from "../../TralioAPI/tralio";
export default function UpdatePortfolioData() {
  const [portfolioData, setPortfolioData] = useState({});

  const portfolioButtons = [
    "Profile",
    "Education",
    "Skills",
    "Projects",
    "Experience",
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
  }
    const handleUserInfo = (e) => {
      const { name, value } = e.target;
      setPortfolioData({
        ...portfolioData,
        [name]: value,
      });
      console.log(portfolioData);
  };
  
  const generateSignUpForm = (input) => {
    return (
      <Box key={"Signup " + input.name} width={"100%"}>
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

  const generatePortfolioButtons = (buttonName) => {
    return (
      <Box sx={{ py: 1, textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            width: 200,
            backgroundColor: "white",
            color: "blue",
            p: 1,
            "&:hover": {
              backgroundColor: "#ebebeb",
            },
          }}
          onClick={() => handleChange(buttonName)}>
          {buttonName}
        </Button>
      </Box>
    );
  };
  const handleSave = async() => {
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
  }
  return (
    <>
      <Grid display={"flex"} flexDirection={"row"} mt={8}>
        <Grid
          item
          xs={2}
          sm={2}
          sx={{
            width: "20%",
            height: "100vh",
            backgroundColor: "#C4C4C4",
            py: 4,
          }}>
          {portfolioButtons.map(generatePortfolioButtons)}
        </Grid>
        <Grid
          item
          xs={5}
          md={8}
          sx={{
            py: 2,
            pl: 2,
          }}>
          <h1>{btn}</h1>
          {btn == "Education"
            ? portfolioFields.Education.map(generateSignUpForm)
            : btn == "Skills"
            ? portfolioFields.Skills.map(generateSignUpForm)
            : btn == "Projects"
            ? portfolioFields.Projects.map(generateSignUpForm)
            : btn == "Experience"
            ? portfolioFields.Experience.map(generateSignUpForm)
            : portfolioFields.Profile.map(generateSignUpForm)}
        </Grid>
        <Grid xs={5} sm={2} sx={{ textAlign: "center" }}>
          <Box mt="80vh">
            <Button sx={{ m: 1 }} variant="contained" onClick={handleSave}>
              Save
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
