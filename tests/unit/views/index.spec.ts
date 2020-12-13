import { shallowMount } from "@vue/test-utils";
import indexView from "@/views/index.vue";

describe("index.vue", () => {
  it("プロジェクト名が表示されること", () => {
    const projectName = "wiki-vue-typescript-practice";
    const wrapper = shallowMount(indexView);
    expect(wrapper.text()).toMatch(projectName);
  });
});
