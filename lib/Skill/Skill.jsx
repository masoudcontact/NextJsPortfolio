import SkillsArray from "./SkillsArray.json";
import { ProgressBar } from "progressbar-chart";

const skills = () => {
  return (
    <ProgressBar
      Data={SkillsArray}
      DataName="skillName"
      DataPercentage="skillPercentage"
      height="0.8rem"
      borderRadius="0.8rem"
      background="linear-gradient(to left,rgba(63, 63, 63, 1),rgba(175, 175, 175, 0.6))"
      boxShadow=" 0 3px 3px -5px rgba(54, 162, 5, 0.8),0 2px 5px rgba(54, 162, 235, 0.5)"
      color="rgb(0, 0, 0)"
      width="100%"
    />
  );
};

export default skills;
