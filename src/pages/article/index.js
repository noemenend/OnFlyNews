import { updateHeader } from 'components/header/header-component';
import { updateArticleDetail } from 'components/article-detail/article-detail-component';
import queryString from 'query-string';
import ArticleService from 'services/article-service';
import 'styles/main.scss';

import '@babel/polyfill';
import 'whatwg-fetch';
import 'bootstrap';

const ArticleServiceInstance = new ArticleService();
const query = queryString.parse(window.location.search);
console.log(query);
const articleId = query && query.id;

if (articleId) {
  ArticleServiceInstance.getArticle(articleId).then((articleJSON) => {
    updateArticleDetail(articleJSON);
  });
}
updateHeader({ title: 'OnFlyNews'});