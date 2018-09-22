export const appendComponent = (parent,components) => {
    components.forEach( componente => {
        parent.appendChild(componente);
    })
}

export const sleep = time => new Promise(response => setTimeout(response, time));


export default {
    appendComponent
  };

 

