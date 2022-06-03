import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

export default function AddEducation({index, selectedButton}) {

    const [degree, setDegree] = useState('')
    const [school, setSchool] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    return (
        <>
            <TextField
                // onChange={(event) => {
                //     setDegree(event.target.value);
                // }}
                // value={degree}
                fullWidth
                label={"Degree"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                // onChange={(event) => {
                //     setUniversity(event.target.value);
                // }}
                // value={university}
                fullWidth
                label={"School/University"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                // onChange={(event) => {
                //     setCourse(event.target.value);
                // }}
                // value={course}
                fullWidth
                label={"City"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                // onChange={(event) => {
                //     setCourse(event.target.value);
                // }}
                // value={course}
                fullWidth
                label={"Country"}
                type={"text"}
            />
            <Box mt={3} />
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
            >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="Date of Birth"
                        inputFormat="dd/MM/yyyy"
                        // onChange={handleDate}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <Box mr={2} />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="Date of Birth"
                        inputFormat="dd/MM/yyyy"
                        // onChange={handleDate}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Box>
            <Box mt={4} />
            <Button
                // onClick={handleChange}
                variant={"contained"}
                fullWidth
                sx={{
                    backgroundColor: "#268AFF",
                    color: "#FFF",
                    borderRadius: "10px",
                    py: 1.5,
                    "&:hover": {
                        fontWeight: "600",
                        backgroundColor: "#006ff8",
                    },
                }}
            >
                Save details
            </Button>
        </>
    )
}