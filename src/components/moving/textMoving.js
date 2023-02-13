import { allElements } from "../chooseShape.js"

export function textMoving(event){
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    let objIndex = allElements.findIndex(obj => obj.id == event.target.id);
    const svg = allElements[objIndex];
    let positionDiv = document.getElementById(event.target.id)
    dragMouseDown()

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.pageX;
        pos4 = e.pageY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }
      
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        // calculate the new cursor position:
        pos1 = pos3 - e.pageX;
        pos2 = pos4 - e.pageY;
        pos3 = e.pageX;
        pos4 = e.pageY;
        
        positionDiv.parentNode.style.paddingTop = (svg.top - pos2) + "px";
        positionDiv.parentNode.style.marginLeft = (svg.left - pos1) + "px";
        
        //update instance
        svg.top = (svg.top - pos2);
        svg.left = (svg.left - pos1);
    }   

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}