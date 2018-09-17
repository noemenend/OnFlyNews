import './container-styles.scss';

export const makeContainer = () =>{
    const container= document.createElement('div');
    container.classList.add('container');
    return container;
};

export default {
    makeContainer
}