import { Header } from "./Header";
import { Story, Meta } from "@storybook/react";

const TestComponent = () => {
  return <div style={{ backgroundColor: "#adf8ff", width: "100%", height: `100vh` }}>test components</div>;
};

export default {
  title: "component",
  component: Header,
} as Meta<typeof Header>;

const Template: Story<typeof Header> = (args) => (
  <>
    <Header {...args} />
    <TestComponent />
  </>
);
export const DefaultHeader = Template.bind({});
DefaultHeader.args = {};
