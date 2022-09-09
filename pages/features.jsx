import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { Card, Grid, Box, Flex, Textarea } from "theme-ui";
import axios from "axios";
import pdficon from "../public/Images/PDF.png";
import Gform from "../public/Images/Gform.png";
import Skills from "../lib/Skill/Skill";
import { motion } from "framer-motion";
import Image from "next/image";
import { transparentize } from "@theme-ui/color";
import ButtonMn, { ButtonMnLong } from "../lib/Button/ButtonMn";
import backgroundImage from "../public/Images/documents.webp";
import searchIcon from "../public/Images/searchIcon.svg";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Head>
        <title>Masoud Naji</title>
        <meta name="description" content="Masoud Naji Frontend developer" />
      </Head>

      <Card
        sx={{
          color: "primary",
          display: "flex",
          flexDirection: "column",
          variant: "layout.root",
        }}
      >
        <Grid columns={[2, "2fr 1fr"]} gap={2}>
          <Box>
            <h1>Features</h1>
            <h4>List Image Search</h4>
          </Box>
        </Grid>

        <Card
          sx={{
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
            columns={[2, "2fr 2fr"]}
            gap={2}
            as="form"
            onSubmit={searchListHandler}
            sx={{
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Box>
              <Textarea
                name="SearchInput"
                ref={textRef}
                cols={60}
                rows={10}
                placeholder="Search items"
                onChange={searchListHandler}
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

      <hr />
    </motion.div>
  );
};

export default About;
