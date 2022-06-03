import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import {useState} from "react";

export default function AddProfile({index, selectedButton}) {

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [bio, setBio] = useState('')
    const [email, setEmail] = useState('')

    return (
        <>
            <TextField
                // onChange={(event) => {
                //     setDegree(event.target.value);
                // }}
                // value={degree}
                fullWidth
                label={"First Name"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                // onChange={(event) => {
                //     setUniversity(event.target.value);
                // }}
                // value={university}
                fullWidth
                label={"Last Name"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                // onChange={(event) => {
                //     setCourse(event.target.value);
                // }}
                // value={course}
                fullWidth
                label={"Email"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                // onChange={(event) => {
                //     setCourse(event.target.value);
                // }}
                // value={course}
                fullWidth
                multiline
                rows={4}
                label={"Bio"}
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