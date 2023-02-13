import { allElements } from "../chooseShape.js"
import { textMoving } from "./textMoving.js"

window.svgMoving = function svgMoving(event){
    if(event.target.className === "svg-text"){textMoving(event);return;}
    if(event.target.parentNode.className.baseVal === "svg-physically-flow")return;
    if(event.target.parentNode.className.baseVal === "svg-physically-flow-broken")return;
    
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    let objIndex = allElements.findIndex(obj => obj.id == event.target.parentNode.id);
    const svg = allElements[objIndex];
    let path = event.target;
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
        
        calculateChanges(e);
        
        if(event.target.parentNode.className.baseVal === "svg-parallel"){

            //set and changed coordinations
            path.setAttribute("d", svg.getPath); 
        }
        if(event.target.parentNode.className.baseVal === "svg-rediraction"){
            path.setAttribute("d", svg.getPath); 
            
            svg.xLine8 = svg.xLine8 - svg.valueX;
            svg.yLine8 = svg.yLine8 - svg.valueY;
        }
        if(event.target.parentNode.className.baseVal === "svg-end-of-two-processes"){

            //set and changed coordinations
            path.setAttribute("cx", svg.getCX);
            path.setAttribute("cy", svg.getCY);
            const lines = path.parentNode.children[1];
            lines.setAttribute("d", svg.getPath); 
            
            svg.cx = svg.cx - svg.valueX;
            svg.cy = svg.cy - svg.valueY;
            svg.xMove1 = svg.xMove1 - svg.valueX;
            svg.yMove1 = svg.yMove1 - svg.valueY;
            svg.xLine1 = svg.xLine1 - svg.valueX;
            svg.yLine1 = svg.yLine1 - svg.valueY;
            svg.xMove2 = svg.xMove2 - svg.valueX;
            svg.yMove2 = svg.yMove2 - svg.valueY;
            svg.xLine2 = svg.xLine2 - svg.valueX;
            svg.yLine2 = svg.yLine2 - svg.valueY;
            return; 
        }
        if(event.target.parentNode.className.baseVal === "svg-end-of-three-processes"){

            //set and changed coordinations
            path.setAttribute("cx", svg.getCX);
            path.setAttribute("cy", svg.getCY);
            const lines = path.parentNode.children[1];
            lines.setAttribute("d", svg.getPath); 
            
            svg.cx = svg.cx - svg.valueX;
            svg.cy = svg.cy - svg.valueY;
            svg.xMove1 = svg.xMove1 - svg.valueX;
            svg.yMove1 = svg.yMove1 - svg.valueY;
            svg.xLine1 = svg.xLine1 - svg.valueX;
            svg.yLine1 = svg.yLine1 - svg.valueY;
            svg.xMove2 = svg.xMove2 - svg.valueX;
            svg.yMove2 = svg.yMove2 - svg.valueY;
            svg.xLine2 = svg.xLine2 - svg.valueX;
            svg.yLine2 = svg.yLine2 - svg.valueY;
            svg.xMove3 = svg.xMove3 - svg.valueX;
            svg.yMove3 = svg.yMove3 - svg.valueY;
            svg.xLine3 = svg.xLine3 - svg.valueX;
            svg.yLine3 = svg.yLine3 - svg.valueY;
            return; 
        }
        if(event.target.parentNode.className.baseVal === "svg-input"){
            path.setAttribute("d", svg.getPath); 
        }

        svg.xMove = svg.xMove - svg.valueX;
        svg.yMove = svg.yMove - svg.valueY;
        svg.xLine1 = svg.xLine1 - svg.valueX;
        svg.yLine1 = svg.yLine1 - svg.valueY;
        svg.xLine2 = svg.xLine2 - svg.valueX;
        svg.yLine2 = svg.yLine2 - svg.valueY;
        svg.xLine3 = svg.xLine3 - svg.valueX;
        svg.yLine3 = svg.yLine3 - svg.valueY;
        svg.xLine4 = svg.xLine4 - svg.valueX;
        svg.yLine4 = svg.yLine4 - svg.valueY;
        svg.xLine5 = svg.xLine5 - svg.valueX;
        svg.yLine5 = svg.yLine5 - svg.valueY;
        svg.xLine6 = svg.xLine6 - svg.valueX;
        svg.yLine6 = svg.yLine6 - svg.valueY;
        svg.xLine7 = svg.xLine7 - svg.valueX;
        svg.yLine7 = svg.yLine7 - svg.valueY;
        return;
    }
      
    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function calculateChanges(e){
        if(svg.name == "svg-end-of-two-processes" || svg.name == "svg-end-of-three-processes"){
            let valueX = svg.cx - (e.pageX);
            let valueY = svg.cy - (e.pageY);

            svg.valueX = valueX;
            svg.valueY = valueY; 
        }
        else{
            let valueX = svg.xMove - (e.pageX);
            let valueY = svg.yMove - (e.pageY);
    
            svg.valueX = valueX;
            svg.valueY = valueY; 
        }
    }
}