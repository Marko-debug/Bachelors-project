import { removeSelect} from './selectRemoveAll.js';
import { removeElement} from '../remove.js';
import { allElements } from '../chooseShape.js';

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
//there is a problem when i click on red circle of physically flow broken 
window.selectElement = function selectElement(event){
    event.preventDefault();

    if(!event.target.parentNode.id)return;
    if(edit.length === 1){
         const popped = edit.pop();
         popped.removeAttribute("contenteditable");
         popped.setAttribute("onmousedown", "svgMoving(event)")
     };
    
    console.log("selected...");
    const name = event.target.parentNode.className.baseVal;

    if(select.length === 1){
        const popped = select.pop();
        const poppedName = popped.className.baseVal;

        if(poppedName == "svg-process"){
            popped.children[6].style.visibility = 'hidden';
            popped.children[7].style.visibility = 'hidden';
            popped.children[8].style.visibility = 'hidden';
            popped.children[9].style.visibility = 'hidden';
        }
        if(poppedName == "svg-event-transition"){
            popped.children[2].style.visibility = 'hidden';
            popped.children[3].style.visibility = 'hidden';
            popped.children[4].style.visibility = 'hidden';
            popped.children[5].style.visibility = 'hidden';
        }
        if(poppedName == "svg-physically-flow" || poppedName == "svg-physically-flow-broken"){
            popped.children[2].style.visibility = 'hidden';
            popped.children[3].style.visibility = 'hidden';
        }
    }

    if(name == "svg-process" ){
        event.target.parentNode.children[6].style.visibility = 'visible';
        event.target.parentNode.children[7].style.visibility = 'visible';
        event.target.parentNode.children[8].style.visibility = 'visible';
        event.target.parentNode.children[9].style.visibility = 'visible';
    }
    if(name == "svg-event-transition"){
        event.target.parentNode.children[2].style.visibility = 'visible';
        event.target.parentNode.children[3].style.visibility = 'visible';
        event.target.parentNode.children[4].style.visibility = 'visible';
        event.target.parentNode.children[5].style.visibility = 'visible';
    }
    if(name == "svg-physically-flow" || name == "svg-physically-flow-broken"){
        event.target.parentNode.children[2].style.visibility = 'visible';
        event.target.parentNode.children[3].style.visibility = 'visible';
    }
    select.push(event.target.parentNode)
}

window.selectText = function selectText(event){
    console.log(event.target.id)
    event.preventDefault();
    if(!event.target.id)return;
    
    console.log("selected...");
    const elmnt = document.getElementById(event.target.id);

    if(edit.length === 1){
        const popped = edit.pop();
        popped.removeAttribute("contenteditable");
        popped.setAttribute("onmousedown", "svgMoving(event)")
    }

    if(elmnt.className === "svg-text" || elmnt.className === "text"){
        elmnt.removeAttribute("onmousedown")
        elmnt.setAttribute("contenteditable", "true");
        edit.push(elmnt)
        return;
    }
}

export {select}

//there is a problem when i click on red circle of physically flow broken 
// window.svgSelect = function svgSelect(e){

//     console.log(e.target.parentNode)
//     // if(select.children[0].id == e.target.parentNode.id)return;

//     if(select.length === 1){
//         const popped = select.pop();
//         console.log("hello")
//         popped.children[2].style.visibility = 'hidden';
//         popped.children[3].style.visibility = 'hidden';
//     }
//     select.push(e.target.parentNode)
//     e.target.parentNode.children[2].style.visibility = 'visible';
//     e.target.parentNode.children[3].style.visibility = 'visible';
// }
// if(select.length === 1){
    
//     const popped = select.pop()
//     if(popped.childElementCount === 1){
//         popped.children[0].hidden = true;
//     }
//     if(popped.className === "process" && popped.childElementCount === 6){
//         popped.children[2].hidden = true;
//         popped.children[3].hidden = true;
//         popped.children[4].hidden = true;
//         popped.children[5].hidden = true;
//     }
//     if(popped.className !== "select-circle" && popped.childElementCount === 4){
//         popped.children[0].hidden = true;
//         popped.children[1].hidden = true;
//         popped.children[2].hidden = true;
//         popped.children[3].hidden = true;
//     }
// }
// select.push(elmnt)
// if(elmnt.childElementCount === 1){
//     elmnt.children[0].hidden = false;
// }
// if(elmnt.className === "process" && elmnt.childElementCount === 6){
//     elmnt.children[2].hidden = false;
//     elmnt.children[3].hidden = false;
//     elmnt.children[4].hidden = false;
//     elmnt.children[5].hidden = false;
// }
// if(elmnt.className !== "select-circle" && elmnt.childElementCount === 4){
//     elmnt.children[0].hidden = false;
//     elmnt.children[1].hidden = false;
//     elmnt.children[2].hidden = false;
//     elmnt.children[3].hidden = false;
// }