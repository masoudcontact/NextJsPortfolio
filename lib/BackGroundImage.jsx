import { before } from "lodash";
import { Box, Card } from "theme-ui";
import GradientMaker from "./GradiaentMaker/Gradient";

const BackGroundImage = () => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "10rem",
        borderRadius: ".6rem",
        margin: "1rem 0",
        padding: 0,
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
