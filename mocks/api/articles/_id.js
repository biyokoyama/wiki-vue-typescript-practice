import { articles } from "../../_data/articles";

const findArticleById = articleId => {
  return articles.find(article => {
    return article.id === articleId;
  });
};

export default {
  get({ values }) {
    const article = findArticleById(values.id);

    return article ? [200, article] : [404];
  },
  put({ values, data }) {
    const article = findArticleById(values.id);

    if (article) {
      article.title = data.title;
      article.body = data.body;
    }

    return article ? [200, article] : [404];
  }
};
