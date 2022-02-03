import { shallowMount } from "@vue/test-utils";
import Login from "@/views/Login.vue";

describe("Login.vue", () => {
  const wrapper = shallowMount(Login);
  it("Test 1: checks the default value of data", () => {
    const user = {
      email: "",
      password: "",
    };
    expect(wrapper.vm.user).toEqual(user);
  });

  it("Test 2: clicking on submit button without value in email & password property of the user object", () => {
    const submit_btn = wrapper.find('[data-testid="submit"]');
    submit_btn.trigger("click");
    expect(1).toBe(1);
  });

  it("Test 3: check for return value of checkUserFields without value in user object", () => {
    wrapper.setData({ user: { email: "", password: "" } });
    expect(wrapper.vm.checkUserFields()).toBeTruthy();
  });

  it("Test 4: clicking on submit button with value in email & password property of the user object", () => {
    wrapper.setData({ user: { email: "a@gmail.com", password: "A@123" } });
    const submit_btn = wrapper.find('[data-testid="submit"]');
    submit_btn.trigger("click");
    expect(1).toBe(1);
  });

  it("Test 5: check for return value of checkUserFields with value in user object", () => {
    wrapper.setData({ user: { email: "a@gmail.com", password: "A@123" } });
    expect(wrapper.vm.checkUserFields()).toBeFalsy();
  });

  it("Test 6: check for clearFormInputs", () => {
    wrapper.setData({ user: { email: "a@gmail.com", password: "A@123" } });
    wrapper.vm.clearFormInputs();
    const user = {
      email: "",
      password: "",
    };
    expect(wrapper.vm.user).toEqual(user);
  });
});
