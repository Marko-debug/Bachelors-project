import {getButtons} from './components/showBlock.js';
import {chooseElement} from './components/chooseShape.js';
import {resize} from './components/resize.js';
import {removeDown, removeUp} from './components/remove.js';

window.selection = function selection(event){
    event.preventDefault();
    const reference = event.target.id;
    event.target.children[0].hidden = false;
    event.target.children[1].hidden = false;
    event.target.children[2].hidden = false;
    event.target.children[3].hidden = false;
}

window.dragElement = function dragElement(event) {
    if(event){
          
        // if(event.target.childElementCount === 1){
        //     event.target.children[0].hidden = false;
        // }
        // if(event.target.childElementCount === 4){
            // }
        if(event.target.className !== "select-circle"){
            event.target.children[0].hidden = false;
            event.target.children[1].hidden = false;
            event.target.children[2].hidden = false;
            event.target.children[3].hidden = false;
        }

        // document.addEventListener('keydown', (event) => removeDown(event), false);
        const referenceDiv = document.querySelector(`.${event.target.className}`)
        document.addEventListener('keyup', (event) => removeUp(event, referenceDiv), false);

    }else{
        // here is hidding function, but it has not work yet because of references on alls id elements
        // if(event.target.childElementCount === 1){
        //     event.target.children[0].hidden = true;
        // }
        // if(event.target.childElementCount === 4){
        //     event.target.children[0].hidden = true;
        //     event.target.children[1].hidden = true;
        //     event.target.children[2].hidden = true;
        //     event.target.children[3].hidden = true;
        // }
    }
}
let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
window.dragMouseDown = function dragMouseDown(event) {
    // get the mouse cursor position at startup:
    pos3 = event.clientX;
    pos4 = event.clientY;
    event.preventDefault();
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
}

function elementDrag(event) {
    event.preventDefault();
    if(event.target.className === "navbar")return;
    else if(event.target.className === "select-circle"){
        resize(event)
    }
    else{

        // calculate the new cursor position:
        pos1 = pos3 - event.clientX;
        pos2 = pos4 - event.clientY;
        pos3 = event.clientX;
        pos4 = event.clientY;
        // set the element's new position:
        event.target.style.top = (event.target.offsetTop - pos2) + "px";
        event.target.style.left = (event.target.offsetLeft - pos1) + "px";
    }
}

function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
}

window.writing = function writing(event){
    event.preventDefault();
    console.log(Math. floor(Math. random() * 100))
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