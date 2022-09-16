import React from "react";
import skillChart from "../../../public/Images/skills-radar-chart.png";
import npmImage from "../../../public/Images/npm.png";
import Image from "next/image";
import { Card, Box, Grid } from "theme-ui";
import { ContainerSmallLongText } from "../../../lib/ContainerSmall/ContainerSmall";

export default function SkillRadar() {
  return (
    <Card>
      <Grid columns={[1, "2fr 1fr "]} gap={2} sx={{ alignItems: "start" }}>
        <Box>
          {" "}
          <h3>
            <Image src={npmImage} alt="npm Image" width="50" height="50" />
            Skills-Radar-Chart
          </h3>
          install
          <ContainerSmallLongText>
            npm i skills-radar-chart
          </ContainerSmallLongText>
          import
          <ContainerSmallLongText>
            import &#123; RadarChart &#125; from &quot;skills-radar-chart&quot;;
          </ContainerSmallLongText>
          use
          <ContainerSmallLongText>
            &lt; RadarChart <br />
            <p style={{ marginLeft: "2rem" }}>
              rawData=&#123;SkillsArray&#125;
              <br />
              skillPercentage=&quot;skillPercentage&quot;
              <br />
              skillName=&quot;skillName&quot;
              <br />
              label=&quot;Skills&quot;
              <br />
              backgroundColor=&quot;rgba(255, 99, 132, 0.2)&quot;
              <br />
              borderColor=&#123;&#91;&quot;blue&quot;, &quot;red&quot;,
              &quot;green&quot;, &quot;yellow&quot; &#93;&#125;
              <br />
              borderWidth=&quot;5&quot;
              <br />
              pointBackgroundColor=&quot;rgb(54, 162, 235)&quot;
              <br />
              pointBorderColor=&#123;&#91;&quot;blue&quot;, &quot;red&quot;,
              &quot;green&quot;,&quot;yellow&quot; &#93;&#125;
              <br />
              pointHoverBackgroundColor=&quot;#fff&quot;
              <br />
              pointHoverBorderColor=&quot;rgb(54, 162, 235)&quot;
              <br />
              borderDash=&#123;&#91; 2 , 5 &#93;&#125;
              <br />
              borderDashOffset=&quot;8&quot;
              <br />
              angleLines=&quot;rgba(255, 99, 132, 0.2)&quot;
              <br />
              grid=&quot;rgba(255, 99, 132, 0.2)&quot;
              <br />
              pointLabels=&quot;rgba(255, 99, 132, 0.2)&quot;
              <br />
              ticks=&quot;rgba(255, 99, 132, 0.2)&quot;
              <br />
            </p>
            &#47;&gt;
          </ContainerSmallLongText>
        </Box>
        <Box>
          {" "}
          <a href="https://www.npmjs.com/package/skills-radar-chart">
            <Image
              src={skillChart}
              alt="json pretty sample"
              style={{
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
