import {updateHeader} from 'components/header/header-component';
import { updateArticleDetail } from 'components/article-detail/article-detail-component';
import queryString from 'query-string';
import ArticleService from 'services/article-service';
import 'styles/main.scss';
import {createComments} from 'components/comments/comments-component';

import '@babel/polyfill';
import 'whatwg-fetch';
import 'bootstrap';
import PubSub from 'pubsub-js';


const loadArticle=()=>{
const ArticleServiceInstance = new ArticleService();
const query = queryString.parse(window.location.search);
const articleId = query && query.id;
const articleDetail = document.getElementById('article-detail');
if (articleId) {
   ArticleServiceInstance.getArticle(articleId).then((articleJSON) => {
    createComments(articleJSON);
    updateArticleDetail(articleJSON);
  }).catch((err) => {
    articleDetail.innerHTML = 'There was an error, please reload';
  });
  
}
}

loadArticle();
updateHeader({title:'OnFlyNews'});

PubSub.subscribe('reload', () => {
  loadArticle();
  
});

