import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { Card, Box, Grid } from "theme-ui";
import ChromeExtension from "./Extensions/ChromeExtension";
import JsonPretty from "./Npm/JsonPretty";
import SkillRadar from "./Npm/SkillRadar";
import ProgressBar from "./Npm/ProgressBar";
import backgroundImage from "../public/Images/documents.webp";

const OtherProjects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Head>
        <title>Other Projects</title>
        <meta name="description" content="Other small Projects" />
        <meta
          name="description"
          content="Chrome Extension to save all open tabs"
        />
        <meta name="description" content="Npn JsonPretty" />
        <meta name="description" content="Npn SkillRadar Chart" />
        <meta name="description" content="Npn ProgressBar Chart" />
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
            <h1>Other Projects</h1>
            <h4></h4>
          </Box>
          <Box></Box>
        </Grid>

        <Card
          style={{
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
        <Grid columns={[1, "1fr"]} gap={2} sx={{ minHeight: "" }}>
          <Box>
            <ChromeExtension />
          </Box>
          <Box>
            <JsonPretty />
          </Box>
          <Box>
            <SkillRadar />
          </Box>
          <Box>
            <ProgressBar />
          </Box>
        </Grid>
      </Card>
    </motion.div>
  );
};

export default OtherProjects;

{
  /* <Card className={`${classes.input} ${classes.topchartdetail}`}>
    <h3 className={tablestyle.title}>Simple Paint </h3>
    <div className={cardStyle.regextexandhelp}>
      <div className={cardStyle.tableContainer}>
        <SimplePaint />
      </div>
      <div className={classes.OtherText}>
    
      </div>
    </div>
  </Card> */
}
