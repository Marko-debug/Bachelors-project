import {resizeElement} from '../scaling/resize.js';
import {allElements} from '../chooseShape.js'
// import {svgMoving} from './svgMoving.js';

window.dragElement = function dragElement(event) {
    event.preventDefault();

    let objIndex = allElements.findIndex(obj => obj.id == event.target.id);

    if(event.target.className === "select-circle"){
        const elmnt = document.getElementById(event.target.parentNode.id);
        dragMouseActions(elmnt);
    }
    else if(event.target.className === "process-time" || event.target.className === "process-owner")return;
    else{
      const elmnt = document.getElementById(event.target.id);
      dragMouseActions(elmnt);
    }

    function dragMouseActions(elmnt) {
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      // elmnt.onmousedown = dragMouseDown;
      dragMouseDown(event)

      function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
      }
      
      function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;

          if(event.target.className === "select-circle")resizeElement(event, pos1, pos2);
          if(!event.target.id)return;
          else{
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

            //update instance
            allElements[objIndex].top = (elmnt.offsetTop - pos2) + "px";
            allElements[objIndex].left = (elmnt.offsetLeft - pos1) + "px";
          }
        }
      
        function closeDragElement() {
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
        }
    }
}

// to make movement by using arrow keys  (it is not working)
// function movementByKeys(){

//   let modifier = 5;
//   rectangle.addEventListener('keydown', (event)=>{
//       const {style} = block;
//       switch (event.key){
//           case 'ArrowUp' : style.top = `${parseInt(style.top) - modifier}px`; break;
//           case 'ArrowDown' : style.top = `${parseInt(style.top) - modifier}px`; break;
//           case 'ArrowLeft' : style.left = `${parseInt(style.left) - modifier}px`; break;
//           case 'ArrowRight' : style.left = `${parseInt(style.left) - modifier}px`; break;
//       }
//   })
// }