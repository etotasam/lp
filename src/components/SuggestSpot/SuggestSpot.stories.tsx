import { SuggestSpot } from "./SuggestSpot";
import { Story, Meta } from "@storybook/react";

const TestComponent = () => {
  return <div style={{ backgroundColor: "#adf8ff", width: "100%", height: `100vh` }}>test components</div>;
};

const AboveComp = () => {
  return <div style={{ backgroundColor: "#fa7676", width: "100%", height: `100vh` }}>test AboveComp</div>;
};

export default {
  title: "component",
  component: SuggestSpot,
} as Meta<typeof SuggestSpot>;

const Template: Story<typeof SuggestSpot> = (args: any) => (
  <div style={{ margin: "0", padding: "0" }}>
    {/* <AboveComp /> */}
    <SuggestSpot {...args} />
    <TestComponent />
  </div>
);
export const DefaultSuggestSpot = Template.bind({});
DefaultSuggestSpot.args = {};
