  import {select, edit} from "./selectActions/select.js";
  import { allElements } from "./chooseShape.js";

  export function removeElement(event){
    if(select.length === 0) return;
    if(edit.length !== 0) return;
    const popped = select.pop();
    const element = document.getElementById(popped.id) 
    let objIndex = allElements.findIndex(obj => obj.id == popped.id);
    allElements.splice(objIndex, 1);
    // console.log("it should not be here")
    if(event.key === 'Delete' && element){
      element.parentNode.removeChild(element)
      console.log("removed object")
    }
  }