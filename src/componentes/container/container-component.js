import './container-styles.scss';
import {appendComponent} from 'utils/utils.js';

export const makeContainer = () =>{
    const container= document.createElement('div');
    container.classList.add('container');
    return container;
};

export default {
    makeContainer
}