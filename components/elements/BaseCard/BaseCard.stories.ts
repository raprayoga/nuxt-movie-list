import type { Meta, StoryObj } from "@storybook/vue3";
import BaseCard from "./index";

const meta: Meta<typeof BaseCard> = {
  component: BaseCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "select", options: ["sm", "lg"] },
    variant: {
      control: "select",
      options: ["red", "white", "green"],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BaseCard>;

export const Default: Story = {
  render: (args) => ({
    components: { BaseCard },
    setup() {
      return { args };
    },
    template: '<BaseCard v-bind="args">Card Test</BaseCard>',
  }),
  args: {
    variant: "red",
    size: "lg",
    class: "",
  },
};
