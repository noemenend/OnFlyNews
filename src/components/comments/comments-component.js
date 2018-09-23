
import CommentService from 'services/comment-service';
import {createComment} from 'components/comment/comment-component';
import './comments-component-styles.scss';
import {getFormData} from 'utils/utils';
import PubSub from 'pubsub-js';

export const createComments=({id})=>{
    const commentServiceInstance = new CommentService();
    const comments = document.getElementById('comments-list');
    commentServiceInstance.getCommentsByArticleId(id).then((commentJSON) => {
        if (commentJSON.length === 0) {
          comments.innerHTML='<div class="container-comment">No Comments</div>'
        } else {
            commentJSON.map(commentData => {
              comments.appendChild(createComment(commentData));});
        }
      });

      handleCommentsForm(commentServiceInstance,id);
}

const handleCommentsForm = (commentServiceInstance,id) => {
  const commentForm = document.getElementById('commentForm');
  const submitFormButton = document.getElementById('submit');
  const formInputs = commentForm.getElementsByClassName('form-control');
  var errors =document.getElementById('errors');

  submitFormButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (validaCampos()) {
      errors.classList.add('active');
    submitFormButton.disable = true;
    commentServiceInstance.postComment(getFormData(formInputs,id)).then(
      (response) => {
        if (response === true) {
          commentForm.reset();
          PubSub.publish('reload');
        }
      }
    );
  } else {
    errors.classList.remove('active');
  }
  });
};

function validaCampos(){

  var errors =document.getElementById('errors');
  errors.innerHTML='';

   // valid email pattern
   //var eregex = '/^([a-zA-Z0-9_.-+])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/';


  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  var email = document.getElementById('email').value;
  var comment = document.getElementById('comment').value;
  
 if(name === ""){
      errors.innerHTML='<p>Please, fill the name</p>';
      return false;
  }
 if(surname === "") {
   errors.innerHTML='<p>Please, fill the surnames</p>';
   return false;
 }
 if(email === "") {
   errors.innerHTML='<p>Please, fill the email</p>';
   return false;
 } else {
   if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
     errors.innerHTML='<p>Please, fill the email as follows aaaaa@bbbb.com</p>';
     return false;
   }
 }
 if(comment.trim() === "") {
  errors.innerHTML='<p>Please, write a comment</p>';
  return false;
}
return true;

  }


export default{
  createComments
}
