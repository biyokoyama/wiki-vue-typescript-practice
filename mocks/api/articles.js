import { articles } from "../_data/articles";

export default {
  get({ params }) {
    const query = params.q;

    const searchedArticles = !query
      ? articles
      : articles.filter(article => {
          return article.title.includes(query) || article.body.includes(query);
        });
    return [200, searchedArticles];
  }
};
