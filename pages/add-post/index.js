import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Box from "@mui/material/Box";
import { Button, Container } from "@mui/material";;
import ReactHtmlParser from "react-html-parser"

export default function AddPost() {
  const editorRef = useRef(null);
  const [initial, setInitial] = useState("Write Something");
   const log = () => {
       console.log(editorRef.current.getContent())
     }
  return (
    <>
      <Container>
        <Box mt={10} />
        <Editor
          apiKey="jq0hm5i9g8sxohg5nsiut5ugowize8j50790c8eu8eeajiir"
          onInit={(evt, editor) => (editorRef.current = editor)}
          value={initial}
          onEditorChange={(content) => setInitial(content)}
          init={{
            selector: "textarea",
            height: 500,
            image_dimensions: true,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks fullscreen",
              "insertdatetime media table paste image",
            ],
            toolbar:
              "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <Button sx={{my:2}} variant="contained" onClick={() => {console.log(initial)}}>
          Click
        </Button>
        <h2>Preview</h2>
        <Box sx={{ overflow: "auto", height:500}}>
          {initial && ReactHtmlParser(initial)}
        </Box>
        <Box mt={10} />
      </Container>
    </>
  );
}
