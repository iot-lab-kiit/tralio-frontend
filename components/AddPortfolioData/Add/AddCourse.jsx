import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import {useState} from "react";

export default function AddCourse({index, selectedButton}) {

    const [name, setName] = useState('')
    const [institute, setInstitute] = useState('')

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
                label={"Institute"}
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