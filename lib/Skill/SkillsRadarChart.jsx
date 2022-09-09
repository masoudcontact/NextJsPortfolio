import React from 'react'
import { RadarChart } from "skills-radar-chart";
import SkillsArray from "./SkillsArray.json";

export default function SkillsRadarChart() {
  return (
    <RadarChart
    rawData={SkillsArray}
    skillPercentage="skillPercentage"
    skillName="skillName"
    label="Skills"
    backgroundColor="rgba(255, 255, 255, 0.1)"
    borderColor="rgba(68,114,196,0.8)"
    borderWidth="5"
    pointBackgroundColor="rgb(54, 162, 235)"
    pointBorderColor="red"
    pointHoverBackgroundColor="#fff"
    pointHoverBorderColor="rgb(54, 162, 235)"
    borderDash={[2, 5]}
    borderDashOffset="8"
    angleLines="rgba(000, 000, 0, 0.0)"
    grid="white"
    pointLabels="white"
    ticks="black"
    ShowLegend={false}
  />
  )
}
