import React from "react";
import ExtensionImage from "../../public/Images/ChromeEXTScreenshot.png";
import Gist from "react-gist";
import Image from "next/image";
import { Card, Box, Grid } from "theme-ui";

export default function ChromeExtension() {
  return (
    <Card>
      <Grid columns={[1, "2fr 1fr "]} gap={2} sx={{ alignItems: "start" }}>
        <Box>
          <h3 className="title">Morning Click Chrome Extension </h3> This is a
          simple Chrome Extension to Save then open all your Saved Tabs . all
          tabs are stored on local storage and available on your hand
          <p>
            <ul>
              <li>input: save what you enterd on input box</li>
              <li>Save Tab: Save the current tab</li>
              <li>All Tabs: save all open Tabs </li>
              <li>Reset All: clear all Data</li>
              <li>Open All: Open All saved tabs</li>
              <li>Theme: change the theme</li>
              <li>Save Json: All open tabs save as a json file</li>
              <li>
                Save CMD: All open tabs save as a stand alone executable cmd
                file
              </li>
            </ul>
          </p>
          <Box
            sx={{
              maxHeight: "30rem",
              overflowY: "scroll ",
              overflowX: "hidden",
            }}
          >
            <Gist id="c206a322c55cb9944913f675b926e0ed"></Gist>
          </Box>
        </Box>
        <Box sx={{ gridArea: 1 / 4 }}>
          <Image
            src={ExtensionImage}
            alt="extentionImage"
            sx={{ maxWidth: "100%", borderRadius: "0.5rem" }}
          />
          <br />
          Link:
          <a href="https://github.com/masoud-naji/Morning-Click-Chrome-Extension.git">
            Github
          </a>
          <br />
          Download:
          <a href="https://github.com/masoud-naji/Morning-Click-Chrome-Extension/archive/refs/heads/master.zip">
            Zip
          </a>
        </Box>
      </Grid>
    </Card>
  );
}
