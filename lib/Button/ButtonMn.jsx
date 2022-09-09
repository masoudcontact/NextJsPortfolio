import { Button } from "react-bootstrap";
import style from "./ButtonStyle.module.scss";
import { Flex } from "theme-ui";

const ButtonMn = ({ children, onClick, value, image }) => {
  return (
    <Button
      variant="outline-secondary"
      className={style.languageBtn}
      onClick={onClick}
      value={value}
    >
      <Flex sx={{ alignItems: "center", justifyContent: "space-evenly" }}>
        {image ? <img src={Object(image).src} alt="image" /> : null}
        {children}
      </Flex>
    </Button>
  );
};
export default ButtonMn;

export const ButtonMnLong = ({ children, onClick, value, image, widthPrs }) => {
  return (
    <Button
      variant="outline-secondary"
      className={style.languageBtnLong}
      onClick={onClick}
      value={value}
      style={{ width: widthPrs ? widthPrs : "100%" }}
    >
      <Flex>
        {image ? <img src={Object(image).src} alt="image" /> : null}
        {children}
      </Flex>
    </Button>
  );
};

export const ButtonMnColor = ({ onChange, ColorWater, children }) => {
  return (
    <div style={{ position: "relative", margin: "0 0 -.5rem 0" }}>
      <input
        style={{ padding: "10px" }}
        className={style.languageBtn}
        type="color"
        value={ColorWater}
        onChange={onChange}
        data-for="main"
        data-tip="Chose Color for watermark"
      />
      <h5
        style={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          fontSize: ".8rem",
          pointerEvents: "none",
        }}
      >
        {children}
      </h5>
    </div>
  );
};
