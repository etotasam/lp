import { SuggestSpot } from "./SuggestSpot";
import { Story, Meta } from "@storybook/react";

const TestComponent = () => {
  return <div style={{ backgroundColor: "#adf8ff", width: "100%", height: `100vh` }}>test components</div>;
};

export default {
  title: "component",
  component: SuggestSpot,
} as Meta<typeof SuggestSpot>;

const Template: Story<typeof SuggestSpot> = (args) => (
  <>
    <SuggestSpot {...args} />
    <TestComponent />
  </>
);
export const DefaultSuggestSpot = Template.bind({});
DefaultSuggestSpot.args = {};
