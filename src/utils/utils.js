export const appendComponent = (parent,components) => {
    components.forEach( componente => {
        parent.appendChild(componente);
    })
}

export const sleep = time => new Promise(response => setTimeout(response, time));


export const reportValidity = (form) => {
    if (HTMLFormElement.prototype.reportValidity) {
      form.reportValidity();
    } else {
      HTMLFormElement.prototype.reportValidity = () => {
        if (form.checkValidity()) return true;
        const btn = document.createElement('button');
        form.appendChild(btn);
        btn.click();
        form.removeChild(btn);
        return false;
      };
    }
  };
  
  export const getFormData = (formInputs,id) => {
    const formData = {};
    for (let i = 0; i < formInputs.length; i += 1) {
      const input = formInputs[i];
      formData[input.name] = input.value;
      
    }
    formData["idArticle"]= id;
    return formData;
  };

  
  
  export const preventDefault = (event) => {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false; // eslint-disable-line no-param-reassign
    }
  };
  
  
export default {
    appendComponent,
    getFormData
  };

 

