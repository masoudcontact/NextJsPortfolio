import { useState } from "react";
import { Box, Card, Grid } from "theme-ui";
import ButtonMn from "./Button/ButtonMn";

const TextEditor = ({ onTextSubmit1, onTextSubmit2 }) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const handleSubmit1 = () => {
    if (onTextSubmit1) {
      onTextSubmit1(value1);
    }
  };
  const handleSubmit2 = () => {
    if (onTextSubmit2) {
      onTextSubmit2(value2);
    }
  };

  const style = {
    width: "100%",
    height: "10rem",
    borderRadius: ".6rem",
    margin: "0.5rem 0",
    padding: "0.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    alignContent: "center",
    background: "lightgray",
  };

  return (
    <Grid
      columns={[1, 1, "2fr 2fr"]}
      sx={{
        paddingTop: "0",
        minHeight: "5rem",
        alignContent: "center",
        justifyItems: "center",
        gap: "2",
      }}
    >
      <Box
        sx={{
          width: "-webkit-fill-available",
        }}
      >
        <textarea
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          style={style}
        />

        <ButtonMn onClick={handleSubmit1}>Push text</ButtonMn>
      </Box>
      <Box
        sx={{
          width: "-webkit-fill-available",
        }}
      >
        <textarea
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          style={style}
        />

        <ButtonMn onClick={handleSubmit2}>Push text</ButtonMn>
      </Box>
    </Grid>
  );
};

export default TextEditor;
