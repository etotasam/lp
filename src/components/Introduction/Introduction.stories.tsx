import { Introduction } from "./Introduction";
import { Story, Meta } from "@storybook/react";
import { Header } from "../Header";

const TestComponent = () => {
  return <div style={{ backgroundColor: "#adf8ff", width: "100%", height: `100vh` }}>test components</div>;
};

export default {
  title: "component",
  component: Introduction,
} as Meta<typeof Introduction>;

const Template: Story<typeof Introduction> = (args: any) => (
  <>
    <Header />
    <Introduction {...args} />
    <TestComponent />
  </>
);
export const DefaultAbout = Template.bind({});
DefaultAbout.args = {};
