import "./article-styles.scss";

export const createArticle = (
  {
    id,
    title,
    img,
    video,
    articleSummary,
    authorname,
    authorprofileImg,
    caption,
    numComments
  } = {
    title: "No title",
    img: "http://placehold.it/750x300",
    articleSummary: "No article"
  }
) => {
  const article = document.createElement("div");
  article.classList.add("row");

  var imgAvatar = authorprofileImg;

  if (!imgAvatar) {
    imgAvatar =
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";
  }
  if (!video) {
    article.innerHTML = `<article class="col-sm-6"><figure>
      <img class="card-img-top img-fluid  rounded" src=${img} alt="${caption}">
      <figcaption class="figure-caption text-right">${caption}</figcaption>
      </figure>`;
  } else {
    article.innerHTML = `<article class="col-sm-6"><figure>
    <div class="embed-responsive embed-responsive-16by9 rounded w-100">
    <iframe class="embed-responsive-item" src=${video} allowfullscreen></iframe>
    </div>`;
  }
  article.innerHTML += `<div class="col-sm-6">
    <a id="linkTitle" href="/article/?id=${id}">${title}</a>
    <p>${articleSummary}</p>
    <p>Publicado por <span class="postAuthor">${authorname} <img src=${imgAvatar} class="avatar img-responsive"></p>
    <a href="/article/?id=${id}#comments-list" ><i class="far fa-comments"></i><span id="comment${id}">${numComments} </span> Comentarios</a>
 </article>
  `;

  return article;
};

export const updateArticle = ({ numComments, id }) => {
  const numero = document.getElementById("comment" + id);
  numero.innerHTML = numComments;
};
export default {
  createArticle
};
