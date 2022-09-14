import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Card, Grid, Box, Flex, Text } from "theme-ui";
import pdficon from "../public/Images/PDF.png";
import Gform from "../public/Images/Gform.png";
import Skills from "../lib/Skill/Skill";
import { motion } from "framer-motion";
import Image from "next/image";
import { transparentize } from "@theme-ui/color";
import ButtonMn, { ButtonMnLong } from "../lib/Button/ButtonMn";
import backgroundImage from "../public/Images/documents.webp";

const About = () => {
  const initialURL =
    "https://docs.google.com/forms/d/e/1FAIpQLScVrRWGMdozZow7oF1y0aGDZQu_lLsgrtN2ZRuxkHkAUsC0HA/viewform?embedded=true";
  const [urlSrc, seturlSrc] = useState(initialURL);
  const ResumeFile =
    "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397104&authkey=AA1uxVivZIR3duU&em=2";

  const allCertificates = [
    {
      React_Web_Developer:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397105&authkey=AAPFt0zLCz42hGE&em=2",
    },
    {
      Java_Web_Developer_NanoDegree:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2136440&authkey=ABNpSdn-QNs6XIg&em=2",
    },
    {
      SQL_Server_2019_Essential_1:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2130513&authkey=APd1Fe3Lcx_OiCc&em=2",
    },
    {
      SQL_Server_2019_Essential_2:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2130512&authkey=ADp3j8qThTsxKq4&em=2",
    },
    {
      Google_Analytics:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2138218&authkey=AHibj4epIWsLs4o&em=2",
    },
    {
      Power_BI_Data_Modeling_with_DAX:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2131449&authkey=ABPNdzZ6ACFZtfc&em=2",
    },
    {
      Analyzing_and_Visualizing_Power_BI:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2111466&authkey=ANbywV0XKnRcT6E&em=2",
    },
    {
      Data_Science__R_Basics:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2128735&authkey=AE5AoFaVNESSQ6Y&em=2",
    },
    {
      Excel_for_Accountants:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2131451&authkey=ANImj8gtXIbtrNQ&em=2",
    },
    {
      How_Charts_Awesome:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2129099&authkey=ALTAnsz9mT6svQ0&em=2",
    },
    {
      Spring_Boot_Quick_Start:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2136439&authkey=AK5GVpVlvNMlfqc&em=2",
    },
    {
      Storytelling_with_Data:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2128760&authkey=APvgyJXhp0MBw9U&em=2",
    },
    {
      Technical_Support_Fundamentals:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2132887&authkey=ANvmtoHbhqLcb1M&em=2",
    },
    {
      Financial_Statements_Performance:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2132757&authkey=AJXMTI6tvMJoXaM&em=2",
    },
    {
      Financial_Statements_Position:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2131919&authkey=AE9Y_-9BEA-KtrA&em=2",
    },
    {
      Unlock_Excel_VBA_and_Excel_Macro:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2128751&authkey=AGq4Y_3xkaKmN5g&em=2",
    },
    {
      Cryptocurrency_Trading_2021:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2136559&authkey=AKvrxkgYKRQTWkM&em=2",
    },
    {
      QuickBooks_Essential:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2128761&authkey=ADwSJ4UdG5rI4wM&em=2",
    },
    {
      Modern_React_Redux:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397112&authkey=ALUpDIIHbEHIXCw&em=2",
    },
    {
      Components_library_Storybook:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%211913682&authkey=AJ-IBl2PZXWdvT4&em=2",
    },
    {
      Mongodb_Essential:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21398747&authkey=AB4jxR9iITzmWms&em=2",
    },
  ];

  const IFrame = () => {
    return (
      <iframe
        title="Document Review"
        src={urlSrc}
        width="100%"
        height="700"
        frameBorder="0"
        scrolling="yes"
        name="pageshow"
      ></iframe>
    );
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Head>
        <title>Masoud Naji</title>
        <meta name="description" content="Masoud Naji Frontend developer" />
      </Head>

      <Card
        sx={{
          color: "primary",
          display: "flex",
          flexDirection: "column",
          variant: "layout.root",
        }}
      >
        <Grid columns={[1]}>
          <Box>
            <h1>About Me</h1>
            <Text
              sx={{
                fontSize: [0, 1],
                fontWeight: "bold",
                display: "block",
                whiteSpace: "pre-line",
                wordBreak: "break-word",
              }}
            >
              Overall 8+ years of Information Technology experience in Web
              design and development of ERP application.
              <br />
              Overall 4+ years of extensive experience as a Front-End UI
              Developer with solid understanding of database designing,
              <br /> development, and installation of different modules.
              <br /> Extensive experience in Designing professional UI web
              applications using front-end technologies like HTML5, CSS3,
              JavaScript, reactJS, XML, DHTML, XHTML, JSON
              <br />
              Excellent Understanding of Document Object Model (DOM) and DOM
              Functions.
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

        <Card
          sx={{
            minHeight: ["5rem"],
            display: "flex",
            alignItems: "revert",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: transparentize("primary", 0.45),
            borderRadius: ".6rem",
          }}
        >
          <Grid
            columns={[1, "1fr 2fr"]}
            gap={2}
            sx={{
              alignItems: "center",
            }}
          >
            <Box>
              <strong>
                <a href="mailto:Masoud.Naji@outlook.com?subject=Resume from webSite">
                  Masoud.Naji@outlook.com
                </a>
                <br />
                <a href="https://www.linkedin.com/in/masoud-naji/">linkedin</a>
                <br />
                California - Los Angeles
                <br />
                <a
                  href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397104&authkey=AA1uxVivZIR3duU&em=2"
                  download
                >
                  <br />
                  <ButtonMnLong>Download PDF Resume&nbsp;&nbsp;</ButtonMnLong>
                </a>
                <a
                  href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397100&authkey=ABpz3ESHdwNSzEQ&em=2"
                  download
                >
                  <br />
                  <ButtonMnLong>Download Word Resume</ButtonMnLong>
                </a>
                <br />
                <a
                  href="https://buymeacoffee.com/maxnajiO"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ButtonMnLong> Buy me a Coffee ☕</ButtonMnLong>
                </a>
              </strong>
            </Box>
            <Box>
              <Skills />
            </Box>
          </Grid>
        </Card>
      </Card>
      <hr />
      <Card
        sx={{
          minHeight: ["5rem"],
          display: "flex",
          alignItems: "revert",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: transparentize("primary", 0.45),
          borderRadius: ".6rem",
        }}
      >
        <IFrame />
      </Card>

      <hr />
      <Flex sx={{ justifyContent: "center" }}>
        <ButtonMn
          onClick={() => seturlSrc(ResumeFile)}
          style={{ width: "20rem", textAlign: "left" }}
          image={pdficon}
        >
          &nbsp; View Resume
        </ButtonMn>
        <ButtonMn
          onClick={() => seturlSrc(initialURL)}
          style={{ width: "20rem", textAlign: "left" }}
          image={Gform}
        >
          &nbsp; Contact Form
        </ButtonMn>
      </Flex>

      <hr />
      <details style={{ color: "#CCC" }}>
        <summary className="infotext">- View Other Certificates</summary>
        {allCertificates.map((urls) => (
          <ButtonMnLong
            key={Object.values(urls)}
            onClick={() => seturlSrc(Object.values(urls))}
            image={pdficon}
            widthPrs="20rem"
          >
            {Object.keys(urls)}
          </ButtonMnLong>
        ))}
      </details>
      <hr />
    </motion.div>
  );
};

export default About;
