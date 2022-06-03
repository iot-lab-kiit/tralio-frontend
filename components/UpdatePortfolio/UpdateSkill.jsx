import Box from "@mui/material/Box";
import {Button, MenuItem, TextField} from "@mui/material";
import {useState} from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

export default function UpdateSkill({index, selectedButton}) {

    const [skill, setSkill] = useState('')
    const [desc, setDesc] = useState('')
    const [level, setLevel] = useState('')

    return (
        <>
            <TextField
                // onChange={(event) => {
                //     setDegree(event.target.value);
                // }}
                // value={degree}
                fullWidth
                label={"Skill"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                // onChange={(event) => {
                //     setUniversity(event.target.value);
                // }}
                // value={university}
                fullWidth
                label={"Description"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                label={"Level"}
                select
                fullWidth
                // value={maritalStatus}
                // onChange={(event) => {
                //     setMaritalStatus(event.target.value);
                // }}
            >
                <MenuItem key={"married"} value={"1"}>
                    Beginner
                </MenuItem>
                <MenuItem key={"single"} value={"2"}>
                    Intermediate
                </MenuItem>
                <MenuItem key={"single"} value={"2"}>
                    Expert
                </MenuItem>
            </TextField>
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