
//importamos el css dentro de nuestro js
import 'styles/base.scss';
import 'bootstrap';
import { makeHeader } from 'componentes/header/header-component';
//import {makeImage} from 'componentes/image/image-component';
import {appendComponent} from 'utils/utils.js';
import {makeFooter} from 'componentes/footer/footer-component';
import {renderArticles} from 'componentes/articles/articles-component';
//import {makeVideo} from './componentes/video/video-component';
document.addEventListener('DOMContentLoaded', () =>{
     const components = [
        makeHeader({title:'OnFlyNews'}),
        renderArticles(),
        //makeVideo(),
        makeFooter()
     ];
    appendComponent(document.body, components);
});