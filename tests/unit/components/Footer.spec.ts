import { shallowMount } from "@vue/test-utils";
import FooterComponent from "@/components/Footer.vue";

describe("Footer.vue", () => {
  it("コピーライトが表示されること", () => {
    const copyright = "©︎2020 biyokoyama";
    const wrapper = shallowMount(FooterComponent, {
      stubs: ["FontAwesomeIcon"]
    });
    expect(wrapper.text()).toMatch(copyright);
  });
});
