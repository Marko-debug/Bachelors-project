import {getButtons} from './buttons/showBlock.js';
import {chooseElement} from './components/chooseShape.js';

//to create function for moving object by keyboard key
//to create inserting text to elements 
//to create inserting to element
//movement main element with subsets
//to create movement for svg
//to create joinning array with elements

window.writing = function writing(event){
    event.preventDefault();
}

window.addEventListener("load", (e)=>{
    e.preventDefault();
    
    for(const button of getButtons)
        button.ref.addEventListener('click', () => chooseElement(button.shape))
})