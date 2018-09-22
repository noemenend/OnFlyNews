import ArticleService from 'services/article-service';
import { appendComponent } from 'utils/utils';
import { createArticle } from 'components/article/article-component';

export const createArticles = () => {
  const articles = document.getElementById('articles');
  const articlesServiceInstance = new ArticleService();

  articlesServiceInstance.getArticles().then((articlesJson) => {
    articles.innerHTML = '';
    if (articlesJson.length === 0) {
      songs.innerHTML = 'No articles to display';
    } else {
      appendComponent(articles,
        articlesJson.map(articleData => createArticle(articleData)));
    }
  }).catch(() => {
    articles.innerHTML = 'There was an error, please reload';
  });
  return articles;
};

export default createArticles;