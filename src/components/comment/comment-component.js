export const createComment = ({
  id,
  idArticle,
  name,
  surname,
  comment,
  email
}) => {
  const ucomment = document.createElement("div");
  ucomment.classList.add("container-comment");
  ucomment.id = "container-comment";
  ucomment.innerHTML = `
    <div class="comment-author"><span class="aname">${name} ${surname} </span> <i id="start" class="fas fa-star"></i>${email}</div>
    <div class="comment-content"><p>${comment}</p></div>`;

  return ucomment;
};

export default {
  createComment
};
