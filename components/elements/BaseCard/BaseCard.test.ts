import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseCard from "./index";

const caseTheme: {
  theme: "white" | "green" | "red";
  style: string;
}[] = [
  {
    theme: "white",
    style: "bg-white border border-gray",
  },
  {
    theme: "green",
    style: "bg-green text-white",
  },
  {
    theme: "red",
    style: "bg-red text-white",
  },
];

const caseSized: {
  size: "sm" | "lg";
  style: string;
}[] = [
  {
    size: "lg",
    style: "p-4",
  },
  {
    size: "sm",
    style: "p-3 text-xs",
  },
];

describe("Test Card", () => {
  it.concurrent.each(caseTheme)(
    "sould render with correct styling variant",
    ({ theme, style }) => {
      const wrapper = mount(BaseCard, {
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
      const wrapper = mount(BaseCard, {
        props: {
          size: size,
        },
      });
      expect(wrapper.attributes("class")).toContain(style);
    }
  );
});
