import React, { useState } from "react";
import classes from "../UI/Card.module.css";

const Readmore = ({ children, maxCharecterCount = 100 }) => {
  const text = children;
  const [isTruncated, setIsTruncated] = useState(true);
  const resultString = isTruncated ? text.slice(0, maxCharecterCount) : text;
  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };
  return (
    <p className={classes.has_text_left}>
      {resultString}
      <span onClick={toggleIsTruncated} className={classes.ReadMorebtc}>
         {isTruncated ? ". . . Read More" : ". . . Read Less"}
      </span>
    </p>
  );
};

export default Readmore;
