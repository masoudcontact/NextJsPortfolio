import React from "react";
import Socbtn from "../../Components/UI/Button";

export default {
  title: "WebSite_Components/MyButton/SocialButton",
  component: Socbtn,
};

const Template = (args) => <Socbtn {...args} />;

export const NormalButton = Template.bind({});

NormalButton.arg = {
  label: "Button",
};
