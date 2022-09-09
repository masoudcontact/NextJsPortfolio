import React from "react";
import jsonsample from "../../public/Images/jsonpretty2.png";
import npmImage from "../../public/Images/npm.png";
import Image from "next/image";
import { Card, Box, Grid } from "theme-ui";
import { ContainerSmallLongText } from "../../lib/ContainerSmall/ContainerSmall";

export default function JsonPretty() {
  return (
    <Card>
      <Grid columns={[1, "2fr 1fr "]} gap={2} sx={{ alignItems: "start" }}>
        <Box>
          <h3>
            <Image src={npmImage} alt="npm Image" width="50" height="50" />
            JSON-pretty-textarea
          </h3>
          install
          <ContainerSmallLongText>
            npm i json-pretty-textarea
          </ContainerSmallLongText>
          import
          <ContainerSmallLongText>
            import &#123; JsonPrettierTextarea &#125; from
            `&quot;`json-pretty-textarea`&quot;`;
          </ContainerSmallLongText>
          use
          <ContainerSmallLongText>
            &lt; JsonPrettierTextarea <br />
            <p style={{ marginLeft: "2rem" }}>
              prettyjson=&#123;MockDocument&#125;
              <br />
              preBcl=&quot;white&quot;
              <br />
              stringCl=&quot;blue&quot;
              <br />
              numberCl=&quot;blue&quot;
              <br />
              booleanCl=&quot;red&quot;
              <br />
              nullCl=&quot;violet&quot;
              <br />
              keyCl=&quot;red&quot;
              <br />
              string_font_size=&quot;1rem&quot;
              <br />
              number_font_size=&quot;1rem&quot;
              <br />
              boolean_font_size=&quot;1rem&quot;
              <br />
              null_font_size=&quot;1rem&quot;
              <br />
              key_font_size=&quot;1rem&quot;
              <br />
              height=&quot;300px&quot;
              <br />
              width=&quot;300px&quot;
              <br />
              borderRadius=&quot;10px&quot;
              <br />
            </p>
            &#47;&gt;
          </ContainerSmallLongText>
        </Box>
        <Box>
          <a href="https://www.npmjs.com/package/json-pretty-textarea">
            <Image
              src={jsonsample}
              alt="json pretty sample"
              sx={{
                margin: "0 3rem 0 0rem",
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
