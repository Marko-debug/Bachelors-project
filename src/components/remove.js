  import {select} from "./selectActions/select.js";

  export function removeElement(event){
    if(select.length === 0) return;
    const popped = select.pop();
    console.log(popped.id)
    const element = document.getElementById(popped.id) 
    if(event.key === 'Delete' && element){
      console.log(element)
      console.log(element.parentNode)
      element.parentNode.removeChild(element)
      console.log("removed object")
    }
  }