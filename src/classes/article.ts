import { ArticleData, ArticleContentFormData } from "@/types/article";
import axios from "axios";

/**
 * ArticleEntity
 */
export class ArticleEntity {
  private data: ArticleData;

  constructor(data: ArticleData) {
    this.data = data;
  }

  get id(): number {
    return this.data.id;
  }

  get path(): string {
    return `/articles/${this.id}`;
  }

  get title(): string {
    return this.data.title;
  }

  get body(): string {
    return this.data.body;
  }
}

/**
 * ArticleRepo
 */
export class ArticleRepo {
  static async getList(query: string | null): Promise<ArticleEntity[]> {
    const articleDataList: ArticleData[] = (
      await axios.get(`/api/articles?q=${query}`)
    ).data;
    return articleDataList.map((articleData: ArticleData) => {
      return new ArticleEntity(articleData);
    });
  }

  static async findById(articleId: number): Promise<ArticleEntity> {
    const articleData: ArticleData = (
      await axios.get(`/api/articles/${articleId}`)
    ).data;
    return new ArticleEntity(articleData);
  }

  static async updateById(
    articleId: number,
    formData: ArticleContentFormData
  ): Promise<void> {
    return await axios.put(`/api/articles/${articleId}`, formData);
  }
}
