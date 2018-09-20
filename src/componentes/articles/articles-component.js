import { appendComponent } from "../../utils/utils";
import {makeArticleDesc} from 'componentes/article/article-component.js';
import './articles-styles.scss';

export const renderArticles = () =>{
    const articles = document.createElement('div');
    articles.classList.add('articles');
    fetch('http://localhost:3001/articles').
    then( (response) => {
        if(response.ok){
            return response.json();
        }
        console.warn('error', response.status);
        return null;

    }).then((jsonArticles) => {
        appendComponent(articles, 
            jsonArticles.map(articleDescData=>makeArticleDesc(articleDescData)));

    });

    return articles;

}

export default {
    renderArticles
}