
import {makeContainer} from 'componentes/container/container-component.js';
import { appendComponent} from "../../utils/utils";
import './article-styles.scss';



export const makeArticleDesc = ({ title, img, video, articleSummary,authorname,authorprofileImg,publishDate} = { title: 'No title', img: 'http://placehold.it/750x300', articleSummary:'No article' }) => {
  const container = makeContainer();
  const article = document.createElement('div');
  article.classList.add('row');
 
  var imgAvatar =authorprofileImg;
 

  if (!imgAvatar) {
    imgAvatar='/assets/profile_placeholder.png';
  }
  if (!video) {
    article.innerHTML = `<article class="col-sm-6"><figure>
      <img class="card-img-top img-fluid rounded" src=${img} alt="Card image cap">
      <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
      </figure>
      </div>`;
  } else {
    article.innerHTML = `<article class="col-sm-6"><figure>
    <div class="embed-responsive embed-responsive-16by9 rounded w-100">
    <iframe class="embed-responsive-item" src=${video} allowfullscreen></iframe>
    </div>
    </div>`;
  }
  article.innerHTML += `<div class="col-sm-6">
    <h2>${title}</h2>
    <p>${articleSummary}</p>
    <a href="#" class="btn btn-primary">Más &rarr;</a><span class="post">Publicado el ${publishDate} por </span> <a href="#">${authorname} <img src=${imgAvatar} class="avatar img-responsive"></a>
 </article>
  `;
  
  appendComponent(container,[article]);
  return container;
};

export default {
  makeArticleDesc
};
