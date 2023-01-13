import {getButtons} from './components/showBlock.js';
import {chooseElement} from './components/chooseShape.js';
// import {resize} from './components/resize.js';
//to create function for moving object by keyboard key

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