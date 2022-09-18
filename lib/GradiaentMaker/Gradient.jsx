import GradientList from "./gradients.json";
import { Card } from "theme-ui";

const GradientMaker = () => {
  const randomGradient =
    GradientList[Math.floor(Math.random() * GradientList.length)];
  const SampleGrid = `linear-gradient(90deg, ${randomGradient.colors.join(
    ","
  )})`;

  return SampleGrid;
};

export default GradientMaker;
