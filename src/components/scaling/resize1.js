import { allElements } from "../chooseShape.js"

window.resize1 = function resize1(event){
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
        
        let valueX = (svg.x) - (e.pageX);
        let valueY = (svg.y) - (e.pageY);

        svg.valueX = valueX;    
        svg.valueY = valueY; 

        if(event.target.parentNode.className.baseVal === "svg-process"){

            //main shape
            path.parentNode.children[0].setAttribute("x", svg.getX); 
            path.parentNode.children[0].setAttribute("y", svg.getY); 
            path.parentNode.children[0].setAttribute("width", svg.getWidth1); 
            path.parentNode.children[0].setAttribute("height", svg.getHeight1); 
            //timer
            path.parentNode.children[1].setAttribute("y", svg.getYT); 
            //owner
            path.parentNode.children[2].setAttribute("x", svg.getXO); 
            //manipulable dots
            path.parentNode.children[3].setAttribute("cx", svg.getCX1); 
            path.parentNode.children[3].setAttribute("cy", svg.getCY1);
            path.parentNode.children[4].setAttribute("cy", svg.getCY2);
            path.parentNode.children[5].setAttribute("cx", svg.getCX3); 

            //main shape
            svg.x = svg.x - svg.valueX;
            svg.y = svg.y - svg.valueY;
            svg.width = svg.width + svg.valueX;
            svg.height = svg.height + svg.valueY;
            //timer
            svg.yT = svg.yT - svg.valueY;
            //owner
            svg.xO = svg.xO - svg.valueX;
            //manipulable dots
            svg.cx1 = svg.cx1 - svg.valueX;
            svg.cy1 = svg.cy1 - svg.valueY;
            svg.cy2 = svg.cy2 - svg.valueY;
            svg.cx3 = svg.cx3 - svg.valueX;
        }
        if(event.target.parentNode.className.baseVal === "svg-event-transition"){

            //main shape
            path.parentNode.children[0].setAttribute("x", svg.getX); 
            path.parentNode.children[0].setAttribute("y", svg.getY); 
            path.parentNode.children[0].setAttribute("width", svg.getWidth1); 
            path.parentNode.children[0].setAttribute("height", svg.getHeight1); 
            //manipulable dots
            path.parentNode.children[1].setAttribute("cx", svg.getCX1); 
            path.parentNode.children[1].setAttribute("cy", svg.getCY1);
            path.parentNode.children[2].setAttribute("cy", svg.getCY2);
            path.parentNode.children[3].setAttribute("cx", svg.getCX3); 

            //main shape
            svg.x = svg.x - svg.valueX;
            svg.y = svg.y - svg.valueY;
            svg.width = svg.width + svg.valueX;
            svg.height = svg.height + svg.valueY;
            //manipulable dots
            svg.cx1 = svg.cx1 - svg.valueX;
            svg.cy1 = svg.cy1 - svg.valueY;
            svg.cy2 = svg.cy2 - svg.valueY;
            svg.cx3 = svg.cx3 - svg.valueX;
        }
       
    }
      
    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}