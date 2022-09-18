import React, { useState, useRef } from "react";
import { Card, Grid, Box, Flex, Textarea } from "theme-ui";
import axios from "axios";
import { transparentize } from "@theme-ui/color";
import ButtonMn from "../../lib/Button/ButtonMn";
import searchIcon from "../../public/Images/searchIcon.svg";

const About = () => {
  const ApiAccesskey = "vp4ZNVWqGrGUq17lGFwU4YVv4S6Z-xlzgAzKgp993SI";
  const ApiUrl = "https://api.unsplash.com/search/photos";
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchList, setSearchList] = useState([]);

  const textRef = useRef(null);

  const searchListHandler = () => {
    setImages("");
    const searchList = textRef.current.value.trim().split("\n");
    setSearchList(searchList);
  };

  const SearchHandler = () => {
    searchListHandler();
    searchList.forEach(async (search) => {
      try {
        const response = await axios.get(ApiUrl, {
          params: { query: { search }, per_page: 1 },
          headers: {
            Authorization: `Client-ID ${ApiAccesskey}`,
          },
        });
        setImages((images) => ({
          ...images,
          [search]: response.data.results,
        }));
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    });
  };

  const ImageCollection = () => {
    return Object.entries(images).map(([key, ImagesValue]) =>
      ImagesValue.map((image) => (
        <img
          key={image.id}
          src={image.urls.regular}
          alt={image.alt_description}
          width="100%"
        />
      ))
    );
  };

  return (
    <>
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
          columns={[1, "2fr 2fr"]}
          gap={2}
          as="form"
          onSubmit={searchListHandler}
          sx={{
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Box sx={{ maxWidth: "100%" }}>
            <Textarea
              name="SearchInput"
              ref={textRef}
              cols={60}
              rows={10}
              placeholder="Search items"
              onChange={searchListHandler}
              sx={{ maxWidth: "inherit" }}
              onKeyPress={(e) => {
                e.key === "Enter" && SearchHandler();
              }}
            />
          </Box>
          <Box>
            <Flex
              sx={{
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <ButtonMn image={searchIcon} onClick={SearchHandler}>
                Search
              </ButtonMn>

              <ButtonMn
                onClick={() => {
                  (textRef.current.value = "") && setSearchList("");
                }}
              >
                Clear List
              </ButtonMn>
            </Flex>
          </Box>
        </Grid>
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
        <Box sx={{ columnCount: "3" }}>{!loading && ImageCollection()}</Box>
      </Card>
    </>
  );
};

export default About;
