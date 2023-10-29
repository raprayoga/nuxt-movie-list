import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseButton from "./index";

const caseTheme: {
  theme: "primary" | "gray" | "white" | "green" | "red" | "yellow";
  style: string;
}[] = [
  {
    theme: "primary",
    style: "bg-primary text-white",
  },
  {
    theme: "gray",
    style: "bg-gray text-black",
  },
  {
    theme: "white",
    style: "bg-white text-black border border-gray",
  },
  {
    theme: "green",
    style: "bg-green text-white",
  },
  {
    theme: "red",
    style: "bg-red text-white",
  },
  {
    theme: "yellow",
    style: "bg-yellow text-white",
  },
];

const caseSized: {
  size: "sm" | "lg";
  style: string;
}[] = [
  {
    size: "lg",
    style: "rounded-lg px-5 py-2.5 lg:text-sm text-xs",
  },
  {
    size: "sm",
    style: "rounded-md px-2.5 py-1 lg:text-xs text-[10px]",
  },
];

describe("Test Button", () => {
  it.concurrent.each(caseTheme)(
    "sould render with correct styling variant",
    ({ theme, style }) => {
      const wrapper = mount(BaseButton, {
        props: {
          variant: theme,
        },
      });
      expect(wrapper.attributes("class")).toContain(style);
    }
  );
  it.concurrent.each(caseSized)(
    "sould render with correct styling size",
    ({ size, style }) => {
      const wrapper = mount(BaseButton, {
        props: {
          size: size,
        },
      });
      expect(wrapper.attributes("class")).toContain(style);
    }
  );
});
