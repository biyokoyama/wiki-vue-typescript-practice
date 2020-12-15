import VueRouter from "vue-router";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";
import SearchForm from "@/components/SearchForm.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe("Navbar.vue", () => {
  it("/ のとき：SearchFormが表示されないこと", () => {
    router.push("/");
    const wrapper = shallowMount(Navbar, { router, localVue });
    expect(wrapper.findComponent(SearchForm).exists()).toBe(false);
  });

  it("/ 以外のとき：SearchFormが表示されること", () => {
    router.push("/somewhere/else");
    const wrapper = shallowMount(Navbar, { router, localVue });
    expect(wrapper.findComponent(SearchForm).exists()).toBe(true);
  });
});
