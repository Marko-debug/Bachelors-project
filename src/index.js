import {getButtons} from './components/showBlock.js';
import {chooseElement} from './components/chooseShape.js';
// import {resize} from './components/resize.js';
import {removeDown, removeUp, removeElement, removeSelect} from './components/remove.js';
//to create function for moving object by keyboard key


let select = [];
const divElements = document.querySelector('.elements') 
divElements.addEventListener('click', (event)=>removeSelect(event))

window.dragElement = function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

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
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }
    
      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
}

//function for showing resizing dots of object
window.selectElement = function selectElement(elmnt){

    if(select.length === 1){

        const popped = select.pop()
        if(popped.childElementCount === 1){
            popped.children[0].hidden = true;
        }
        if(popped.className !== "select-circle" && popped.childElementCount === 4){
            popped.children[0].hidden = true;
            popped.children[1].hidden = true;
            popped.children[2].hidden = true;
            popped.children[3].hidden = true;
        }
    }
    
    select.push(elmnt)
    if(elmnt.childElementCount === 1){
        elmnt.children[0].hidden = false;
    }
    if(elmnt.className !== "select-circle" && elmnt.childElementCount === 4){
        elmnt.children[0].hidden = false;
        elmnt.children[1].hidden = false;
        elmnt.children[2].hidden = false;
        elmnt.children[3].hidden = false;
    }

        // document.addEventListener('keydown', () => removeDown(elmnt), false);
        // const referenceDiv = document.getElementById(`.${elmnt.id}`)
        // document.addEventListener('keyup', (event) => removeUp(event, referenceDiv), false);       
}

// window.writing = function writing(event){
//     event.preventDefault();
//     console.log(Math. floor(Math. random() * 100))
// }

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