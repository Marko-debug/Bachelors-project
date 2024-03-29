import { allElements } from "../chooseShape.js"
import { rotationArrows1, rotationArrows2} from "./rotation/rotationArrows.js"
import { rotationArrowsBroken1, rotationArrowsBroken2 } from "./rotation/rotationArrowsBroken.js"

window.scaleSVG = function scaleSVG(event) {
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
        
        if(event.target.className.baseVal === "dot1"){
            // update instance of physically-flow-broken
            if(event.target.parentNode.className.baseVal === "svg-information-flow-broken"){
                dot1Broken(e, event, svg)
                return;
            }
            if(event.target.parentNode.className.baseVal === "svg-sequential-flow-broken"){
                dot1Broken(e, event, svg)
                return;
            }
            if(event.target.parentNode.className.baseVal === "svg-physically-flow-broken"){
                dot1Broken(e, event, svg)
                return;
            }
            let valueX = svg.objects[0].xLine1 - (e.pageX);
            let valueY = svg.objects[0].yLine1 - (e.pageY);
    
            svg.valueX = valueX;
            svg.valueY = valueY; 
            
            const linePath = event.target.parentNode.children[0];
            linePath.setAttribute("d", svg.getPathLine1); 

            const arrowPath = event.target.parentNode.children[1];
            rotationArrows1(svg, arrowPath)

            const circle = event.target.parentNode.children[2];
            circle.setAttribute("cx", svg.getPathDot1X)
            circle.setAttribute("cy", svg.getPathDot1Y)

            // update instance of physically-flow
            svg.objects[0].xLine1 = svg.objects[0].xLine1 - svg.valueX;
            svg.objects[0].yLine1 = svg.objects[0].yLine1 - svg.valueY;
            svg.objects[1].xMove = svg.objects[1].xMove - svg.valueX;
            svg.objects[1].yMove = svg.objects[1].yMove - svg.valueY;
            svg.objects[1].xLine1 = svg.objects[1].xLine1 - svg.valueX;
            svg.objects[1].yLine1 = svg.objects[1].yLine1 - svg.valueY;
            svg.objects[1].xLine2 = svg.objects[1].xLine2 - svg.valueX;
            svg.objects[1].yLine2 = svg.objects[1].yLine2 - svg.valueY;
            svg.objects[1].xLine3 = svg.objects[1].xLine3 - svg.valueX;
            svg.objects[1].yLine3 = svg.objects[1].yLine3 - svg.valueY;
            svg.objects[2].x = svg.objects[2].x - svg.valueX;
            svg.objects[2].y = svg.objects[2].y - svg.valueY;
        }
        if(event.target.className.baseVal === "dot2"){

            let valueX = svg.objects[0].xMove - (e.pageX);
            let valueY = svg.objects[0].yMove - (e.pageY);
    
            svg.valueX = valueX;
            svg.valueY = valueY;

            const linePath = event.target.parentNode.children[0];
            linePath.setAttribute("d", svg.getPathLine2); 
            const arrowPath = event.target.parentNode.children[1];
            rotationArrows2(svg, arrowPath)

            const circle = event.target.parentNode.children[3];
            circle.setAttribute("cx", svg.getPathDot2X)
            circle.setAttribute("cy", svg.getPathDot2Y)

            // update instance of physically-flow-broken
            if(event.target.parentNode.className.baseVal === "svg-information-flow-broken"){
                dot2Broken(svg, event)
                return;
            }
            if(event.target.parentNode.className.baseVal === "svg-sequential-flow-broken"){
                dot2Broken(svg, event)
                return;
            }
            if(event.target.parentNode.className.baseVal === "svg-physically-flow-broken"){
                dot2Broken(svg, event)
                return;
            }

            // update instance of physically-flow
            svg.objects[0].xMove = svg.objects[0].xMove - svg.valueX;
            svg.objects[0].yMove = svg.objects[0].yMove - svg.valueY;
            svg.objects[3].x = svg.objects[3].x - svg.valueX;
            svg.objects[3].y = svg.objects[3].y - svg.valueY;
        }
    }
        
    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function dot1Broken(e, event, svg){
    let valueX = svg.objects[0].xLine2 - (e.pageX);
    let valueY = svg.objects[0].yLine2 - (e.pageY);

    svg.valueX = valueX;
    svg.valueY = valueY; 
    
    const linePath = event.target.parentNode.children[0];
    linePath.setAttribute("d", svg.getPathLine1); 
    const arrowPath = event.target.parentNode.children[1];
    rotationArrowsBroken1(svg, arrowPath)

    const circle = event.target.parentNode.children[2];
    circle.setAttribute("cx", svg.getPathDot1X)
    circle.setAttribute("cy", svg.getPathDot1Y)

    svg.objects[0].xLine1 = svg.objects[0].xLine1 - svg.valueX;

    svg.objects[0].xLine2 = svg.objects[0].xLine2 - svg.valueX;
    svg.objects[0].yLine2 = svg.objects[0].yLine2 - svg.valueY;

    svg.objects[1].xMove = svg.objects[1].xMove - svg.valueX;
    svg.objects[1].yMove = svg.objects[1].yMove - svg.valueY;

    svg.objects[1].xLine1 = svg.objects[1].xLine1 - svg.valueX;
    svg.objects[1].yLine1 = svg.objects[1].yLine1 - svg.valueY;

    svg.objects[1].xLine2 = svg.objects[1].xLine2 - svg.valueX;
    svg.objects[1].yLine2 = svg.objects[1].yLine2 - svg.valueY;

    svg.objects[1].xLine3 = svg.objects[1].xLine3 - svg.valueX;
    svg.objects[1].yLine3 = svg.objects[1].yLine3 - svg.valueY;

    svg.objects[2].x = svg.objects[2].x - svg.valueX;
    svg.objects[2].y = svg.objects[2].y - svg.valueY;
}

function dot2Broken(svg, event){

    const arrowPath = event.target.parentNode.children[1];
    rotationArrowsBroken2(svg, arrowPath)

    svg.objects[0].xMove = svg.objects[0].xMove - svg.valueX;
    svg.objects[0].yMove = svg.objects[0].yMove - svg.valueY;
    svg.objects[0].yLine1 = svg.objects[0].yLine1 - svg.valueY;
    svg.objects[3].x = svg.objects[3].x - svg.valueX;
    svg.objects[3].y = svg.objects[3].y - svg.valueY;
}