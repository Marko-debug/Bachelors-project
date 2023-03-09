  import {select, edit} from "../selectActionsAndWriting/select.js";
  import { allElements } from "../chooseShape.js";

  export function removeElement(event){
    if(select.length === 0 || event.key === 'Backspace') return;
    if(edit.length !== 0) return;
    const popped = select.pop();
    let element = document.getElementById(popped.id) 
    let objIndex = allElements.findIndex(obj => obj.id == popped.id);
    allElements.splice(objIndex, 1);
    if(event.key === 'Delete' && element){
      element.parentNode.removeChild(element)
      console.log("removed object")
      return;
    }

    element = document.getElementById(popped.childNodes[0].id) 
    objIndex = allElements.findIndex(obj => obj.id == popped.childNodes[0].id);
    if(event.key === 'Delete' && element){
      popped.parentNode.parentNode.parentNode.removeChild(popped.parentNode.parentNode)
      console.log("removed object")
    }
  }