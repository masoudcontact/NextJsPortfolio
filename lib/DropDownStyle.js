const customStyles = {
  control: (base, state) => ({
    ...base,
    color: "white",
    height: "38px",
    background: "transparent",
    // match with the menu
    borderRadius: "0.5rem",
    // Overwrittes the different states of border
    border: state.isFocused ? "0px double #ccc" : "0px dotted #ccc",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      // borderColor: state.isFocused ? "red" : "blue",
      // border: "1px solid #ff8b67",
      // boxShadow: "0px 0px 6px #ff8b67"
    },
  }),
  menu: (base) => ({
    ...base,
    // override border radius to match the box
    borderRadius: 10,
    // kill the gap
    marginTop: 0,
  }),
  menuList: (base) => ({
    ...base,
    // kill the white space on first and last option
    padding: 0,
    background: "transparent",
  }),
  singleValue: (base) => ({
    ...base,
    height: "100%",
    color: "#white",
    paddingTop: "3px",
    borderRadius: 10,
  }),
  option: (styles) => {
    return {
      ...styles,
      // backgroundColor: "transparent",
      borderRadius: 10,
    };
  },
};

export default customStyles;
