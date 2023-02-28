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

    //when it is svg-text, because it has different structure, but structure is possible change, but it should be change from genereting and it should be like this:
    // <g id="0795" class="svg-text" onmousedown="svgMoving(event)" style="visibility: visible; cursor: move;">
    //   <g style="visibility: visible; cursor: move;">
    //     <foreignObject pointer-events="none" width="100%" height="100%" style="overflow: visible; text-align: left;">
    //       <div style="display: flex; padding-top: 150px; margin-left: 600px;">
    //         <div id="0795" class="text" ondblclick="writingText(event)" onmousedown="svgMoving(event)" style="display: inline-block; color: rgb(0, 0, 0); font-size: 20px; 
    //   font-family: Georgia, serif; pointer-events: all;">
    //           Text
    //         </div>
    //       </div>
    //     </foreignObject>
    //   </g>
    // </g>
    //and other shapes should have onmousedown in text, because it wont move when i click on text in shapes
    //but without change of svg-text structure, deleting works only with this

    element = document.getElementById(popped.childNodes[0].id) 
    objIndex = allElements.findIndex(obj => obj.id == popped.childNodes[0].id);
    if(event.key === 'Delete' && element){
      popped.parentNode.parentNode.parentNode.removeChild(popped.parentNode.parentNode)
      console.log("removed object")
    }
  }