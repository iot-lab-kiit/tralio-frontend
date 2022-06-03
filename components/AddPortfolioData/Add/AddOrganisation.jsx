import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import {useState} from "react";

export default function AddOrganisation({index, selectedButton}) {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')

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
                label={"Position"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                // onChange={(event) => {
                //     setUniversity(event.target.value);
                // }}
                // value={university}
                fullWidth
                label={"City"}
                type={"text"}
            />
            <Box mt={2} />
            <TextField
                // onChange={(event) => {
                //     setUniversity(event.target.value);
                // }}
                // value={university}
                fullWidth
                label={"Country"}
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