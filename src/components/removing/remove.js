  import {select, edit} from "../selectActionsAndWriting/select.js";
  import { allElements } from "../chooseShape.js";

  export function removeElement(event){
    if(select.length === 0) return;
    if(edit.length !== 0) return;
    const popped = select.pop();
    console.log(popped)
    let element;
    // if(){
    //   element = document.getElementById(popped.childrenNode.childrenNode.id) 
    // }
    // else{
    //   element = document.getElementById(popped.id) 
    // }
    element = document.getElementById(popped.id) 
    let objIndex = allElements.findIndex(obj => obj.id == popped.id);
    allElements.splice(objIndex, 1);
    // console.log("it should not be here")
    if(event.key === 'Delete' && element){
      element.parentNode.removeChild(element)
      console.log("removed object")
    }
  }