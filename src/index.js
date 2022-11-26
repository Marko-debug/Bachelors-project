import {getButtons} from './components/showBlock.js';
import {chooseElement} from './components/chooseShape.js';

window.dragging = function dragging(event){
    event.preventDefault();
     let rect = event.target.getBoundingClientRect();
    //  console.log(event);  
     let x = event.pageX;
     let y = event.pageY;
     event.target.style.left = x + 'px'; 
     event.target.style.top = y + 'px'; 
    }

window.dragStart = function dragStart(event){
    console.log("start");  
}

window.drop = function drop(event){
    event.preventDefault();
    console.log("drop");
}

window.allowDrop = function allowDrop(event){
    event.preventDefault();
    // event.target.style.border = "4px dotted green";     // it is for inserting element into process
}

window.selection = function selection(event){
    event.preventDefault();
    const reference = event.target.id;
    event.target.children[0].hidden = false;
    event.target.children[1].hidden = false;
    event.target.children[2].hidden = false;
    event.target.children[3].hidden = false;
}

window.dragElement = function dragElement(event) {
    event.target.children[0].hidden = false;
    event.target.children[1].hidden = false;
    event.target.children[2].hidden = false;
    event.target.children[3].hidden = false;
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(event.target.id)) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(event.target.id).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    event.target.onmousedown = dragMouseDown;
  }

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
    // set the element's new position:
    e.target.style.top = (e.target.offsetTop - pos2) + "px";
    e.target.style.left = (e.target.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

window.resize = function resize(event){
    event.preventDefault();
    const rect = event.target.getBoundingClientRect();
    
    console.log(event.target.children[0].style.cursor)
    if(event.target.children[0].style.cursor === "nw-resize"){
        console.log(event.target.children[0].style.cursor)
        event.target.style.width = rect.width + "px";
        event.target.style.height = rect.height + "px";
        event.target.style.top = rect.top + "px";
        event.target.style.left = rect.left + "px";
    }
    else if(event.target.children[1].style.cursor === "sw-resize"){
        console.log(event.target.children[1].style.cursor)
        event.target.style.width = rect.width + "px";
        event.target.style.height = rect.height + "px";
        event.target.style.left = rect.left + "px";
    }
    else if(event.target.children[2].style.cursor === "ne-resize"){
        console.log(event.target.children[2].style.cursor)
        event.target.style.width = rect.width + "px";
        event.target.style.height = rect.height + "px";
        event.target.style.top = rect.top + "px";
    }
    else if(event.target.children[0].style.cursor === "se-resize"){
        console.log(event.target.children[3].style.cursor)
        event.target.style.width = rect.width + "px";
        event.target.style.height = rect.height + "px";
    }
    else{
        console.log("bad corner")
    }
}

window.write = function write(event){
    event.preventDefault();
}

window.addEventListener("load", (e)=>{
    e.preventDefault();

    // document.addEventListener("dragstart", function(event) {
    //     event.dataTransfer.setData("text/plain", event.target.id);
    //   });
      
    // it is working but online with html div
    // const element = document.querySelector(`.${event.}`);
    // if(element){
        // const onDrag = ({movementX, movementY}) => {
        //     let getStyle = window.getComputedStyle(element);
        //     let left = parseInt(getStyle.left);
        //     let top = parseInt(getStyle.top);
        //     element.style.left = `${left + movementX}px`;
        //     element.style.top = `${top + movementY}px`;
        // }
    
    //     element.addEventListener('mousedown', ()=>{
    //         element.addEventListener('mousemove', onDrag);
    //     })
    //     document.addEventListener('mouseup', ()=>{
    //         element.removeEventListener('mousemove', onDrag);
    //     })
    // }

    // eventTransition.addEventListener('mousedown', ()=>{
    //     eventTransition.addEventListener('mousemove', onDragU);
    // })
    // document.addEventListener('mouseup', ()=>{
    //     eventTransition.removeEventListener('mousemove', onDragU);
    // })
    
    // -----------------------------------------------------------------------
    // to make move by using arrow keys
    // let modifier = 5;
    // rectangle.addEventListener('keydown', (event)=>{
    //     const {style} = block;
    //     switch (event.key){
    //         case 'ArrowUp' : style.top = `${parseInt(style.top) - modifier}px`; break;
    //         case 'ArrowDown' : style.top = `${parseInt(style.top) - modifier}px`; break;
    //         case 'ArrowLeft' : style.left = `${parseInt(style.left) - modifier}px`; break;
    //         case 'ArrowRight' : style.left = `${parseInt(style.left) - modifier}px`; break;
    //     }
    // })

    for(const button of getButtons)
        button.ref.addEventListener('click', () => chooseElement(button.shape))
})