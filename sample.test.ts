import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Sample from "./Sample.vue";

describe("Sample", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(Sample);
    expect(wrapper.vm).toBeTruthy();
  });
});
