import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TestButton } from "./TestButton";

export default {
  title: "TestButton",
  component: TestButton,
} as ComponentMeta<typeof TestButton>;

const Template: ComponentStory<typeof TestButton> = (args) => <TestButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "デフォルトです",
};

export const BgBlue = Template.bind({});
BgBlue.args = {
  children: "ブルー",
  bgColor: "blue",
  className: "opacity",
};
