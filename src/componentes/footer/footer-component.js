import './footer-styles.scss';

export const makeFooter = () => {
    const footer = document.createElement('footer');
    footer.innerHTML=`<div id="footer">
    <div class="container">
    <p class="footer-block">&copy; 2018 OnFlyNews 
    <button type="button" class="btn btn-fb social-media-button"><i class="fa fa-facebook"></i></button>
    <button type="button" class="btn btn-tw social-media-button"><i class="fa fa-twitter"></i></button>
    </p>
    </div>
  </div>`;
    return footer;
}

export default {
    makeFooter
}