import React from "react";
import progressbar from "../../../public/Images/progressbar-chart.png";
import npmImage from "../../../public/Images/npm.png";
import Image from "next/image";
import { Card, Box, Grid } from "theme-ui";
import { ContainerSmallLongText } from "../../../lib/ContainerSmall/ContainerSmall";

export default function ProgressBar() {
  return (
    <Card>
      <Grid columns={[1, "2fr 1fr "]} gap={2} sx={{ alignItems: "start" }}>
        <Box>
          <h3>
            <Image src={npmImage} alt="npm Image" width="50" height="50" />
            ProgressBar-Chart
          </h3>
          install
          <ContainerSmallLongText>
            npm i progressbar-chart
          </ContainerSmallLongText>
          import
          <ContainerSmallLongText>
            import &#123; ProgressBar &#125; from &quot;progressbar-chart&quot;;
          </ContainerSmallLongText>
          use
          <ContainerSmallLongText>
            &lt; ProgressBar <br />
            <p style={{ marginLeft: "2rem" }}>
              Data=&#123;SkillsArray&#125;
              <br /> DataName=&quot;skillName&quot;
              <br /> DataPercentage=&quot;skillPercentage&quot;
              <br /> height=&quot;0.8rem&quot;
              <br /> borderRadius=&quot;0.8rem&quot;
              <br /> background=&quot;linear-gradient(to left,rgba(54, 162, 235,
              1),rgba(54, 162, 235, 0.2))&quot;
              <br /> boxShadow=&quot; 0 3px 3px -5px rgba(54, 162, 235, 0.8),0
              2px 5px rgba(54, 162, 235, 0.5)&quot;
              <br /> color=&quot;rgb(0, 0, 0)&quot;
            </p>
            &#47;&gt;
          </ContainerSmallLongText>
        </Box>
        <Box>
          <a href="https://www.npmjs.com/package/progressbar-chart">
            <Image
              src={progressbar}
              alt="json pretty sample"
              style={{
                margin: "0 1rem 0 0rem",
                width: "100%",
                borderRadius: "0.5rem",
              }}
            />
            npm Page
          </a>
        </Box>
      </Grid>
    </Card>
  );
}
