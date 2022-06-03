import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

export default function UpdateProject({index, selectedButton}) {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    return (
        <>
            <TextField
                // onChange={(event) => {
                //     setDegree(event.target.value);
                // }}
                // value={degree}
                fullWidth
                label={"Name"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                // onChange={(event) => {
                //     setUniversity(event.target.value);
                // }}
                // value={university}
                fullWidth
                multiline
                rows={4}
                label={"Description"}
                type={"text"}
            />
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