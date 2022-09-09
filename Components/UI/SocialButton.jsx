import React from "react";
import classes from "./Button.module.css";
import PropTypes from "prop-types";

const SocialBtn = ({
  backgroundColor,
  color,
  size,
  label,
  backgroundImage,
  ...props
}) => {
  const style = () => {
    const st = {};
    backgroundColor && (st.backgroundColor = backgroundColor);
    color && (st.color = color);
    return st;
  };
  return (
    <button
    className={`${classes.button} ${classes[size]}`}
    type={props.type || "button"}
      style={style()}
      onClick={props.onClick}
      {...props}
      >
      {backgroundImage && (
        <img
        src={backgroundImage}
        height="30px"
        width= "30px"
        />
        )}
      {label}
    </button>
  );
};

// SocialBtn.propTypes = {
  //   Size: PropTypes.oneOf(["small", "medium", "large"]),
  //   onClick: PropTypes.func,
  //   backgroundColor: PropTypes.string,
  //   FontColor: PropTypes.string,
  //   Label: PropTypes.string,
  //   BackgroundImage: PropTypes.string,
  // };
  
  SocialBtn.defaultProps = {
    size: "medium",
    onClick: undefined,
  };
  
export default SocialBtn;
