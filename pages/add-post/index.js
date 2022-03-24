import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

export default function AddPost() {
  const editorRef = useRef(null);

  return (
    <>
      <Container>
        <Box mt={10} />
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            selector: "textarea",
            height: 500,
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
        <Box mt={10} />
      </Container>
    </>
  );
}
