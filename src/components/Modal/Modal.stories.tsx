import { Modal } from "./Modal";
import { Story, Meta } from "@storybook/react";
export default {
  title: "component",
  component: Modal,
} as Meta<typeof Modal>;

const Template: Story<typeof Modal> = (args: any) => (
  <>
    <Modal {...args} />
  </>
);
export const DefaultModal = Template.bind({});
DefaultModal.args = {
  loaded: false,
};
