import React, { useState, useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import {
  baseStyle,
  activeStyle,
  acceptStyle,
  rejectStyle,
} from "./dropzoneStyles";

const Dropzone = (props) => {
  const [fileText, setFileText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [failMsg, setFailMsg] = useState("");

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => setFileText(e.target.result);
      fileReader.readAsText(file)
  .then(console.log(fileText))
  ;
    })
    
    ;
    if(fileText.includes('PokerStars') === false) setFailMsg('boo')
    if(rejectedFiles) setErrorMsg('File type invalid - please submit a .txt file and try again');  
  }
  , []);


  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: ".txt",
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div>Drag and drop your images here.</div>
      </div>
      <br />
      {failMsg}
      {errorMsg}

    </>
  );
};

export default Dropzone;
