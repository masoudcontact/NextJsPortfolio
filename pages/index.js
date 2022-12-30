/** @jsxImportSource theme-ui */

import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import cryptocurrency from "../public/Images/cryptocurrency.png";
import ImageEdit from "../public/Images/ImageEdit.png";
import Npm from "../public/Images/npm.png";
import { Card, Grid, Box, Flex, Container } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";
import { RadarChart } from "skills-radar-chart";
import Skills from "../lib/Skill/SkillsArray.json";

function Home({ StartScrollSpeed, EndScrollSpeed }) {
  const StScrollSPD = StartScrollSpeed ? StartScrollSpeed : 1;
  const EndScrollSPD = EndScrollSpeed ? EndScrollSpeed : 1.1;
  const { scrollYProgress } = useScroll();
  const MyPathLength = useTransform(
    scrollYProgress,
    [0, StScrollSPD],
    [0, EndScrollSPD]
  );

  return (
    <Grid
      columns={[1, "2fr 1fr"]}
      sx={{ backgroundColor: "background", color: "primary" }}
    >
      <Head>
        <title>Masoud Naji Portfolio webSite</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Masoud Naji Portfolio, FrontEnd Developer"
        />
      </Head>

      <Container>
        <Box>
          <h1 sx={{ marginBottom: "3rem" }}>FrontEnd Web Developer</h1>

          <ol>
            <li>CryptoCurrency 100 first list and updates</li>
            <ol>
              <li> duration</li>
              <li> Table </li>
              <li> 24 hour changes </li>
            </ol>
            <li>Details about the specified Coin</li>
            <ol>
              <li> Chart </li>
              <li> Table </li>
              <li> Community Score / Developer Score /Liquidity Score</li>
              <li>
                Official WebSites /Hashing Algorithm /Block Time In Minutes
              </li>
            </ol>
            <li>Compare two coin in detail</li>
            <ol>
              <li> Chart compare</li>
              <li> duration compare</li>
              <li> Market Cap Compare</li>
              <li>
                The price of one currency compared to the price of other
                currencies is set by market cap
              </li>
            </ol>
            <li>
              Some Fun Facts around the low and high prices regardless of
              priority.
            </li>
            <ol>
              <li>Highest </li>
              <li>Lowest </li>
              <li>Difference </li>
              <li>Difference on sort sequence of our choice </li>
              <li>Money approximately could make </li>
            </ol>
            <li>Twitte Splitter</li>
            <li>Document Viewer</li>
            <li>Regex Test</li>
            <li>Compare Text</li>
            <li>Compare Image</li>
            <li>Other Projects</li>
          </ol>
        </Box>

        <Box
          sx={{
            minWidth: ["100%", "100%", "100%", "120vw"],
            position: "relative",
            left: "50%",
            marginLeft: "-50vw",
            borderTop: `0.6rem solid`,
            borderBottom: `0.6rem solid`,
            borderColor: lighten("secondary", 0.55),
            background: darken("primary", 0.55),
            color: lighten("secondary", 0.55),
            zIndex: "1",
            marginTop: "2rem",
            marginBottom: "2rem",
            padding: "1rem 0",
          }}
        >
          <Grid
            columns={[1, 1, 1, "1fr 1fr"]}
            sx={{
              justifyItems: ["normal", "center"],
              alignItems: "center",
              justifyContent: "center",
              gap: ["2rem", "0"],
            }}
          >
            <div
              sx={{
                display: ["none", "none", "none", "block"],
                background: "secondary",
                color: darken("primary", 0.5),
                width: ["100vw", "40%"],
                height: ["120%", "100%"],
                padding: "1rem 4rem",
                borderRadius: "1rem",
                position: "relative",
                clipPath: [
                  "polygon(0% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%)",
                  "polygon(0% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%)",
                  "polygon(0% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%)",
                  // "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
                  "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
                ],
              }}
            >
              <h3 className="h3title90deg"> Libraries & Frameworks</h3>
              <br />
              <ol
                sx={{
                  fontSize: "0.8rem",
                }}
              >
                <li>Next.js</li>
                <li>React.js</li>
                <li>Bootstrap</li>
                <li>Theme-ui</li>
                <li>React-bootstrap</li>
                <li>JSON-pretty-textarea</li>
                <li>Skills-Radar-Chart</li>
                <li>ProgressBar-Chart</li>
                <li> react-confirm-alert</li>
                <li> bootstrap react-bootstrap</li>
                <li> lodash</li>
                <li> xlsx</li>
                <li> react-chartjs-2 chart.js</li>
                <li> react-router</li>
                <li> react-router-dom</li>
                <li> react-select</li>
                <li> html-to-text</li>
                <li> react-load-script</li>
                <li> react-scripts</li>
                <li> react-input-emoji</li>
                <li> browser-image-compression</li>
                <li> json-as-xlsx</li>
                <li> react-lorem-ipsum</li>
                <li> react-alice-carousel</li>
                <li> sass node-sass</li>
                <li> dotenv</li>
                <li> react-diff-viewer</li>
                <li> save rss-parser</li>
                <li> react-highlight-within-textarea</li>
              </ol>
            </div>
            <div
              sx={{
                width: "50vh ,100%",
                maxWidth: "50vh",
                minWidth: "48vh",
              }}
            >
              <RadarChart
                rawData={Skills}
                skillPercentage="skillPercentage"
                skillName="skillName"
                label="Skills"
                backgroundColor="rgba(348, 0, 0, .4)"
                borderColor="rgba(43, 43, 43, 1)"
                borderWidth="2"
                pointBackgroundColor="transparent"
                pointBorderColor="white"
                pointHoverBackgroundColor="white"
                pointHoverBorderColor="rgb(54, 162, 235)"
                borderDash={[2, 5]}
                borderDashOffset="8"
                angleLines="rgba(247, 98, 98,1);"
                grid="rgba(255,255,255,.9)"
                pointLabels="white"
                ticks="red"
                ShowLegend={false}
              />
            </div>
          </Grid>
        </Box>

        <Box>
          <h3>Some Sources to start</h3>
          <br />
          <br />
          <ul style={{ textTransform: "uppercase" }}>
            <li>
              <a href="https://reactjs.org/docs/getting-started.html">
                Getting Started
              </a>
            </li>
            <li>
              <a href="https://reactresources.com/">REACT RESOURCES</a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources">
                developer.mozilla
              </a>
            </li>
            <li>
              <a href="https://dev.to/hulyakarakaya/ultimate-react-resources-obl">
                Ultimate React Resources
              </a>
            </li>
            <li>
              <a href="https://x-team.com/blog/essential-react-resources/">
                ESSENTIAL RESOURCES
              </a>
            </li>
            <li>
              <a href="https://reactforbeginners.com/">React for beginners</a>
            </li>
            <li>
              <a href="https://advancedreact.com/">Advanced react</a>
            </li>
            <li>
              <a href="https://linguinecode.com/">Linguine code</a>
            </li>
            <li>
              <a href="https://www.geeksforgeeks.org/">geeks for geeks</a>
            </li>
          </ul>
        </Box>

        <Box>
          <Grid
            columns={[1, null, 3]}
            gap={2}
            sx={{
              justifyContent: ["center", "space-between"],
              gridAutoColumns: "minmax(0, 1fr)",
              "> li:nth-child(2)": {
                div: {
                  padding: ["1rem 0.4rem", "2rem 1rem"],
                },
              },
            }}
          >
            <li>
              <div className="testimonialContainer">
                <ol>
                  <li>Cryptocurrency</li>
                  <li>Details</li>
                  <li>Compare</li>
                  <li>Crypto Fun Facts</li>
                </ol>

                <div className="ImageContainer">
                  <Image src={cryptocurrency} width="200" height="200"></Image>
                </div>
              </div>
            </li>
            <li>
              <div className="testimonialContainer">
                <ol>
                  <li> Twitte Splitter</li>
                  <li> Document Viewer</li>
                  <li> Regex Test</li>
                  <li> Compare Text</li>
                  <li> Compare Image</li>
                  {/* <li> README.me Creator</li> */}
                </ol>
                <div className="ImageContainer">
                  <Image src={ImageEdit} width="200" height="200"></Image>
                </div>
              </div>
            </li>
            <li>
              <div className="testimonialContainer">
                <ol>
                  <li> Morning Click Extension</li>
                  <li>JSON-pretty-textarea</li>
                  <li> ProgressBar-Chart</li>
                </ol>
                <div className="ImageContainer">
                  <Image src={Npm} width="200" height="200"></Image>
                </div>
              </div>
            </li>
          </Grid>
        </Box>

        <Box>
          <ul>
            <li style={{ marginTop: "8rem" }}>
              <strong>Overall 8+</strong>&nbsp;years of Information Technology
              experience in Web design and development of ERP application.
            </li>
            <li>
              <strong>Overall 4+ years</strong>&nbsp;of extensive experience as
              a<strong> Front-End UI Developer</strong>&nbsp;with solid
              understanding of database designing, development, and installation
              of different modules.
            </li>
            <li>
              Extensive experience in
              <strong> Designing professional UI </strong>web applications using
              front-end technologies like HTML5, CSS3, JavaScript, reactJS, XML,
              DHTML, XHTML, JSON
            </li>
            <li>
              Excellent Understanding of
              <strong> Document Object Model (DOM) </strong>and
              <strong> DOM Functions.</strong>
            </li>
            <li>
              Excellent experience in developing web pages complying with
              <strong> W3C web standards. </strong>
            </li>
            <li>
              Extensive experiences in
              <strong>
                UI Development, Web UI analysis, Web design, coding, testing,
                implementation
              </strong>
              and Support working with various projects.
            </li>
            <li>
              Professional in creating Templates, Mockups and Prototypes, Web
              Interfaces, Layouts and Flow of Future Pages.
            </li>
            <li>
              Experience in designing <strong>UI</strong>
              <strong>patterns</strong>and
              <strong> UI applications</strong>
              with the help of Adobe products like
              <strong> Adobe Photoshop, Adobe XD and Adobe Illustrator.</strong>
            </li>
            <li>
              Expertise in creating
              <strong>
                Templates, Web Interfaces, Layouts, and Flow of Future Pages.
              </strong>
            </li>
            <li>
              Optimized the page<strong> load time</strong>for the pages that
              had heavy traffic and improvised those pages using CSS3
            </li>
            <li>
              Experience in Version Control tools like <strong>GIT</strong>
            </li>
            <li>
              Experience in using Mgmt. Software like
              <strong>
                JIRA Agile, Scrum works and bug tracking system - Asana, Slack.
              </strong>
            </li>
            <li>
              Experience on various Charting/UI tools like
              <strong> High Charts, Google API</strong>
            </li>
            <li>
              Experience on monitoring, and analyzing machine-generated data via
              a Web-style interface with <strong>Splunk</strong>
            </li>
            <li>
              Experience with Object Oriented Concepts,
              <strong> Object Oriented</strong>
              JavaScript, Object Oriented Design, and Implementation.
            </li>
            <li>
              Experience in quality assurance and unit testing, acceptance, and
              integration testing.
            </li>
            <li>
              Involved in working the Google <strong>Firebase</strong>
              ;and
              <strong>IBM watson </strong>
            </li>
            <li>
              Experienced in using Video Sharing and video subscription service
              with a Video API like YouTube and Vimeo.
            </li>
            <li>
              Skilled at analyzing and solving browser compatibility challenges
              and possesses ability to maintain consistency and well commented
              HTML and CSS markup.
            </li>
            <li>
              Experience of working on Data Modeling applications like
              <strong>
                Excel, Power Tool, Power Bi, Tableau Software and Dax&nbsp;
              </strong>
            </li>
          </ul>
        </Box>

        <div className="SVGWrapper">
          <motion.svg
            width="616"
            height="1024"
            viewBox="0 0 616 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="LineSVG"
          >
            <motion.path
              d="M2 2C148.667 61.1667 409.7 217.6 280.5 370C119 560.5 9 534.5 253 615.5C497 696.5 763 781 506 804C249 827 230.5 736 288 715.5C345.5 695 416 693.5 444.5 743.5C473 793.5 495 808.5 361.5 849.5C228 890.5 107 742 85.5 889C68.3 1006.6 148.333 1027.33 190.5 1023"
              stroke="gray"
              strokeWidth="10"
              style={{
                pathLength: MyPathLength,
              }}
            />
          </motion.svg>
        </div>
      </Container>
    </Grid>
  );
}

export default Home;

<svg
  width="616"
  height="1024"
  viewBox="0 0 616 1024"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M2 2C148.667 61.1667 409.7 217.6 280.5 370C119 560.5 9 534.5 253 615.5C497 696.5 763 781 506 804C249 827 230.5 736 288 715.5C345.5 695 416 693.5 444.5 743.5C473 793.5 495 808.5 361.5 849.5C228 890.5 107 742 85.5 889C68.3 1006.6 148.333 1027.33 190.5 1023"
    stroke="black"
    strokeWidth="20"
  />
</svg>;
