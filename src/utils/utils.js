export const appendComponent = (parent,components) => {
    components.forEach( componente => {
        parent.appendChild(componente);
    })
}

export default {
    appendComponent
}