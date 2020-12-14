import { ArticleEntity, ArticleRepo } from "@/classes/article";
import { ArticleData, ArticleContentFormData } from "@/types/article";

import axios from "axios";
jest.mock("axios");

describe("ArticleEntity", () => {
  describe("get id", () => {
    it("articleData.id を返すこと", () => {
      const articleData: ArticleData = {
        id: 1234,
        title: "sampletitle",
        body: "samplebody"
      };
      const articleEntity: ArticleEntity = new ArticleEntity(articleData);
      expect(articleEntity.id).toEqual(articleData.id);
    });
  });

  describe("get path", () => {
    it("`/articles/${articleData.id}` を返すこと", () => {
      const articleData: ArticleData = {
        id: 1234,
        title: "sampletitle",
        body: "samplebody"
      };
      const articleEntity: ArticleEntity = new ArticleEntity(articleData);
      expect(articleEntity.path).toEqual(`/articles/${articleData.id}`);
    });
  });

  describe("get title", () => {
    it("articleData.title を返すこと", () => {
      const articleData: ArticleData = {
        id: 1234,
        title: "sampletitle",
        body: "samplebody"
      };
      const articleEntity: ArticleEntity = new ArticleEntity(articleData);
      expect(articleEntity.title).toEqual(articleData.title);
    });
  });

  describe("get body", () => {
    it("articleData.body を返すこと", () => {
      const articleData: ArticleData = {
        id: 1234,
        title: "sampletitle",
        body: "samplebody"
      };
      const articleEntity: ArticleEntity = new ArticleEntity(articleData);
      expect(articleEntity.body).toEqual(articleData.body);
    });
  });
});

describe("ArticleRepo", () => {
  describe("static async getList", () => {
    const articleDataList: ArticleData[] = [
      { id: 1001, title: "1001title", body: "1001body" },
      { id: 1002, title: "1002title", body: "1002body" },
      { id: 1003, title: "1003title", body: "1003body" }
    ];
    const query = "sampleQuery";

    let getListResult: ArticleEntity[];
    let axiosGetMock: jest.SpyInstance;
    beforeEach(async () => {
      axiosGetMock = jest.spyOn(axios, "get");
      axiosGetMock.mockResolvedValue({ data: articleDataList });
      getListResult = await ArticleRepo.getList(query);
    });

    it("axios.get 結果のArticleData[] から生成された ArticleEntity[] を返すこと", () => {
      expect(getListResult).toEqual(
        articleDataList.map((articleData: ArticleData) => {
          return new ArticleEntity(articleData);
        })
      );
    });

    it("axios.get(`/api/articles?q=${query}`) が呼ばれること", () => {
      expect(axiosGetMock).toHaveBeenCalledWith(`/api/articles?q=${query}`);
    });
  });

  describe("static async findById", () => {
    const articleId = 1001;
    const articleData: ArticleData = {
      id: articleId,
      title: "1001title",
      body: "1001body"
    };

    let findByIdResult: ArticleEntity;
    let axiosGetMock: jest.SpyInstance;
    beforeEach(async () => {
      axiosGetMock = jest.spyOn(axios, "get");
      axiosGetMock.mockResolvedValue({ data: articleData });
      findByIdResult = await ArticleRepo.findById(articleId);
    });

    it("axios.get 結果のArticleData から生成された ArticleEntity を返すこと", () => {
      expect(findByIdResult).toEqual(new ArticleEntity(articleData));
    });

    it("axios.get(`/api/articles/${articleId}`) が呼ばれること", () => {
      expect(axiosGetMock).toHaveBeenCalledWith(`/api/articles/${articleId}`);
    });
  });

  describe("static async updateById", () => {
    const articleId = 1001;
    const formData: ArticleContentFormData = {
      title: "1001title",
      body: "1001body"
    };

    let axiosPutMock: jest.SpyInstance;
    beforeEach(async () => {
      axiosPutMock = jest.spyOn(axios, "put");
      await ArticleRepo.updateById(articleId, formData);
    });

    it("axios.put(`/api/articles/${articleId}`, formData) が呼ばれること", () => {
      expect(axiosPutMock).toHaveBeenCalledWith(
        `/api/articles/${articleId}`,
        formData
      );
    });
  });
});
