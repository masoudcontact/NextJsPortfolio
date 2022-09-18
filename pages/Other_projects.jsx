import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { Card, Box, Grid } from "theme-ui";
import ChromeExtension from "./OtherProjects/Extensions/ChromeExtension";
import JsonPretty from "./OtherProjects/Npm/JsonPretty";
import SkillRadar from "./OtherProjects/Npm/SkillRadar";
import ProgressBar from "./OtherProjects/Npm/ProgressBar";
import ListImage from "./OtherProjects/ListImage";
import GradianMaker from "../lib/GradiaentMaker/Gradient";
import BackGroundImage from "../lib/BackGroundImage";

const OtherProjects = () => {
  const backgroundImage = "https://picsum.photos/seed/picsum/200/300";
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
        <BackGroundImage />
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
          <Box>
            <ListImage />
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
