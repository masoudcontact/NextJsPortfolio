import React from "react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Card, Grid, Box, Flex } from "theme-ui";
import InputEmoji from "react-input-emoji";
import LoremMaker from "../../lib/LoremMaker";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";
import ButtonMn, { ButtonMnColor } from "../../lib/Button/ButtonMn";
import useImageUploader from "../../lib/useImageUploader";
import TextareaAutosize from "react-textarea-autosize";

const Twittespl = () => {
  const [tweet, setTweet] = useState("Test Tweet");
  const [Stweet, setSTweet] = useState([]);
  const [endChar, setEndChar] = useState("");
  const [divDirection, setDivDirection] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [clipArtforshow, setClipArtforshow] = useState("");
  const [addCounter, setAddCounter] = useState(false);
  const [counterlenght, setCounterlenght] = useState("");
  const [waterMark, setWaterMark] = useState("");
  const [ColorWater, setColorWater] = useState("#ff0000");
  const [posWatermark, setposWatermark] = useState("");
  const [posverWatermark, setposverWatermark] = useState("");
  const [detailElement, setDetailElement] = useState(false);
  const [detailUpload, setDetailUpload] = useState(false);
  const { File, FilePath, dateFilePath, UploadForm } = useImageUploader();

  useEffect(() => {
    let Counter = "";
    if (addCounter) {
      Counter = counterlenght + 1;
    } else {
      Counter = 0;
    }
    let s = tweet.toString();
    const size = 280 - endChar.length - Counter;
    const regex = new RegExp(String.raw`\S.{1,${size - 2}}\S(?= |$)`, "g");
    let chunk = s.match(regex);
    chunk && setSTweet(chunk);
  }, [tweet, endChar, addCounter, File, ColorWater]);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }
  const handleCopyClick = (tweets, key, endChar) => {
    var Counter = "";
    if (addCounter) {
      Counter = +key + 1 + ".";
    } else {
      Counter = "";
    }
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(Counter + tweets + endChar)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        //linebelow just for show in page clipart is already fill and no need this usestate
        setClipArtforshow([Counter + tweets + endChar, key]);
        setCounterlenght(key.length);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setlorem = (newValue) => {
    console.log(newValue);
    setTweet(newValue);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
    >
      <Card
        sx={{
          color: "primary",
          display: "flex",
          flexDirection: "column",
          minHeight: "82vh",
          variant: "layout.root",
        }}
      >
        <Head>
          <title>Twitte Splitter</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content=" This tweet splitter will split a long tweet into multiple tweets
            automatically. You can split the tweet by time or by character."
          />
        </Head>
        <Grid columns={[2, "2fr 1fr"]} gap={2}>
          <Box>
            <h1>Twitte Splitter</h1>
            <h4>
              This tweet splitter will split a long tweet into multiple tweets
              automatically. You can split the tweet by time or by character.
            </h4>
          </Box>
          <Box></Box>
        </Grid>

        {/*------------------------------------------------------------ Clipborad {/*------------------------------------------------------------*/}

        <Card
          sx={{
            backgroundImage: `url('${File}')`,
            width: "100%",
            height: "10rem",
            borderRadius: ".6rem",
            margin: "1rem 0",
            padding: 0,
          }}
        >
          {clipArtforshow.length ? (
            <div
              dir={divDirection ? "ltr" : "rtl"}
              className="clipboardinsidetext"
            >
              <div
                style={{
                  position: "absolute",
                  color: `${ColorWater}`,
                  top: `${posverWatermark - 2}%`,
                  left: `${posWatermark}%`,
                  opacity: "0.5",
                  transform: "rotate(-45deg)",
                  whiteSpace: "break-spaces",
                }}
              >
                {waterMark}
              </div>
              <div className="insidecontent">{clipArtforshow[0]}</div>
            </div>
          ) : null}
        </Card>
        <hr />
        {/*------------------------------------------------------------ Lorem and Background {/*------------------------------------------------------------*/}
        <Grid columns={[1, "1fr"]}>
          <Box
            className="lorembox"
            sx={{ color: "#CCC", height: "fit-content" }}
          >
            <details
              style={{ color: "#CCC" }}
              open={detailElement}
              onToggle={(e) => setDetailElement(e.currentTarget.open)}
            >
              <summary>- Lorem Maker</summary>
              <div>
                <LoremMaker
                  onChange={setlorem}
                  openDetails={(e) => setDetailElement(e)}
                />
              </div>
            </details>
          </Box>
          <Box
            className="lorembox"
            style={{ color: "#CCC", height: "fit-content" }}
          >
            <details
              style={{ color: "#CCC" }}
              open={detailUpload}
              onToggle={(e) => setDetailUpload(e.currentTarget.open)}
            >
              <summary>- Background Uploader</summary>
              <div>{UploadForm}</div>
            </details>
          </Box>
        </Grid>
        <hr />
        {/*------------------------------------------------------------inputs ------------------------------------------------------------*/}
        <form dir={divDirection ? "ltr" : "rtl"}>
          <TextareaAutosize
            value={tweet}
            name="text"
            id="text"
            onChange={(e) => (
              setTweet(e.target.value),
              localStorage.setItem("tweet", JSON.stringify(e.target.value))
            )}
            placeholder="write your long tweet here"
            className="textareamain"
          ></TextareaAutosize>
          {/* Watermark */}
          {/*------------------------------------------------------------Next Indicator ---------------------------------------------------*/}
          <InputEmoji
            value={endChar}
            onChange={setEndChar}
            onEnter={setEndChar}
            placeholder="Write next indicator 20Chr Max like ⬇️,👇"
            maxLength={15}
          />
          <InputEmoji
            value={waterMark}
            onChange={setWaterMark}
            onEnter={setWaterMark}
            placeholder="WaterMark 50Chr Max , just for screenshot"
            maxLength={50}
          />

          {/*------------------------------------------------------------Watermark ----------------------------------------------------------*/}
          <br />
          <br />
          <hr />
        </form>

        <Card>
          <Grid
            gap={2}
            columns={[1, 3, 5]}
            sx={{
              paddingTop: "0",
              minHeight: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "flex-start",
              alignSelf: "flex-start",
            }}
          >
            <Box>
              <div className="watermatkchilds" style={{ marginTop: "10px" }}>
                ↔️ &nbsp;{posWatermark}&nbsp;
                <input
                  type="range"
                  min={1}
                  max={100}
                  step={1}
                  value={posWatermark}
                  onChange={(e) => (
                    setposWatermark(e.target.value),
                    localStorage.setItem(
                      "posWatermark",
                      JSON.stringify(e.target.value)
                    )
                  )}
                  className="rangeselector"
                  data-for="main"
                  data-tip="Change the WaterMark Position"
                />
                <input
                  type="range"
                  min={1}
                  max={100}
                  step={1}
                  value={posverWatermark}
                  onChange={(e) => (
                    setposverWatermark(e.target.value),
                    localStorage.setItem(
                      "posverWatermark",
                      JSON.stringify(e.target.value)
                    )
                  )}
                  style={{ transform: "rotate(90deg)" }}
                  className="rangeselector"
                  data-for="main"
                  data-tip="Change the WaterMark Position"
                />
                ↕️ &nbsp;{posverWatermark}
              </div>
            </Box>
            <Box>
              <ButtonMn
                onClick={(e) => {
                  setDivDirection(!divDirection), console.log("ltr clicked");
                }}
                data-for="main"
                data-tip="Change Direction <br /> (LTR/RTL)"
              >
                {divDirection ? "➡️" : "⬅️"} {divDirection ? "LTR" : "RTL"}
              </ButtonMn>
            </Box>
            <Box>
              <ButtonMn
                onClick={(e) => setAddCounter(!addCounter)}
                data-for="main"
                data-tip="Add Counter <br /> to tweets <br/> it will be like 1-tweet"
              >
                {!addCounter ? " Count  🔢 " : "NoCount 🔠 "}
              </ButtonMn>
            </Box>
            <Box>
              <ButtonMnColor
                waterMark={waterMark}
                ColorWater={ColorWater}
                onChange={(e) => setColorWater(e.target.value)}
              >
                watermark
              </ButtonMnColor>
            </Box>
            <Box>
              <ButtonMn
                className="watermatkchilds languagebtn"
                onClick={() =>
                  tweet !== ""
                    ? (setTweet(""),
                      setSTweet(""),
                      setWaterMark(""),
                      localStorage.setItem("tweet", JSON.stringify("")),
                      localStorage.setItem("posWatermark", JSON.stringify("")),
                      localStorage.setItem(
                        "posverWatermark",
                        JSON.stringify("")
                      ))
                    : setEndChar("")
                }
                data-for="main"
                data-tip="Clear everything <br/>"
              >
                Clear 🆑
              </ButtonMn>
            </Box>
          </Grid>
        </Card>
        <hr />
        <Card>
          <ul>
            {Stweet !== null && Stweet.length
              ? Object.entries(Stweet).map(([key, tweets]) => (
                  <li
                    key={tweets.index}
                    className="litweet"
                    style={
                      addCounter
                        ? { listStyleType: "none" }
                        : { listStyleType: "decimal" }
                    }
                    onClick={(e) => handleCopyClick(tweets, key, endChar)}
                  >
                    {addCounter ? +key + 1 + "." : ""}
                    {tweets}
                    {endChar}
                    <br />
                    <div
                      style={{
                        position: "absolute",
                        color: `${ColorWater}`,
                        top: `${posverWatermark}%`,
                        left: `${posWatermark}%`,
                        opacity: "0.5",
                        transform: "rotate(-45deg)",
                        whiteSpace: "break-spaces",
                      }}
                    >
                      {waterMark}
                    </div>
                    <ButtonMn
                      className="languagebtn"
                      onClick={(e) => {
                        handleCopyClick(tweets, key, endChar);
                      }}
                    >
                      <span>
                        ({tweets.length} Charecter)
                        {isCopied ? " Copied!" : " Copy"}
                      </span>
                    </ButtonMn>
                    <hr />
                  </li>
                ))
              : ""}
          </ul>
          <ReactTooltip
            id="main"
            multiline={true}
            place="bottom"
            type="info"
            effect="float"
            className="customeTheme"
            delayHide={800}
          />
        </Card>
      </Card>
    </motion.div>
  );
};

export default Twittespl;
