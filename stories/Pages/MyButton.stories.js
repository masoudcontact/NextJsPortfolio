import React from "react";
import ButtonMn from "../../lib/Button/ButtonMn";

export default {
  title: "WebSite_Components/MyButton/ButtonMn",
  component: ButtonMn,
};

const template = (args) => <ButtonMn {...args}>test </ButtonMn>;

export const ButtonMnDefault = template.bind({});

ButtonMnDefault.args = {};
