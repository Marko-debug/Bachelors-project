import {getButtons} from './buttons/showBlock.js';
import {chooseElement} from './components/chooseShape.js';

window.writing = function writing(event){
    event.preventDefault();
}

window.addEventListener("load", (e)=>{
    e.preventDefault();
    
    for(const button of getButtons)
        button.ref.addEventListener('click', () => chooseElement(button.shape))
})