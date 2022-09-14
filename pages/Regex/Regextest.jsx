import React, { useState, useEffect, useCallback, useMemo } from "react";
import Head from "next/head";
import Image from "next/image";
import { HighlightWithinTextarea } from "react-highlight-within-textarea";
import ReactTooltip from "react-tooltip";
import { Card, Grid, Box, Flex, Text } from "theme-ui";
import { transparentize } from "@theme-ui/color";
import Accordion from "react-bootstrap/Accordion";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import backgroundImage from "../../public/Images/documents.webp";

import CommonToken from "./Accordions/CommonToken";
import GeneralToken from "./Accordions/GeneralToken";
import MetaSeq from "./Accordions/MetaSeq";
import Anchors from "./Accordions/Anchors";
import Quantifiers from "./Accordions/Quantifiers";
import GroupConst from "./Accordions/GroupConst";
import Characters from "./Accordions/Characters";
import FlagsModifiers from "./Accordions/FlagModifiers";
import Substitutions from "./Accordions/Substitutions";
import AllRegexes from "./Accordions/AllRegexes";

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

/////////////////regex test /////////////////////////////

const RegexTest = () => {
  const [value, setValue] = useState(
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit.1 2 3 4 5 6 7 8 9 10 Ipsa goose repellendus itaque reiciendis ab explicabo quasi, dicta temporibus quod tempore quis saepe fugit ut autem dolorem eos incidunt voluptates et veritatis fugiat at. Voluptatem nulla, libero magni architecto tempore laudantium dolorum quam impedit placeat aliquid, et similique, quos consectetur veritatis eligendi id iure quia. Recusandae, ullam quidem vero deserunt perspiciatis eligendi voluptates corporis molestiae ab nesciunt non aperiam necessitatibus nemo nam repellendus provident, fugit iure nobis obcaecati cupiditate quos, libero sequi autem! Dolorem adipisci nesciunt repellat, libero quam cumque aliquid expedita, ipsum illo, numquam autem quos voluptates accusantium? Ex ut fugit, mollitia libero hic optio veniam saepe. Ipsam reprehenderit placeat perspiciatis numquam consequatur? Quaerat deserunt quos aut velit iusto a, doloremque veritatis id tempore. Obcaecati nobis accusamus unde, vel necessitatibus ipsa aspernatur iure ducimus maxime labore a repellendus perferendis ullam. Dignissimos rerum aliquid similique unde, rem numquam tempore minus est sed iste provident quasi sit, veritatis sapiente a repudiandae explicabo consequuntur autem asperiores debitis molestiae? Quam in, aliquam a sapiente ducimus odit? Nemo facilis voluptates officia vel animi alias! Quaerat vel architecto voluptas obcaecati, exercitationem, laborum, minus earum consequatur`
  );
  // const savedInput = localStorage.getItem("inputValue");
  // const initialState =   JSON.parse(savedInput) || "lo[rtyu]em";
  const initialState = "lo[rtyu]em";
  const [searchValue, setSearchValue] = useState(initialState);
  const [searchShowValue, setSearchShowValue] = useState(initialState);
  const [highlightValue, setHighlightValue] = useState();
  const [errormsg, setErrormsg] = useState("");
  const [OpendivFlag, setOpendivFlag] = useState(true);
  const [OpenFlag, setOpenFlag] = useState("i");
  const [clickToken, setClickToken] = useState("");
  const [checkedState, setCheckedState] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const onChange = (value) => setValue(value);

  const checkboxflag = [
    // {
    //   name: "g",
    //   text: "global search (g) Finds all the correspondences rather than stopping after the first match",
    // },
    { name: "i", text: "case insensitive (i) Case is ignored" },
    {
      name: "m",
      text: "multiline (m) Start and end characters (^ and $) are treated as working on each line",
    },
    {
      name: "u",
      text: "unicode (u) Treat the regular expression as a sequence of Unicode code points",
    },
    {
      name: "y",
      text: "sticky (y) Matches only from the index indicated by the lastIndex property of this regular expression",
    },
    {
      name: "s",
      text: "dot all make . match newline too. (s) Dot metacharacter matches all characters, including newlines",
    },
  ];

  /////////////////////////drag and drop file upload/////////////////////////////
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    showFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      accept:
        ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,application/xml,text/xml,application/json,text/json,text/plain",
    });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  ////////////////////////////////read file////////////////////////
  // const showFile = async (textFile) => {
  //   console.log(textFile);
  //   const reader = new FileReader();
  //   reader.onloaded = () => {
  //     const textResult  = reader.result;
  //     console.log(textResult.length);
  //     if (!textResult.length) {
  //       setErrormsg("**Not valid Image file!**");
  //       setValue("");
  //       return;
  //     }
  //     try {
  //       setValue(textResult);
  //       setUploadedvalue(textResult);
  //     } catch (error) {
  //       setErrormsg("**Not valid Image file!**");
  //       setValue("");
  //       return;
  //     }
  //   };
  //   reader.readAsText(textFile);
  // };

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
  const showFile = async (e) => {
    console.log(e);
    const name = e.name;
    const lastDot = name.lastIndexOf(".");
    const ext = name.slice(lastDot);
    console.log(ext);
    if (!frmtarry.includes(ext)) {
      alert("File Format is Wrong!");
      return;
    }
    console.log("Go", e.name);
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        // const text = e;
        console.log(e.target.result);
        setValue(e.target.result);
      };
      reader.readAsText(e);
    } catch (error) {
      console.error(error);
    }
  };

  ///////////////////////////////////////////////////////////

  RegExp.quote = function (str) {
    return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
  }; //https://stackoverflow.com/questions/16168484/javascript-syntax-error-invalid-regular-expression
  var re = new RegExp(RegExp.quote(initialState));

  const searchHandler = (e) => {
    var inputValue = "";
    e ? (inputValue = e.target.value) : (inputValue = initialState);
    setSearchShowValue(inputValue);
    // localStorage.setItem("inputValue", JSON.stringify(inputValue));
    let regExp = "";

    if (
      inputValue.slice(-1) === "|" ||
      (inputValue[0] === "^" && inputValue.length < 2) ||
      (inputValue[0] === "$" && inputValue.length < 2)
    ) {
      console.log("starts with ^ or $ or | in the text");
      try {
        regExp = new RegExp(RegExp.quote(initialState));
        setErrormsg("Empty");
        return false;
      } catch (error) {
        setErrormsg(`${error}`);
        return false;
      }
    }
    if (inputValue !== "") {
      try {
        if ((regExp = new RegExp(inputValue, `g${OpenFlag}`))) {
          setErrormsg("");
          setSearchValue(regExp);
        }
      } catch (error) {
        setErrormsg(`${error}`);
        setSearchValue(" ");
        return false;
      }
    } else if (inputValue === "") {
      console.log("empty");
      try {
        regExp = new RegExp(RegExp.quote(initialState));
        setErrormsg("Empty");
        setSearchValue(regExp);
      } catch (error) {
        setErrormsg(`${error}`);
        setSearchValue(" ");
        return false;
      }
    }
  };

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    const totalflag = updatedCheckedState.reduce(
      (newflags, currentState, index) => {
        if (currentState === true) {
          return newflags + checkboxflag[index].name;
        }
        return newflags;
      },
      ""
    );
    setOpenFlag(totalflag);
  };

  const AddToken = (e) => {
    setClickToken(e);
    setSearchValue(searchValue + e);
    setSearchShowValue(searchShowValue + e);
  };

  useEffect(() => {
    setHighlightValue(searchValue);
  }, [searchValue, OpenFlag, errormsg]);

  useEffect(() => {
    searchHandler();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Head>
        <title>Regex tester</title>
        <meta
          name="description"
          content="Regular expressions are a ubiquitous part of programming languages. Learn how they work, how to write them, and how to use them in practice."
        />
        <meta
          name="description"
          content="Learn how to use regular expressions to make your everyday life easier."
        />
        <meta
          name="description"
          content="A regex test is a tool that lets you test on a regular expression, which is a pattern you type into a text field. It's used to check for a specific pattern in the text."
        />
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
        <Grid columns={[1, 1, "2fr 1fr"]} gap={2}>
          <Box>
            <h1>Regex Test</h1>
            <Text
              sx={{
                fontSize: [0, 1],
                fontWeight: "bold",
                display: "block",
                whiteSpace: "pre-line",
                wordBreak: "break-word",
              }}
            >
              A regex test is a tool that lets you test on a regular expression,
              which is a pattern you type into a text field. It&apos;s used to
              check for a specific pattern in the text. Regular expressions are
              a ubiquitous part of programming languages.Learn how to use
              regular expressions to make your everyday life easier.
            </Text>
          </Box>
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
        <Grid columns={[1]} gap={2}>
          <Card
            sx={{
              minHeight: ["5rem"],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: transparentize("primary", 0.45),
              borderRadius: ".6rem",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <input
                type="text"
                value={searchShowValue}
                onChange={searchHandler}
                style={{
                  width: "80%",
                  borderRadius: "8px 0 0 8px",
                  borderRight: "0",
                }}
              />
              <input
                type="text"
                value={`/g${OpenFlag}`}
                readOnly
                style={{
                  width: "20%",
                  borderRadius: "0 8px 8px 0",
                  borderLeft: "0",
                }}
              />
            </Box>
            <Box sx={{ color: "red", width: "100%" }}>
              <hr />
              {errormsg ? (
                errormsg
              ) : (
                <Box sx={{ color: "black" }}>Choose the flag</Box>
              )}
            </Box>
            <Box style={{ display: OpendivFlag !== true ? "none" : "block" }}>
              <hr />
              <ul>
                <li key={1}>
                  <input type="checkbox" checked disabled /> global search (g)
                  Finds all the correspondences rather than stopping after the
                  first match
                </li>
                {checkboxflag.map(({ name, text }, index) => (
                  <li key={index}>
                    <input
                      type="checkbox"
                      name={name}
                      id={`custom-checkbox-${index}`}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index, name)}
                    />
                    &nbsp;
                    <label htmlFor={`custom-checkbox-${index}`}>{text}</label>
                  </li>
                ))}
              </ul>
            </Box>
          </Card>
        </Grid>

        <hr />

        <Grid
          columns={[1, 1, "1fr 2fr"]}
          gap={2}
          sx={{
            maxHeight: ["100%", "100%", "22rem"],
            alignContent: "flex-start",
          }}
        >
          <Box bg="primary">
            <div>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Common Tokens</Accordion.Header>
                  <Accordion.Body>
                    <CommonToken setClickToken={AddToken} />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>General Token</Accordion.Header>
                  <Accordion.Body>
                    <GeneralToken setClickToken={AddToken} />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Anchors</Accordion.Header>
                  <Accordion.Body>
                    <Anchors setClickToken={AddToken} />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>Meta Sequences</Accordion.Header>
                  <Accordion.Body>
                    <MetaSeq setClickToken={AddToken} />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>Quantifiers</Accordion.Header>

                  <Accordion.Body>
                    <Quantifiers setClickToken={AddToken} />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>Group Constructs</Accordion.Header>
                  <Accordion.Body>
                    <GroupConst setClickToken={AddToken} />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header>characters Classes</Accordion.Header>
                  <Accordion.Body>
                    <Characters setClickToken={AddToken} />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header>Flags/Modifiers</Accordion.Header>
                  <Accordion.Body>
                    <FlagsModifiers setClickToken={AddToken} />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                  <Accordion.Header>Substitutions</Accordion.Header>
                  <Accordion.Body>
                    <Substitutions setClickToken={AddToken} />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                  <Accordion.Header>All Regex Tokens</Accordion.Header>
                  <Accordion.Body>
                    <AllRegexes setClickToken={AddToken} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Box>
          <Flex
            sx={{
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="tableContainerdragndrop">
              <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <p>
                  Drag &apos;n&apos; drop a file here, or click to select file
                </p>
                <p style={{ wordBreak: "break-word" }}>
                  .xlsx ,.xlsm ,.xlsb ,.xls ,.xlw ,.xlr ,.csv ,.json ,.doc
                  ,.docx ,.xml
                </p>
                Text Below is editable and could write or copy your text here
                then you can check the regex on it
              </div>
            </div>
            <hr />
            <HighlightWithinTextarea
              value={value}
              onChange={onChange}
              highlight={highlightValue}
              sx={{
                width: "600px",
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            />
          </Flex>
        </Grid>

        <ReactTooltip
          id="main"
          multiline={true}
          place="bottom"
          type="info"
          effect="float"
          className="customeTheme"
        />
      </Card>
    </motion.div>
  );
};

export default RegexTest;
