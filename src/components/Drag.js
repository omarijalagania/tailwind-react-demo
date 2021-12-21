import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { DropzoneArea } from "material-ui-dropzone";

function Drag() {
  const [files, setFiles] = useState([]);
  const handleChange = (files) => {
    setFiles(files);
  };

  const useStyles = makeStyles((theme) =>
    createStyles({
      previewChip: {
        minWidth: 160,
        maxWidth: 210,
      },
    })
  );

  const classes = useStyles();
  return (
    <div className="sm:px-20 md:px-60 md:py-20">
      <DropzoneArea
        showPreviews={true}
        showPreviewsInDropzone={false}
        filesLimit={10}
        onChange={handleChange.bind(null, files)}
        dropzoneText="ატვირთეთ ან გადმოიტანეთ ფაილი, არაუმეტეს 10MB"
        previewGridProps={{ container: { spacing: 5, direction: "row" } }}
        previewText="Selected files"
      />
    </div>
  );
}

export default Drag;
