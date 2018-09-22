
import { appendComponent} from "../../utils/utils";
import './article-styles.scss';
import '../../assets/profile_placeholder.png'



export const createArticle= ({ title, img, video, articleSummary,authorname,authorprofileImg,publishDate} = { title: 'No title', img: 'http://placehold.it/750x300', articleSummary:'No article' }) => {
  const article = document.createElement('div');
  article.classList.add('row');
 
  var imgAvatar =authorprofileImg;
 

  if (!imgAvatar) {
    imgAvatar='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
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
    <p>Publicado por <span class="postAuthor">${authorname} <img src=${imgAvatar} class="avatar img-responsive"></p>
    <a href="#" ><i class="far fa-comments"></i> Comentarios</a>
 </article>
  `;
  
  return article;
};

export default {
  createArticle
};

