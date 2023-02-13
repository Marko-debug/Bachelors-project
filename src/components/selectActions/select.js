import { removeSelect} from './selectRemoveAll.js';
import { removeElement} from '../remove.js';

//array select save final clicked element
let select = [];

//array edit save div text, which eas hidden
let edit = [];

//remove resizing dots of object when is clicked outside of element
const divElements = document.querySelector('.elements'); 
const svgElements = document.querySelector('.svg-elements'); 

divElements.addEventListener('click', (event)=>removeSelect(event, select))

// listener for removing elements by pressing keyboard key d 
document.addEventListener("keydown", (event)=>removeElement(event, select))

//function for showing resizing dots of object
window.selectElement = function selectElement(event){
    event.preventDefault();
    if(!event.target.id)return;
    
    console.log("selected...");
    const elmnt = document.getElementById(event.target.id);

    if(edit.length === 1){
        const popped = edit.pop();
        console.log(popped.innerHTML)
        popped.removeAttribute("contenteditable");
        popped.setAttribute("onmousedown", "svgMoving(event)")
    }

    if(elmnt.className === "svg-text"){
        elmnt.removeAttribute("onmousedown")
        elmnt.setAttribute("contenteditable", "true");
        edit.push(elmnt)
        return;
    }

    if(select.length === 1){
        
        const popped = select.pop()
        if(popped.childElementCount === 1){
            popped.children[0].hidden = true;
        }
        if(popped.className === "process" && popped.childElementCount === 6){
            popped.children[2].hidden = true;
            popped.children[3].hidden = true;
            popped.children[4].hidden = true;
            popped.children[5].hidden = true;
        }
        if(popped.className !== "select-circle" && popped.childElementCount === 4){
            popped.children[0].hidden = true;
            popped.children[1].hidden = true;
            popped.children[2].hidden = true;
            popped.children[3].hidden = true;
        }
    }
    select.push(elmnt)
    if(elmnt.childElementCount === 1){
        elmnt.children[0].hidden = false;
    }
    if(elmnt.className === "process" && elmnt.childElementCount === 6){
        elmnt.children[2].hidden = false;
        elmnt.children[3].hidden = false;
        elmnt.children[4].hidden = false;
        elmnt.children[5].hidden = false;
    }
    if(elmnt.className !== "select-circle" && elmnt.childElementCount === 4){
        elmnt.children[0].hidden = false;
        elmnt.children[1].hidden = false;
        elmnt.children[2].hidden = false;
        elmnt.children[3].hidden = false;
    }
}