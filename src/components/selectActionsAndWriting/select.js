import { removeElement } from '../removing/remove.js';
import { updateText } from './updateText/updateText.js';
import { setTextWriting } from './updateText/setTextWriting.js'; 
import { showManipulableDots, hideManipulableDots } from './showAndHideManipulableDots.js';
import { allElements } from '../chooseShape.js';

//array select save final clicked element
let select = [];

//array edit save div text, which eas hidden
let edit = [];

// listener for removing elements by pressing keyboard key delete 
document.addEventListener("keydown", (event)=>removeElement(event))

//function for showing resizing dots of object
window.selectElement = function selectElement(event){
    event.preventDefault();
    
    console.log("selected...");
    let name;
    //when is clicked on main area
    
    if(event.target.className.baseVal === "svg-elements"){
        name = event.target.className.baseVal;
        if(select.length === 1){
            hideManipulableDots();
        }
        if(edit.length === 1){
            updateText();
        };
    }
    //when is clicked into some shape
    else if(event.target.className === "svg-text"){
        name = event.target.className.baseVal;
        if(select.length === 1){
            hideManipulableDots();
        }

        //get svg-text back
        if(edit.length === 1){
            updateText();
        };
        //push element to an array select[]
        select.push(event.target.parentNode)
    }
    else{
        name = event.target.parentNode.className.baseVal;
        if(select.length === 1){
            hideManipulableDots();
        }
        showManipulableDots(event, name)
    
        //checking, whether it is not svg-text
        if(!event.target.parentNode.id)return;
        console.log(name)

        //update text for shape
        if(edit.length === 1){
            updateText();
        };
        //push element to an array select[]
        select.push(event.target.parentNode)
    }
    console.log(allElements);
}

//ondblclick event set text up to change content
window.writingText = function writingText(event){
    event.preventDefault();

    if(!event.target.id)return;
    const elmnt = document.getElementById(event.target.id);

    //to get svg-elements back 
    if(edit.length === 1){
        updateText();
    }
    //to change svg-text to contentedible element
    if(elmnt.className === "svg-text" || elmnt.className === "text"){
        setTextWriting(elmnt);
        return;
    }
}
export {select, edit}

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