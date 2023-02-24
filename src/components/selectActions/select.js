import { removeElement} from '../removing/remove.js';
import { allElements } from '../chooseShape.js';

//array select save final clicked element
let select = [];

//array edit save div text, which eas hidden
let edit = [];

//remove resizing dots of object when is clicked outside of element
const divElements = document.querySelector('.elements'); 
const svgElements = document.querySelector('.svg-elements'); 

// listener for removing elements by pressing keyboard key delete 
document.addEventListener("keydown", (event)=>removeElement(event, select))

//function for showing resizing dots of object
//there is a problem when i click on red circle of physically flow broken 
window.selectElement = function selectElement(event){
    event.preventDefault();
    
    console.log("selected...");
    const name = event.target.parentNode.className.baseVal;
    
    if(select.length === 1){
        const popped = select.pop();
        const poppedName = popped.className.baseVal;

        // to hide manipulable dots for specifically elements  
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
        if(poppedName == "svg-information-flow" || poppedName == "svg-information-flow-broken"){
            popped.children[2].style.visibility = 'hidden';
            popped.children[3].style.visibility = 'hidden';
        }
        if(poppedName == "svg-sequential-flow" || poppedName == "svg-sequential-flow-broken"){
            popped.children[2].style.visibility = 'hidden';
            popped.children[3].style.visibility = 'hidden';
        }
        if(poppedName == "svg-split-branches"){
            popped.children[2].style.visibility = 'hidden';
            popped.children[3].style.visibility = 'hidden';
        }
    }

    //to show manipulable dots for specifically elements
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
    if(name == "svg-information-flow" || name == "svg-information-flow-broken"){
        event.target.parentNode.children[2].style.visibility = 'visible';
        event.target.parentNode.children[3].style.visibility = 'visible';
    }
    if(name == "svg-sequential-flow" || name == "svg-sequential-flow-broken"){
        event.target.parentNode.children[2].style.visibility = 'visible';
        event.target.parentNode.children[3].style.visibility = 'visible';
    }
    if(name == "svg-split-branches"){
        event.target.parentNode.children[2].style.visibility = 'visible';
        event.target.parentNode.children[3].style.visibility = 'visible';
    }

    //checking, whether it is not svg-text
    if(!event.target.parentNode.id)return;
    //get svg-text back
    if(edit.length === 1){
        const popped = edit.pop();
        popped.removeAttribute("contenteditable");
        popped.setAttribute("onmousedown", "svgMoving(event)");
        let objIndex = allElements.findIndex(obj => obj.id == popped.id);
        let svg = allElements[objIndex];

        if(popped.className == "svg-text"){
            popped.parentNode.parentNode.parentNode.setAttribute("style", "visibility: visible; cursor: move")
            //update content of instance
            svg.contentText = popped.innerText;
        }

        //checking svg, whether it exists
        if(svg === undefined){
            objIndex = allElements.findIndex(obj => obj.id == popped.parentNode.parentNode.parentNode.parentNode.id);
            svg = allElements[objIndex];
        }
        const prefix = popped.id.split('-');
        // update content of instance
        if(prefix[0] == "timer") svg.contentTimer = popped.innerHTML;
        else if(prefix[0] == "owner") svg.contentOwner = popped.innerHTML;
        else if(prefix[0] == "process") svg.contentProcess = popped.innerHTML;
        else svg.contentText = popped.innerHTML;
    };
    console.log(allElements)
    //push element to an array select[]
    select.push(event.target.parentNode)
}

window.writingText = function writingText(event){
    event.preventDefault();
    if(!event.target.id)return;
    
    const elmnt = document.getElementById(event.target.id);

    //to get svg-elements back 
    if(edit.length === 1){
        const popped = edit.pop();
        popped.removeAttribute("contenteditable");
        popped.setAttribute("onmousedown", "svgMoving(event)")
        popped.parentNode.parentNode.parentNode.setAttribute("style", "visibility: visible; cursor: move")
        let objIndex = allElements.findIndex(obj => obj.id == popped.parentNode.parentNode.parentNode.parentNode.id);
        const svg = allElements[objIndex];
        //checking svg, whether it exists
        if(svg === undefined)return;
        const prefix = popped.id.split('-');
        // update content of instance
        if(prefix[0] == "timer") svg.contentTimer = popped.innerHTML;
        else if(prefix[0] == "owner") svg.contentOwner = popped.innerHTML;
        else if(prefix[0] == "process") svg.contentProcess = popped.innerHTML;
        else svg.contentText = popped.innerHTML;
        console.log(allElements)
    }

    //to change svg-text to contentedible element
    if(elmnt.className === "svg-text" || elmnt.className === "text"){
        elmnt.removeAttribute("onmousedown")
        elmnt.setAttribute("contenteditable", "true");
        elmnt.parentNode.parentNode.parentNode.setAttribute("style", "visibility: visible; cursor: text")
        edit.push(elmnt)
        console.log("writing...");
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