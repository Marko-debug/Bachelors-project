import { allElements } from "../chooseShape.js"

window.resize4 = function resize4(event){
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
        
        let valueX = (svg.x + svg.width) - (e.pageX);
        let valueY = (svg.y + svg.height) - (e.pageY);

        svg.valueX = valueX;    
        svg.valueY = valueY; 

        const width = svg.width - svg.valueX;
        const height = svg.height - valueY;

        if(event.target.parentNode.className.baseVal === "svg-process"){

            //checking whether it is not too small
            if(width < 200 || height < 150){
                return;
            }

            const textTimerStyle = path.parentNode.children[3].children[0].children[0].style;
            const textOwnerStyle = path.parentNode.children[4].children[0].children[0].style;

             //main shape
             path.parentNode.children[0].setAttribute("width", svg.getWidth4); 
             path.parentNode.children[0].setAttribute("height", svg.getHeight4); 
             //timer
             path.parentNode.children[1].setAttribute("x", svg.getXT); 
             //owner
             path.parentNode.children[2].setAttribute("y", svg.getYO); 
             //timer text
             textTimerStyle.marginLeft = (svg.getTextTimerLeft) + "px";
             //owner text
             textOwnerStyle.paddingTop = (svg.getTextOwnerTop) + "px";
             //manipulable dots
             path.parentNode.children[7].setAttribute("cx", svg.getCX2); 
             path.parentNode.children[8].setAttribute("cy", svg.getCY3); 
             path.parentNode.children[9].setAttribute("cx", svg.getCX4); 
             path.parentNode.children[9].setAttribute("cy", svg.getCY4); 
 
             //main shape
             svg.width = svg.width - svg.valueX;
             svg.height = svg.height - svg.valueY;
             //timer
             svg.xT = svg.xT - svg.valueX;
             //owner
             svg.yO = svg.yO - svg.valueY;
             //timer text
            svg.leftTimer = svg.getTextTimerLeft;
            //owner text
            svg.topOwner = svg.getTextOwnerTop;
             //manipulable dots
             svg.cx2 = svg.cx2 - svg.valueX;
             svg.cy3 = svg.cy3 - svg.valueY;
             svg.cx4 = svg.cx4 - svg.valueX;
             svg.cy4 = svg.cy4 - svg.valueY;
        }
        if(event.target.parentNode.className.baseVal === "svg-event-transition"){

            //checking whether it is not too small
            if(width < 160 || height < 60){
                return;
            }

             //main shape
             path.parentNode.children[0].setAttribute("width", svg.getWidth4); 
             path.parentNode.children[0].setAttribute("height", svg.getHeight4); 
             //manipulable dots
             path.parentNode.children[3].setAttribute("cx", svg.getCX2); 
             path.parentNode.children[4].setAttribute("cy", svg.getCY3); 
             path.parentNode.children[5].setAttribute("cx", svg.getCX4); 
             path.parentNode.children[5].setAttribute("cy", svg.getCY4); 
 
             //main shape
             svg.width = svg.width - svg.valueX;
             svg.height = svg.height - svg.valueY;
             //manipulable dots
             svg.cx2 = svg.cx2 - svg.valueX;
             svg.cy3 = svg.cy3 - svg.valueY;
             svg.cx4 = svg.cx4 - svg.valueX;
             svg.cy4 = svg.cy4 - svg.valueY;
        }
       
    }
      
    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}