import VueRouter from "vue-router";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import searchView from "@/views/search.vue";
import { ArticleRepo } from "@/classes/article";

jest.mock("@/classes/article");

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe("search.vue", () => {
  it("ArticleRepo.getList：1回呼ばれること", () => {
    shallowMount(searchView, { router, localVue });
    expect(ArticleRepo.getList).toHaveBeenCalledTimes(1);
  });

  it("ArticleRepo.getList：引数に$route.query.q が渡されること", () => {
    const mockedQ = "mocked-q";
    router.push(`/search?q=${mockedQ}`);
    shallowMount(searchView, { router, localVue });
    expect(ArticleRepo.getList).toBeCalledWith(mockedQ);
  });
});
