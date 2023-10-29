import type { Meta, StoryObj } from "@storybook/vue3";
import BaseButton from "./index";

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "select", options: ["sm", "lg"] },
    variant: {
      control: "select",
      options: ["primary", "gray", "white", "red", "green", "yellow"],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const Default: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args">Submit</BaseButton>',
  }),
  args: {
    variant: "primary",
    size: "lg",
    class: "",
  },
};

export const Icon: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: `<BaseButton v-bind="args"><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
    <rect x="5.75" y="2.75" width="16.5" height="20.8404" rx="1.39543" stroke="white" stroke-width="1.5"/>
    <rect x="9.12695" y="9" width="5.23404" height="1.2766" rx="0.638298" fill="white"/>
    <rect x="9" y="11.6807" width="5.23404" height="1.2766" rx="0.638298" fill="white"/>
    <rect x="9" y="14.2339" width="7.14894" height="1.2766" rx="0.638298" fill="white"/>
    <path d="M18.122 2.75C17.8131 3.62389 16.9797 4.25 16 4.25H13C12.0203 4.25 11.1869 3.62389 10.878 2.75H18.122Z" fill="#82B3F4" stroke="white" stroke-width="1.5"/>
  </svg></BaseButton>`,
  }),
  args: {
    variant: "primary",
    size: "sm",
    class: "",
  },
};
