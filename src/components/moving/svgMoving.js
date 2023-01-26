export function svgMoving(event){
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // elmnt.onmousedown = dragMouseDown;
    let path = event.target;
    console.log(event.target.parentNode.className.baseVal)
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
        let valueX = 650 - (e.pageX);
        let valueY = 80 - (e.pageY);

        if(event.target.parentNode.className.baseVal === "svg-parallel"){
            path.setAttribute("d", `M ${650 - valueX} ${80 - valueY} L ${630 - valueX} ${60 - valueY} L ${500 - valueX} ${60 - valueY} L ${500 - valueX} ${150 - valueY} L ${650 - valueX} ${150 - valueY} L ${650 - valueX} ${80 - valueY} L ${630 - valueX} ${80 - valueY} L ${630 - valueX} ${60 - valueY}`); 
        }
        if(event.target.parentNode.className.baseVal === "svg-information-flow"){
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
        if(event.target.parentNode.className.baseVal === "svg-information-flow-broken"){
            const line1Path = event.target.parentNode.children[0];
            line1Path.setAttribute("d", `M ${500 - valueX} ${180 - valueY} L ${600 - valueX} ${180 - valueY}`);
            const line2Path = event.target.parentNode.children[1];
            line2Path.setAttribute("d", `M ${600 - valueX} ${180 - valueY} L ${600 - valueX} ${280 - valueY}`);  
            const arrowPath = event.target.parentNode.children[2];
            arrowPath.setAttribute("d", `M ${600 - valueX} ${280 - valueY} L ${603 - valueX} ${273 - valueY} L ${597 - valueX} ${273 - valueY} L ${597 - valueX} ${273 - valueY} Z`); 
        }

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