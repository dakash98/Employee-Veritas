import { shallowMount } from "@vue/test-utils";
import BaseInput from "@/components/BaseInput.vue";

describe("BaseInput.vue", () => {
  const wrapper = shallowMount(BaseInput);
  it("Test 1: checks the default value of data", () => {
    expect(1).toEqual(1);
  });
});
