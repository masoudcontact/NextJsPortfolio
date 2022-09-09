import React from "react";
import PropTypes from "prop-types";

const Card = ({
  children,
  spacing = 2,
  direction = "row",
  wrap = false,
  justifyContent = "center",
  alignItems = "center",
  backgroundColor = "transparent",
  color = "red",
}) => {
  const style = {
    display: "flex",
    flexDirection: direction,
    flexWrap: wrap ? "wrap" : "nowrap",
    gap: `${spacing * 0.25}rem`,
    justifyContent: justifyContent,
    alignItems: alignItems,
    backgroundColor: backgroundColor,
    color: color,
  };

  return <div style={style}>{children}</div>;
};

Card.propTypes = {
  // children: PropTypes.node,
  spacing: PropTypes.number,
  direction: PropTypes.oneOf(["row", "column"]),
  wrap: PropTypes.bool,
  justifyContent: PropTypes.oneOf(["center", "flex-start", "flex-end" ,"space-between", "space-around"]),
  alignItems: PropTypes.oneOf(["center", "flex-start", "flex-end", "stretch", "baseline"]),
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

export default Card;
