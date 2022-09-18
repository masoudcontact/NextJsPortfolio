import React from "react";
import { Card, Box, Grid } from "theme-ui";
import { ContainerSmallLongText } from "../../lib/ContainerSmall/ContainerSmall";
import SearchList from "./features";

export default function JsonPretty() {
  return (
    <Card>
      <Grid columns={[1]} gap={2} sx={{ alignItems: "start" }}>
        <Box>
          <h3>Search Image Continuously</h3>
          <ContainerSmallLongText>
            Search For couple of Images or copy a list of search item and paste
            it in the search
          </ContainerSmallLongText>
          <SearchList />
        </Box>
      </Grid>
    </Card>
  );
}
