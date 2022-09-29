import { AnimationTest } from "./AnimationTest";
import { Story, Meta } from "@storybook/react";

const TestComponent = () => {
  return <div style={{ backgroundColor: "#adf8ff", width: "100%", height: `100vh` }}>test components</div>;
};

export default {
  title: "component",
  component: AnimationTest,
} as Meta<typeof AnimationTest>;

const Template: Story<typeof AnimationTest> = (args) => (
  <>
    <AnimationTest {...args} />
  </>
);
export const DefaultAnimationTest = Template.bind({});
DefaultAnimationTest.args = {};
