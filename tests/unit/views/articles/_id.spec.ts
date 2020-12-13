import VueRouter from "vue-router";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import _idView from "@/views/articles/_id.vue";
import { ArticleRepo } from "@/classes/article";
import { ArticleContentFormData } from "@/types/article";

jest.mock("@/classes/article");

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/articles/:id",
      component: _idView
    }
  ]
});

describe("search.vue", () => {
  it("_fetchArticle：mount時、ArticleRepo.findById が1回呼ばれること", () => {
    shallowMount(_idView, { router, localVue });
    expect(ArticleRepo.findById).toHaveBeenCalledTimes(1);
  });

  it("ArticleRepo.findById：引数にthis.$route.params.id 由来のIntが渡されること", () => {
    const articleId = 12345678;
    router.push(`/articles/${articleId}`);
    shallowMount(_idView, { router, localVue });
    expect(ArticleRepo.findById).toBeCalledWith(articleId);
  });

  it("_fetchArticle：ArticleRepo.findById が404のとき、/ に遷移すること", () => {
    const errorObj = {
      response: {
        status: 404
      }
    };
    ArticleRepo.findById = jest.fn(() => {
      throw errorObj;
    });
    const wrapper = shallowMount(_idView, { router, localVue });
    expect(wrapper.vm.$route.path).toBe("/");
  });

  it("_fetchArticle：ArticleRepo.findById が404以外のとき、console.error が呼ばれること", () => {
    const errorObj = {
      response: {
        status: 418
      },
      message: "418 I'm a teapot"
    };
    ArticleRepo.findById = jest.fn(() => {
      throw errorObj;
    });

    console.error = jest.fn();
    shallowMount(_idView, { router, localVue });

    expect(console.error).toBeCalledWith(errorObj.message);
  });

  it("onSaveArticleContent：ArticleRepo.updateById が1回呼ばれること", () => {
    const formData: ArticleContentFormData = {
      title: "sampletitle",
      body: "samplebody"
    };
    const wrapper = shallowMount(_idView, { router, localVue });
    (wrapper.vm as any).onSaveArticleContent(formData);
    expect(ArticleRepo.updateById).toHaveBeenCalledTimes(1);
  });

  it("onSaveArticleContent：引数にthis.articleId, formData が渡されること", () => {
    const articleId = 12345678;
    router.push(`/articles/${articleId}`);
    const formData: ArticleContentFormData = {
      title: "sampletitle",
      body: "samplebody"
    };
    const wrapper = shallowMount(_idView, { router, localVue });
    (wrapper.vm as any).onSaveArticleContent(formData);
    expect(ArticleRepo.updateById).toHaveBeenCalledWith(articleId, formData);
  });
});
