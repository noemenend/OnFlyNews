import './article-detail-component.scss';

export const updateArticleDetail = ({ title, img, video, articleText,authorname,authorprofileImg} =
     { title: 'No title', img: 'http://placehold.it/750x300', articleSummary:'No article' }) => {

        var imgAvatar =authorprofileImg;
        if (!imgAvatar) {
          imgAvatar='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
        }

        var imagenVideo;

        if (!video) {
            imagenVideo = `<figure>
              <img class="card-img-top img-fluid rounded center" src=${img} alt="Card image cap">
              <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
              </figure>`;
          } else {
            imagenVideo = `<figure>
            <div class="embed-responsive embed-responsive-16by9 rounded w-100">
            <iframe class="embed-responsive-item" src=${video} allowfullscreen></iframe>
            </div>`;
          }
    const articleDetail = document.getElementById('article-detail');
    articleDetail.innerHTML = `
        <div class="col-10 mx-auto">
                <h2 class="title">${title}</h2>
                <div class="publicated">Publicado por <span class="postAuthor">${authorname} <img src=${imgAvatar} class="avatar img-responsive"></div>
                ${imagenVideo}
                <p>${articleText}</p>
        </div>
    `;
    return articleDetail;
  };
  
  export default {
    updateArticleDetail
  };