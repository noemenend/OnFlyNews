import './header-styles.scss'
import logoImage from 'assets/balloon-fumetto-png.png';


export const makeHeader = ({title}) =>{
const header =document.createElement('nav');
header.innerHTML=`<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#">
<img src=${logoImage} class="d-inline-block align-top logo" alt="">${title}</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavDropdown">
  <ul class="navbar-nav ml-auto">
    <li class="nav-item active">
      <a class="nav-link" href="#"><i class="fas fa-home"></i>Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><i class="fas fa-sign-in-alt"></i>Sign up</a>
    </li>
  </ul>
  <form class="form-inline my-2 my-lg-0">
  <input class="form-control mr-sm-2" type="text" placeholder="Search">
  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form>
</div>
</nav>`;
   return header;

};

export default {
    makeHeader
};
