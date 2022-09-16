import React from "react";
import jsonsample from "../../public/Images/jsonpretty2.png";
import npmImage from "../../public/Images/npm.png";
import Image from "next/image";
import { Card, Box, Grid } from "theme-ui";
import { ContainerSmallLongText } from "../../lib/ContainerSmall/ContainerSmall";
import SearchList from "../features";

export default function JsonPretty() {
  return (
    <Card>
      <Grid columns={[1]} gap={2} sx={{ alignItems: "start" }}>
        <Box>
          <h3>Search Image Continuously</h3>
          <ContainerSmallLongText>
            Search For Image or copy a list of images and paste it in the search
          </ContainerSmallLongText>
          <SearchList />
        </Box>
      </Grid>
    </Card>
  );
}
