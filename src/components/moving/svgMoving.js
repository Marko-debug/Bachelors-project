import { allElements } from "../chooseShape.js"

window.svgMoving = function svgMoving(event){
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    let objIndex = allElements.findIndex(obj => obj.id == event.target.parentNode.id);
    const svg = allElements[objIndex];

    console.log(allElements)
    let path = event.target;
    console.log("moving")
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
        let valueX = svg.xMove - (e.pageX);
        let valueY = svg.yMove - (e.pageY);

        svg.valueX = valueX;
        svg.valueY = valueY; 
        
        
        if(event.target.parentNode.className.baseVal === "svg-parallel"){

            //set and changed coordinations
            path.setAttribute("d", svg.getPath); 
        }
        if(event.target.parentNode.className.baseVal === "svg-rediraction"){
            path.setAttribute("d", svg.getPath); 

            svg.xLine8 = svg.xLine8 - valueX;
            svg.yLine8 = svg.yLine8 - valueY;
        }
        if(event.target.parentNode.className.baseVal === "svg-input"){
            path.setAttribute("d", svg.getPath); 
        }
        if(event.target.parentNode.className.baseVal === "svg-physically-flow"){
            const linePath = event.target.parentNode.children[0];
            linePath.setAttribute("d", `M ${500 - valueX} ${180 - valueY} L ${790 - valueX} ${180 - valueY}`); 
            const arrowPath = event.target.parentNode.children[1];
            arrowPath.setAttribute("d", `M ${790 - valueX} ${180 - valueY} L ${783 - valueX} ${183 - valueY} L ${785 - valueX} ${180 - valueY} L ${783 - valueX} ${176 - valueY} Z`); 

            const circle1 = event.target.parentNode.children[2];
            circle1.setAttribute("cx", `${790 - valueX}`)
            circle1.setAttribute("cy", `${180 - valueY}`)
            const circle2 = event.target.parentNode.children[3];
            circle2.setAttribute("cx", `${500 - valueX}`)
            circle2.setAttribute("cy", `${180 - valueY}`)
        }
        if(event.target.parentNode.className.baseVal === "svg-physically-flow-broken"){
            const line1Path = event.target.parentNode.children[0];
            line1Path.setAttribute("d", `M ${500 - valueX} ${180 - valueY} L ${600 - valueX} ${180 - valueY}`);
            const line2Path = event.target.parentNode.children[1];
            line2Path.setAttribute("d", `M ${600 - valueX} ${180 - valueY} L ${600 - valueX} ${280 - valueY}`);  
            const arrowPath = event.target.parentNode.children[2];
            arrowPath.setAttribute("d", `M ${600 - valueX} ${280 - valueY} L ${603 - valueX} ${273 - valueY} L ${597 - valueX} ${273 - valueY} L ${597 - valueX} ${273 - valueY} Z`); 
        }

        console.log(svg.xMove)
        svg.xMove = svg.xMove - valueX;
        svg.yMove = svg.yMove - valueY;
        svg.xLine1 = svg.xLine1 - valueX;
        svg.yLine1 = svg.yLine1 - valueY;
        svg.xLine2 = svg.xLine2 - valueX;
        svg.yLine2 = svg.yLine2 - valueY;
        svg.xLine3 = svg.xLine3 - valueX;
        svg.yLine3 = svg.yLine3 - valueY;
        svg.xLine4 = svg.xLine4 - valueX;
        svg.yLine4 = svg.yLine4 - valueY;
        svg.xLine5 = svg.xLine5 - valueX;
        svg.yLine5 = svg.yLine5 - valueY;
        svg.xLine6 = svg.xLine6 - valueX;
        svg.yLine6 = svg.yLine6 - valueY;
        svg.xLine7 = svg.xLine7 - valueX;
        svg.yLine7 = svg.yLine7 - valueY;

        // set the element's new position:
        // elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        // elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
      
    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}