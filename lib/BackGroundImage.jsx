import { Card } from "theme-ui";
const BackGroundImage = () => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "10rem",
        borderRadius: ".6rem",
        margin: "1rem 0",
        padding: 0,
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
