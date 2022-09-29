import { Box, Card } from "theme-ui";
import GradientMaker from "./GradiaentMaker/Gradient";

const BackGroundImage = () => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "85vw",
        height: "10rem",
        borderRadius: ".6rem",
        margin: "1rem 0",
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
        alignContent: "center",
        background: GradientMaker(),
      }}
    >
      <img
        src="https://random.imagecdn.app/2000/200"
        alt="Latest Crypto Fear & Greed Index"
      />
    </Card>
  );
};

export default BackGroundImage;
