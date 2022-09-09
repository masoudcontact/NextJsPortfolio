import React, { useEffect, useState, useMemo } from "react";
import Head from "next/head";
import Image from "next/image";
import { Card, Grid, Box } from "theme-ui";
import ReactDiffViewer, { DiffMethod } from "react-diff-viewer";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import backgroundImage from "../../public/Images/documents.webp";
import ButtonMn from "../../lib/Button/ButtonMn";

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

const CompareText = () => {
  const [File1, setFile1] = useState("");
  const [File2, setFile2] = useState("");
  const [Split, setSplit] = useState(true);
  const [Darkthm, setDarkthm] = useState(false);
  const [LineNumbers, setLineNumbers] = useState(true);

  const [errorDataFile1, setErrorDataFile1] = useState("");
  const [errorDataFile2, setErrorDataFile2] = useState("");
  const [Orientation, setOrientation] = useState(false);
  const [aspectRatio, setaspectRatio] = useState("wider");
  const [File1path, setFile1path] = useState("");
  const [File2path, setFile2path] = useState("");

  const newStyles = {
    diffContainer: {
      borderRadius: "1rem",
    },

    variables: {
      dark: {
        highlightBackground: "#fefed5",
        highlightGutterBackground: "#ffcd3c",
      },
    },
    line: {
      padding: "10px 2px",
      "&:hover": {
        background: "#a26ea1",
      },
    },
  };

  const oldCode = `
  const a = 10
  const b = 10
  const c = () => console.log('foo')
   
  if(a > 10) {
    console.log('bar')
  }
   
  console.log('done')
  `;
  const newCode = `
  const a = 10
  const boo = 10
   
  if(a === 10) {
    console.log('bar')
  }
  `;
  const frmtarry = [
    ".csv",
    ".json",
    ".JSON",
    ".txt",
    ".js",
    ".ts",
    ".jsx",
    ".css",
    ".scss",
  ];

  useEffect(() => {}, []);

  ////Left side
  const {
    getRootProps: getRootPropsFile1,
    getInputProps: getInputPropsFile1,
    isFocused: isFocusedFile1,
    isDragAccept: isDragAcceptFile1,
    isDragReject: isDragRejectFile1,
  } = useDropzone({
    onDrop: (acceptedFile) => {
      showFile1(acceptedFile[0]);
    },
    accept:
      ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,application/xml,text/xml,application/json,text/json,text/plain",
  });

  const stylefile1 = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocusedFile1 ? focusedStyle : {}),
      ...(isDragAcceptFile1 ? acceptStyle : {}),
      ...(isDragRejectFile1 ? rejectStyle : {}),
    }),
    [isFocusedFile1, isDragAcceptFile1, isDragRejectFile1]
  );

  const showFile1 = async (e) => {
    // console.log(e);
    const name = e.name;
    const lastDot = name.lastIndexOf(".");
    const ext = name.slice(lastDot);
    // console.log(ext);
    if (!frmtarry.includes(ext)) {
      alert("File Format is Wrong!");
      return;
    }
    // console.log("Go", e.name);
    try {
      setFile1path(e.name);
      const reader = new FileReader();
      reader.onload = async (e) => {
        setFile1(e.target.result);
      };
      reader.readAsText(e);
    } catch (error) {
      console.error(error);
    }
  };
  ////Right side
  const {
    getRootProps: getRootPropsFile2,
    getInputProps: getInputPropsFile2,
    isFocused: isFocusedFile2,
    isDragAccept: isDragAcceptFile2,
    isDragReject: isDragRejectFile2,
  } = useDropzone({
    onDrop: (acceptedFile) => {
      showFile2(acceptedFile[0]);
    },
    accept:
      ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,application/xml,text/xml,application/json,text/json,text/plain",
  });

  const stylefile2 = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocusedFile2 ? focusedStyle : {}),
      ...(isDragAcceptFile2 ? acceptStyle : {}),
      ...(isDragRejectFile2 ? rejectStyle : {}),
    }),
    [isFocusedFile2, isDragAcceptFile2, isDragRejectFile2]
  );

  const showFile2 = async (e) => {
    // console.log(e);
    const name = e.name;
    const lastDot = name.lastIndexOf(".");
    const ext = name.slice(lastDot);
    // console.log(ext);
    if (!frmtarry.includes(ext)) {
      alert("File Format is Wrong!");
      return;
    }
    // console.log("Go", e.name);
    try {
      setFile2path(e.name);
      const reader = new FileReader();
      reader.onload = async (e) => {
        setFile2(e.target.result);
      };
      reader.readAsText(e);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Head>
        <title>Compare Texts</title>
        <meta name="description" content="Compare Texts" />
      </Head>

      <Card
        sx={{
          color: "primary",
          display: "flex",
          flexDirection: "column",
          minHeight: "82vh",
          variant: "layout.root",
        }}
      >
        <Grid columns={[2, "2fr 1fr"]} gap={2}>
          <Box>
            <h1>Text Compare</h1>
            <h4>
              Open and compare any text base file
              (.xlsx,.xlsm,.xlsb,.xls,xlw,.xlr,.csv,.json,doc,.docx,.xml) you
              can check your code file is same or not.
            </h4>
          </Box>
          <Box></Box>
        </Grid>

        <Card
          sx={{
            width: "100%",
            height: "10rem",
            borderRadius: ".6rem",
            margin: "1rem 0",
            padding: 0,
          }}
        >
          <Image
            src={backgroundImage}
            alt="Latest Crypto Fear & Greed Index"
            height="340"
            width="2000"
          />
        </Card>
        <hr />
        <Grid columns={[1, "2fr 2fr"]} gap={2}>
          <Box>
            <Card
              sx={{
                color: "primary",
                minHeight: ["5rem", "5rem"],
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div {...getRootPropsFile1({ stylefile1 })}>
                <input {...getInputPropsFile1()} />
                <div>
                  Drag &apos;n&apos; drop some files here, or click to select
                  files
                </div>
                <div
                  className="container"
                  style={{ overflow: "hidden", maxWidth: "80%" }}
                >
                  <br />
                  File should be in one of listed format:
                  <br />
                  .txt .json .JSON .js .ts
                  <br />
                </div>
                {errorDataFile1 ? errorDataFile1 : File1path}
              </div>
            </Card>
          </Box>
          <Box>
            <Card
              sx={{
                color: "primary",
                minHeight: ["5rem", "5rem"],
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div {...getRootPropsFile2({ stylefile2 })}>
                <input {...getInputPropsFile2()} />
                <div>
                  Drag &apos;n&apos; drop some files here, or click to select
                  files
                </div>
                <div
                  className="container"
                  style={{ overflow: "hidden", maxWidth: "80%" }}
                >
                  <br />
                  File should be in one of listed format:
                  <br />
                  .txt .json .JSON .js .ts
                  <br />
                </div>
                {errorDataFile2 ? errorDataFile2 : File2path}
              </div>
            </Card>
          </Box>
        </Grid>

        <Card>
          <Grid
            gap={2}
            columns={[1, 3, 3]}
            sx={{
              paddingTop: "0",
              minHeight: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Box>
              <ButtonMn onClick={() => setSplit(!Split)}>
                {Split ? "unified" : "Split"}
              </ButtonMn>
            </Box>
            <Box>
              <ButtonMn onClick={() => setDarkthm(!Darkthm)}>
                {Darkthm ? "Light" : "Dark"}
              </ButtonMn>
            </Box>
            <Box>
              <ButtonMn onClick={() => setLineNumbers(!LineNumbers)}>
                {LineNumbers ? "Line #" : "No line #"}
              </ButtonMn>
            </Box>
          </Grid>
        </Card>

        <Card>
          <Box>
            <ReactDiffViewer
              styles={newStyles}
              oldValue={File1 || oldCode}
              newValue={File2 || newCode}
              splitView={Split}
              compareMethod={DiffMethod.WORDS}
              useDarkTheme={Darkthm}
              hideLineNumbers={LineNumbers}
              // renderContent={highlightSyntax}
            />
          </Box>
        </Card>
      </Card>
    </motion.div>
  );
};

export default CompareText;
