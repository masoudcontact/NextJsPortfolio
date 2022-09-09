import React from "react";
import SocBtn from "../../Components/UI/SocialButton";

export default {
  title: "WebSite_Components/MyButton/AllSocialButton",
  component: SocBtn,
  argTypes: {
    backgroundImage: {
      control: { type: "file", accept: ".png" },
      name: "Button Icon",
    },
    size: {
      name: "Size",
      options: ["small", "medium", "large"],
      control: { type: "select", labels: { medium: "Medium" } },
      mapping: { medium: <b>Medium</b> },
    },
    Label: { name: "Label", control: { type: "text", maxLength: 32 } },
    backgroundColor: {
      name: "background Color",
      control: {
        type: "color",
        presetColors: [
          "#fe4a49",
          "#FED766",
          "rgba(0, 159, 183, 1)",
          "HSLA(240,11%,91%,0.5)",
          "slategray",
        ],
      },
    },
    color: {
      name: "Font color",
      control: {
        type: "color",
        presetColors: [
          "#fe4a49",
          "#FED766",
          "rgba(0, 159, 183, 1)",
          "HSLA(240,11%,91%,0.5)",
          "slategray",
        ],
      },
    },
  },
};

const Template = (args) => <SocBtn {...args} />;

export const SocialButton = Template.bind({});

SocialButton.args = {
  backgroundColor: "grey",
  color: "red",
  size: "medium",
  label: "GitHub",
};

export const smallButton = Template.bind({});

smallButton.args = {
  backgroundColor: "blue",
  color: "red",
  size: "small",
  label: "Small",
};

export const OtherButton = Template.bind({});

OtherButton.args = {
  backgroundColor: "green",
  color: "yellow",
  size: "large",
  label: "OutSide",
};
