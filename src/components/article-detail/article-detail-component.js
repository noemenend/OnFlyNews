import "./article-detail-component.scss";

const isLiked = id => localStorage.getItem(`article-${id}`);

const toggleLike = id => {
  const likeValue = isLiked(id) === "true" ? "false" : "true";
  localStorage.setItem(`article-${id}`, likeValue);
};

const setInitialLikeValue = (likeButton, liked) => {
  if (liked === "true") likeButton.children[0].classList.add("fas");
};

export const updateArticleDetail = (
  {
    id,
    title,
    img,
    video,
    articleText,
    authorname,
    authorprofileImg,
    caption
  } = {
    title: "No title",
    img: "http://placehold.it/750x300",
    articleSummary: "No article"
  }
) => {
  var imgAvatar = authorprofileImg;
  if (!imgAvatar) {
    imgAvatar =
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";
  }

  var imagenVideo;

  if (!video) {
    imagenVideo = `<figure>
              <img class="card-img-top img-fluid rounded center" src=${img} alt="Card image cap">
              <figcaption class="figure-caption text-right">${caption}</figcaption>
              </figure>`;
  } else {
    imagenVideo = `<figure>
            <div class="embed-responsive embed-responsive-16by9 rounded w-100">
            <iframe class="embed-responsive-item" src=${video} allowfullscreen></iframe>
            </div>
            <figcaption class="figure-caption text-right">${caption}</figcaption>
            </figure>`;
  }
  const articleDetail = document.getElementById("article-detail");
  articleDetail.innerHTML = `
        <div class="col-10 mx-auto">
                <h2 class="title">${title}</h2>
                <div class="publicated">Publicado por <span class="postAuthor">${authorname} <img src=${imgAvatar} class="avatar img-responsive"></div>
                ${imagenVideo}
                <p>${articleText} <button id="like-button" class="like-button">
                <i class="far fa-heart"></i>
                </button></p>
                <p><a title="back" class="back" href='/'><- Go Back</a></p>
                
        
        </div>
    `;
  const likeButton = document.getElementById("like-button");

  setInitialLikeValue(likeButton, isLiked(id));

  likeButton.addEventListener("click", () => {
    likeButton.children[0].classList.toggle("fas");
    toggleLike(id);
  });

  return articleDetail;
};

export default {
  updateArticleDetail
};
