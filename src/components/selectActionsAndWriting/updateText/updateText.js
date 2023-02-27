import { edit } from '../select.js'
import { allElements } from '../../chooseShape.js';
import { updateTextWithMoreRows } from './updateTextWithMoreRows.js';

//set text attributes to update content Text and back to original attributes
export function updateText(){
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

    //this condition change divs to br in text
    
    if(popped.children.length > 1){
        console.log(popped.children.length)
        console.log(popped.children)
        updateTextWithMoreRows(popped);
    }

    const prefix = popped.id.split('-');
    // update content of instance
    if(prefix[0] == "timer") svg.contentTimer = popped.innerHTML;
    else if(prefix[0] == "owner") svg.contentOwner = popped.innerHTML;
    else if(prefix[0] == "process") svg.contentProcess = popped.innerHTML;
    else svg.contentText = popped.innerHTML;
}