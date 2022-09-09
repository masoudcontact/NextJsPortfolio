import React from "react";
import HomePage from "../../pages/index";

export default {
  title: "WebSite_Pages/Home",
  component: HomePage,
};

const Template = (args) => <HomePage {...args} />;

export const Home = Template.bind({});

export const Home_With_Params = Template.bind({});
Home_With_Params.args = {
  StartScrollSpeed: "1",
  EndScrollSpeed: "2",
};


