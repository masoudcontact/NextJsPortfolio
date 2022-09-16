import React, { useState, useMemo } from "react";
import { Card, Grid, Box, Text } from "theme-ui";
import { useDropzone } from "react-dropzone";
import initialBackground from "./InitialBackground";

// import classes from "../Styles/Card.module.css";
// import cardStyle from "../Styles/infoCard.module.css";
// import "../Styles/progressbar.css";
// import "react-datepicker/dist/react-datepicker.css";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 10,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

// const formatArry = [
//   ".jpg",
//   ".jpeg",
//   ".png",
//   ".gif",
//   ".bmp",
//   ".svg",
//   ".tiff",
//   ".tif",
//   ".webp",
//   ".ico",
//   ".raw",
//   ".psd",
//   ".ai",
//   ".eps",
//   ".pdf",
//   ".raw",
//   ".arw",
// ];

const ImageUploader = () => {
  const [File, setFile] = useState(initialBackground);
  const [errorDataFile, setErrorDataFile] = useState("");
  const [FilePath, setFilePath] = useState("");
  const [compressFormat, setCompressFormat] = useState("WEBP");

  ////Left side
  const {
    getRootProps: getRootPropsFile,
    getInputProps: getInputPropsFile,
    isFocused: isFocusedFile,
    isDragAccept: isDragAcceptFile,
    isDragReject: isDragRejectFile,
  } = useDropzone({
    onDrop: (acceptedFile) => {
      showFile(acceptedFile[0]);
    },
    accept: "image/*",
  });

  const styleFile = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocusedFile ? focusedStyle : {}),
      ...(isDragAcceptFile ? acceptStyle : {}),
      ...(isDragRejectFile ? rejectStyle : {}),
    }),
    [isFocusedFile, isDragAcceptFile, isDragRejectFile]
  );

  const showFile = (image) => {
    const reader = new FileReader();
    setFilePath(image);
    reader.onloadend = () => {
      const Imageresult = reader.result;

      if (!Imageresult.length) {
        setErrorDataFile("**Not valid Image file!**");
        setFile("");
        return;
      }
      try {
        setFile(Imageresult);
      } catch (error) {
        setErrorDataFile("**Not valid Image file!**");
        setFile("");
        return;
      }
    };
    reader.readAsDataURL(image);
  };

  const dateFilePath =
    FilePath && new Date(FilePath.lastModified).toString().slice(0, 15);

  function downloadImage(src) {
    const lastDot = FilePath.path.lastIndexOf(".");
    const fileName = FilePath.path.substring(0, lastDot);
    const img = new Image();
    img.crossOrigin = "anonymous"; // This tells the browser to request cross-origin access when trying to download the image data.
    // ref: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#Implementing_the_save_feature
    img.src = src;
    img.onload = () => {
      // create Canvas
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      // create a tag
      const a = document.createElement("a");
      a.download = `${fileName}.${compressFormat}`;
      a.href = canvas.toDataURL(`${fileName}.${compressFormat}`);
      a.click();
    };
  }

  return {
    File,
    FilePath,
    dateFilePath,
    UploadForm: (
      <Card>
        <Box {...getRootPropsFile({ styleFile })}>
          <input {...getInputPropsFile()} />
          <Box
            // className={cardStyle.tableContainer}
            style={{ margin: "-0.8rem" }}
          >
            Add Image to your post
          </Box>
          <Box
            // className="container"
            style={{
              fontSize: ".8rem",
              padding: "0rem .2rem .2rem 0rem",
            }}
          >
            <br />
            File should be in one of listed format:
            <br />
            <center>
              ,.jpg, ,.jpeg, ,.png, ,.gif, ,.bmp, ,.svg, ,.tiff, ,.tif, ,.webp,
              ,.ico, ,.raw, ,.psd, ,.ai, ,.eps, ,.pdf, ,.raw, ,.arw,
            </center>
            <br />
          </Box>

          {errorDataFile ? (
            errorDataFile
          ) : FilePath ? (
            <ul>
              <li>
                <img
                  src={File}
                  alt=""
                  onLoad={({ target: img }) => {}}
                  style={{
                    height: "4rem",
                    maxheight: "4rem",
                    mixheight: "4rem",
                  }}
                />
              </li>

              <li>Name: {FilePath.path}</li>
            </ul>
          ) : null}
        </Box>
      </Card>
    ),
  };
};

export default ImageUploader;
