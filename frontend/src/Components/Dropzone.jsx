import React, { useState, useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import {
  baseStyle,
  activeStyle,
  acceptStyle,
  rejectStyle,
} from "./dropzoneStyles";
import { spinFileFormatter } from "../Utilities/spinFileFormatter";

const Dropzone = (props) => {
  // const [fileText, setFileText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const rejectedFileTypeErrorMessage = `File type invalid. Please submit a .txt file and try again`;
  const rejectedTextFileErrorMessage = `Pokerstars hand history file not recognised. Please try again`;
  const successMessage = `Successfully uploaded`;

  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      acceptedFiles.forEach((file) => {
        const fileReader = new FileReader();
        fileReader.readAsText(file);
        fileReader.onload = (e) => {
          if (e.target.result.includes(`PokerStars Tournament #`)) {
            fetch("http://localhost:5000/data", {
              method: "post",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(spinFileFormatter(e.target.result)),
            });
            setErrorMsg(successMessage);
          } else {
            setErrorMsg(rejectedTextFileErrorMessage);
          }
        };
      });
      if (rejectedFiles) setErrorMsg(rejectedFileTypeErrorMessage);
    },
    [rejectedFileTypeErrorMessage, rejectedTextFileErrorMessage, successMessage]
  );

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
      {errorMsg}
    </>
  );
};

export default Dropzone;
