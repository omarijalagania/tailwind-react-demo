import React, { useState } from "react";

import { DropzoneArea } from "material-ui-dropzone";

function Drag() {
  const [files, setFiles] = useState([]);
  const handleChange = (files) => {
    setFiles(files);
  };
  return (
    <div className="sm:p-20 p-1">
      <DropzoneArea onChange={handleChange.bind(null, files)} />
    </div>
  );
}

export default Drag;
