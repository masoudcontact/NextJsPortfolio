import React from "react";
import ContainerSmall from "../../lib/ContainerSmall/ContainerSmall";

export default {
  title: "WebSite_Components/ContainerSmall",
  component: ContainerSmall,
};

const template = (args) => (
  <ContainerSmall {...args}>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </ContainerSmall>
);

export const ContainerSmallDefault = template.bind({});

ContainerSmallDefault.args = {};
