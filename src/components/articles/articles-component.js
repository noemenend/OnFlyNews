import ArticleService from 'services/article-service';
import { appendComponent } from 'utils/utils';
import { createArticle,updateArticle} from 'components/article/article-component';
import CommentService from 'services/comment-service';

export const createArticles = () => {
  const articles = document.getElementById('articles');
  const articlesServiceInstance = new ArticleService();
  const commentsServiceInstance = new CommentService();

  articlesServiceInstance.getArticles().then((articlesJson) => {
    articles.innerHTML = '';
    if (articlesJson.length === 0) {
      articles.innerHTML = 'No articles to display';
    } else {
      appendComponent(articles,
        articlesJson.map(articleData => createArticle(articleData)));

        articlesJson.map(articleData =>{
            commentsServiceInstance.getCommentsByArticleId(articleData.id).then((commentsJson)=> {
              articleData.numComments = commentsJson.length;
              updateArticle(articleData);
            }
            );
        });
    }
  }).catch(() => {
    articles.innerHTML = 'There was an error, please reload';
  });
  return articles;
};


export default createArticles;