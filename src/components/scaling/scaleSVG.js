window.scaleSVG = function scaleSVG(event) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // elmnt.onmousedown = dragMouseDown;
    let path = event.target;
    console.log(event)
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
        
        
        if(event.target.className.baseVal === "dot1"){
            console.log(e.target.parentNode)
            const linePath = event.target.parentNode.children[0];
            linePath.setAttribute("d", `M 500 180 L ${790 - valueX} ${180 - valueY}`); 
            const arrowPath = event.target.parentNode.children[1];
            arrowPath.setAttribute("d", `M ${790 - valueX} ${180 - valueY} L ${783 - valueX} ${183 - valueY} L ${785 - valueX} ${180 - valueY} L ${783 - valueX} ${176 - valueY} Z`); 

            const circle = event.target.parentNode.children[2];
            circle.setAttribute("cx", `${790 - valueX}`)
            circle.setAttribute("cy", `${180 - valueY}`)
        }
        if(event.target.className.baseVal === "dot2"){
            const linePath = event.target.parentNode.children[0];
            linePath.setAttribute("d", `M ${500 - valueX} ${180 - valueY} L 790 180`); 
            const circle = event.target.parentNode.children[3];
            circle.setAttribute("cx", `${500 - valueX}`)
            circle.setAttribute("cy", `${180 - valueY}`)
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