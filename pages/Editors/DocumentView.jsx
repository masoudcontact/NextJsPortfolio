/** @jsxImportSource theme-ui */
import { useState, useEffect, useCallback, useMemo } from "react";
import Head from "next/head";
import Image from "next/image";
import { useColorMode, Card, Box, Grid, Text } from "theme-ui";
import * as XLSX from "xlsx";
import { MockDocument } from "../../lib/MockDocument";
import InventoryCHart from "../../Components/Chart/inventoryChart";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useDropzone } from "react-dropzone";
import ReactTooltip from "react-tooltip";
import { JsonPrettierTextarea } from "json-pretty-textarea";
import CsvDownload from "react-json-to-csv";
import TopPage from "../../public/Images/TopPage.png";
import ContainerSmall from "../../lib/ContainerSmall/ContainerSmall";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import BackGroundImage from "../../lib/BackGroundImage";
import { Document, Page } from "react-pdf";

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
const DocumentView = () => {
  const backgroundImage = "https://picsum.photos/200/300";
  const [colorMode, setColorMode] = useColorMode();
  const [items, setItems] = useState(MockDocument);
  const [filterValue, setFilterValue] = useState("");
  const [filterdList, setfilterdList] = useState(MockDocument);
  const [chartElemet, setChartElemet] = useState(["name", "age", "money"]);
  const [checkedState, setCheckedState] = useState("");
  const [FileDetail, setFileDetail] = useState(false);
  const [TableDetail, setTableDetail] = useState(false);
  const [errorData, setErrorData] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  useEffect(() => {
    items.length > 0 &&
      setCheckedState(Array(Object.keys(items[0]).length).fill(false));
  }, [items]);

  /////////////////////////drag and drop file upload/////////////////////////////
  const onDrop = useCallback((acceptedFiles) => {
    readExcel(acceptedFiles[0]);
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
  ///////////////Read file and convert to json format/////////////////////////////
  const readExcel = (file) => {
    if (!file || file.length === 0 || file === undefined) {
      return;
    }
    // console.log(typeof file);
    var resultFile = {};
    const name = file.name;
    const lastDot = name.lastIndexOf(".");
    const fileName = name.substring(0, lastDot);
    const ext = name.substring(lastDot + 1);
    // console.log(`this is the ${ext}`);
    // console.dir(fileName);
    // Reading JSON from input
    if (ext === "json") {
      setErrMessage("");
      const fileReader = new FileReader();
      fileReader.readAsText(file, "UTF-8");
      fileReader.onload = (e) => {
        const result = JSON.parse(e.target.result);
        if (!result.length) {
          setErrorData("**Not valid JSON file!**");
          setfilterdList([]);
          return;
        }
        try {
          setChartElemet([]);
          setErrorData(null);
          setItems(result);
          setfilterdList(result);
        } catch (e) {
          setErrorData("**Not valid JSON file!**");
        }
      };
    } else if (
      [
        "doc",
        "docm",
        "docx",
        "dot",
        "dotm",
        "dotx",
        ".odt",
        "pages",
        "rtf",
        "tex",
        "txt",
        "wpd",
        "wps",
      ].includes(ext)
    ) {
      setErrMessage("Text document file is not supported");
    } else if (
      [
        "jpg",
        "jpeg",
        "png",
        "gif",
        "bmp",
        "svg",
        "tif",
        "tiff",
        "webp",
      ].includes(ext)
    ) {
      setErrMessage("Image file is not supported");
    } else if (ext === "pdf") {
      setErrMessage("Pdf file is not supported");
    } else {
      setErrMessage("");
      resultFile = file; // Reading all Other formates as well
      const promise = new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(resultFile);

        fileReader.onload = (e) => {
          const bufferArray = e.target.result;
          const wb = XLSX.read(bufferArray, { type: "buffer" });
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          const data = XLSX.utils.sheet_to_json(ws);
          resolve(data);
        };
        fileReader.onerror = (errorData) => {
          reject(errorData);
        };
      });
      promise.then((d) => {
        setItems(d);
        setErrorData(null);
        setfilterdList(d);
        setChartElemet([]);
      });
    }
  };

  // chekbox add or remove item check if its more than 3 check this https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/

  const checkHandler = (e, position, item) => {
    // console.log(checkedState[position]);
    if (checkedState[position] === false) {
      if (checkedState.filter(Boolean).length < 3) {
        const updatedCheckedState = checkedState.map((chItem, index) => {
          return position === index ? !chItem : chItem;
        });
        setCheckedState(updatedCheckedState);
        setChartElemet([...chartElemet, item]);
      } else {
        alert(
          `No More than 3 Item for showing on chart 
          --------------------------------------
            1- X-axis
            2- Y-axis
            3- Items
          `
        );
      }
    } else {
      const updatedCheckedState = checkedState.map((chItem, index) => {
        return position === index ? !chItem : chItem;
      });
      setCheckedState(updatedCheckedState);
      setChartElemet(chartElemet.filter((val) => val !== item));
    }
  };

  const filterHandler = (e) => {
    const filterWord = e.target.value;

    try {
      if (filterWord !== "" && items.length > 0) {
        // console.log(items);
        const newlist = items.filter((nlist) => {
          return Object.values(nlist)
            .toString()
            .toLowerCase()
            .includes(filterWord.toString().toLowerCase());
        });
        setfilterdList(newlist);
      } else {
        setfilterdList(items);
      }
      setFilterValue(filterWord);
    } catch (error) {
      alert("Something went wrong with Search " + error);
    }
  };

  // json download

  const downloadFile = ({ data, fileName, fileType }) => {
    // Create a blob with the data we want to download as a file
    const blob = new Blob([data], { type: fileType });
    // Create an anchor element and dispatch a click event on it
    // to trigger a download
    const a = document.createElement("a");
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };

  const exportToJson = (e) => {
    console.log("save json");
    e.preventDefault();
    downloadFile({
      data: JSON.stringify(filterdList),
      fileName: "users.json",
      fileType: "text/json",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Head>
        <title>Documents Viewer / Converter</title>
        <meta
          name="description"
          content="Open ,read and Convert any Microsoft Excel file, all formats supported by Microsoft Office."
        />
        <meta
          name="description"
          content="Open ,read and Convert any .xlsx,.xlsm,.xlsb,.xls,xlw,.xlr,.csv,.json,doc,.docx,.xml"
        />
      </Head>

      <svg
        className="progress-icon"
        viewBox="0 0 60 60"
        style={{ maxWidth: "80px" }}
      >
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="white"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1, // Reverse direction of line animation
            maxWidth: "80px",
          }}
        />
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="white"
          d="M14,26 L 22,33 L 35,16"
          initial={false}
          strokeDasharray="0 1"
          animate={{ pathLength: isComplete ? 1 : 0 }}
        />
      </svg>

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
            <h1>Documents Viewer Converter</h1>
            <Text
              sx={{
                fontSize: [0, 1],
                fontWeight: "bold",
                display: "block",
                whiteSpace: "pre-line",
                wordBreak: "break-word",
              }}
            >
              Open ,read and Convert any Microsoft Excel file, all formats
              supported by Microsoft Office.
            </Text>
          </Box>
          <Box></Box>
        </Grid>

        <BackGroundImage />
        <hr />
        <Grid columns={[1, 1, "2fr 2fr"]} gap={2} sx={{ minHeight: "" }}>
          <Box>
            <Card
              sx={{
                color: "primary",
                minHeight: ["10rem", "32rem"],
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {filterdList && filterdList.length > 0 ? (
                <InventoryCHart data={filterdList} items={chartElemet} />
              ) : (
                <>
                  <h1 className="title">Document Viewer / Converter</h1>
                  <img
                    alt="stock"
                    src={Svgimage}
                    style={{ width: "40%", marginLeft: "2rem" }}
                  />
                </>
              )}
            </Card>
          </Box>
          <Box>
            <Card sx={{ minHeight: "32rem" }}>
              <Grid columns={[1, "1fr"]} gap={2} sx={{ minHeight: "" }}>
                <Box>
                  <div {...getRootProps({ style })}>
                    <input {...getInputProps()} />
                    <p style={{ wordBreak: "break-word" }}>
                      Drag `&apos;`n`&apos;` drop some files here, or click to
                      select files
                      {errMessage && <p sx={{ color: "red" }}> {errMessage}</p>}
                    </p>
                    <p style={{ wordBreak: "break-word" }}>
                      .xlsx,.xlsm ,.xlsb ,.xls ,.xlw ,.xlr ,.csv ,.json ,.doc
                      ,.docx ,.xml
                    </p>
                  </div>
                </Box>
                <Box>
                  {filterdList && (
                    <div>
                      <br />
                      {items.length > 0 && (
                        <small>
                          {filterdList.length} &nbsp;Records Show on chart
                        </small>
                      )}
                    </div>
                  )}

                  <input
                    className="MyDropdown"
                    type="text"
                    placeholder="search..."
                    value={filterValue ?? ""}
                    onChange={(e) => filterHandler(e)}
                  />
                  {chartElemet && (
                    <>
                      {
                        <ul
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <li
                            data-for="main"
                            data-tip="Item to show on chart <br/> it should be string to make sense "
                          >
                            1-Items ➡️ {chartElemet[0]}
                          </li>
                          <li
                            data-for="main"
                            data-tip="X-axis to show on chart <br/> it should be number to make sense"
                          >
                            2-X-axis ➡️ {chartElemet[1]}
                          </li>
                          <li
                            data-for="main"
                            data-tip="Y-axis to show on chart <br/> it should be number to make sense"
                          >
                            3-Y-axis ➡️ {chartElemet[2]}
                          </li>
                        </ul>
                      }

                      <Grid
                        columns={[2, null, 4]}
                        gap={2}
                        sx={{
                          justifyContent: "space-evenly",
                        }}
                      >
                        <ContainerSmall>
                          <AnchorLink
                            href="#File_View"
                            offset="100"
                            onClick={() => {
                              setFileDetail(true);
                              setTableDetail(false);
                            }}
                            style={{
                              all: "unset",
                            }}
                          >
                            File version
                          </AnchorLink>
                        </ContainerSmall>
                        <ContainerSmall>
                          <AnchorLink
                            href="#Top_Page"
                            offset="100"
                            onClick={() => {
                              setFileDetail(false);
                              setTableDetail(true);
                            }}
                            style={{
                              all: "unset",
                            }}
                          >
                            Table version
                          </AnchorLink>
                        </ContainerSmall>
                        <ContainerSmall>
                          <button
                            style={{
                              all: "unset",
                            }}
                            type="button"
                            onClick={exportToJson}
                          >
                            export Json
                          </button>
                        </ContainerSmall>
                        <ContainerSmall>
                          <CsvDownload
                            data={filterdList}
                            style={{
                              all: "unset",
                            }}
                            type="button"
                          >
                            export Csv
                          </CsvDownload>
                        </ContainerSmall>
                      </Grid>
                    </>
                  )}
                </Box>
              </Grid>

              {errorData && <div style={{ color: "red" }}>{errorData}</div>}
            </Card>
          </Box>
        </Grid>

        <hr />

        <section id="Top_Page"></section>
        <Card>
          <details id="DetailTable" open={TableDetail}>
            <summary>Table Preview</summary>
            <table className="userTable" rules="all">
              <thead>
                <tr>
                  {filterdList.length > 0 ? (
                    Object.keys(filterdList[0]).map((item, index) => (
                      <th scope="col" key={index} className="tg-yuap">
                        {item}
                        &nbsp;
                        <input
                          type="checkbox"
                          value={item ?? ""}
                          name={item}
                          checked={checkedState[index]}
                          id={`custom-checkbox-${index}`}
                          onChange={(e) => {
                            checkHandler(e, index, item);
                          }}
                        />
                      </th>
                    ))
                  ) : (
                    <th scope="col"></th>
                  )}
                </tr>
              </thead>
              <tbody>
                {/* <rowsinfo /> */}

                {items &&
                  filterdList &&
                  filterdList.filter(Boolean).map((d) => (
                    <tr key={d.id}>
                      {d &&
                        Object.entries(d).map((item) => (
                          <td data-label={item[0]} scope="col" key={d.index}>
                            {item[1]}
                          </td>
                        ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </details>
        </Card>

        {/* file view  */}

        <section id="File_View"></section>
        <Card>
          <section id="File_View"></section>
          <details open={FileDetail}>
            <summary> File preview {FileDetail}</summary>
            <JsonPrettierTextarea
              prettyjson={filterdList}
              preBcl={
                colorMode === "light" ? "rgba(10, 10, 10,0.8)" : "lightgray"
              }
              stringCl="green"
              numberCl="darkorange"
              booleanCl="blue"
              nullCl="magenta"
              keyCl="red"
              string_font_size="1rem"
              number_font_size="1rem"
              boolean_font_size="1rem"
              null_font_size="1rem"
              key_font_size="1.2rem"
              borderRadius="10px"
            />
          </details>
        </Card>
        {/* file view  */}
        <AnchorLink href="#Top_Page" offset="150" className="Top_key">
          Top
          <br />
          <Image src={TopPage} alt="TopPage" width={20} height={20} />
        </AnchorLink>
      </Card>
      {/* <ReactTooltip
        id="main"
        multiline={true}
        place="left"
        type="info"
        effect="float"
        className="customeTheme"
        delayHide={300}
      /> */}
    </motion.div>
  );
};

export default DocumentView;
