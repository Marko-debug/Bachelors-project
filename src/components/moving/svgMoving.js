import { allElements } from "../chooseShape.js"
import { textMoving } from "./textMoving.js"

window.svgMoving = function svgMoving(event){
    if(event.target.className === "svg-text"){textMoving(event);return;}
    if(event.target.parentNode.className.baseVal === "svg-physically-flow")return;
    if(event.target.parentNode.className.baseVal === "svg-physically-flow-broken")return;
    
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    let objIndex = allElements.findIndex(obj => obj.id == event.target.parentNode.id);
    const svg = allElements[objIndex];
    const path = event.target;
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

        if(event.target.parentNode.className.baseVal === "svg-process"){

            const textTimerStyle = path.parentNode.children[3].children[0].children[0].style;
            const textOwnerStyle = path.parentNode.children[4].children[0].children[0].style;
            const textProcessStyle = path.parentNode.children[5].children[0].children[0].style;
            
            //main shape
            path.setAttribute("x", svg.getX); 
            path.setAttribute("y", svg.getY); 
            //timer
            path.parentNode.children[1].setAttribute("x", svg.getXT); 
            path.parentNode.children[1].setAttribute("y", svg.getYT); 
            //owner
            path.parentNode.children[2].setAttribute("x", svg.getXO); 
            path.parentNode.children[2].setAttribute("y", svg.getYO); 
            //timer text
            textTimerStyle.paddingTop = (svg.getTextTimerTop) + "px";
            textTimerStyle.marginLeft = (svg.getTextTimerLeft) + "px";
            //owner text
            textOwnerStyle.paddingTop = (svg.getTextOwnerTop) + "px";
            textOwnerStyle.marginLeft = (svg.getTextOwnerLeft) + "px";
            //process text
            textProcessStyle.paddingTop = (svg.getTextProcessTop) + "px";
            textProcessStyle.marginLeft = (svg.getTextProcessLeft) + "px";
            //manipulable dots
            path.parentNode.children[6].setAttribute("cx", svg.getCX1); 
            path.parentNode.children[6].setAttribute("cy", svg.getCY1);
            path.parentNode.children[7].setAttribute("cx", svg.getCX2); 
            path.parentNode.children[7].setAttribute("cy", svg.getCY2);
            path.parentNode.children[8].setAttribute("cx", svg.getCX3); 
            path.parentNode.children[8].setAttribute("cy", svg.getCY3); 
            path.parentNode.children[9].setAttribute("cx", svg.getCX4); 
            path.parentNode.children[9].setAttribute("cy", svg.getCY4); 

            //UPDATE INSTANCE
            //main shape
            svg.x = svg.x - svg.valueX;
            svg.y = svg.y - svg.valueY;
            //timer
            svg.xT = svg.xT - svg.valueX;
            svg.yT = svg.yT - svg.valueY;
            //owner
            svg.xO = svg.xO - svg.valueX;
            svg.yO = svg.yO - svg.valueY;
            //timer text
            svg.topTimer = svg.getTextTimerTop;
            svg.leftTimer = svg.getTextTimerLeft;
            //owner text
            svg.topOwner = svg.getTextOwnerTop;
            svg.leftOwner = svg.getTextOwnerLeft;
            //process text
            svg.topProcess = svg.getTextProcessTop;
            svg.leftProcess = svg.getTextProcessLeft;
            //manipulable dots
            svg.cx1 = svg.cx1 - svg.valueX;
            svg.cy1 = svg.cy1 - svg.valueY;
            svg.cx2 = svg.cx2 - svg.valueX;
            svg.cy2 = svg.cy2 - svg.valueY;
            svg.cx3 = svg.cx3 - svg.valueX;
            svg.cy3 = svg.cy3 - svg.valueY;
            svg.cx4 = svg.cx4 - svg.valueX;
            svg.cy4 = svg.cy4 - svg.valueY;
            return;
        }
        if(event.target.parentNode.className.baseVal === "svg-event-transition"){

            const textStyle = path.parentNode.children[1].children[0].children[0].style;
            //main shape
            path.setAttribute("x", svg.getX); 
            path.setAttribute("y", svg.getY); 
            //text
            textStyle.paddingTop = (svg.getTextTop) + "px";
            textStyle.marginLeft = (svg.getTextLeft) + "px";
            //manipulable dots
            path.parentNode.children[2].setAttribute("cx", svg.getCX1); 
            path.parentNode.children[2].setAttribute("cy", svg.getCY1);
            path.parentNode.children[3].setAttribute("cx", svg.getCX2); 
            path.parentNode.children[3].setAttribute("cy", svg.getCY2);
            path.parentNode.children[4].setAttribute("cx", svg.getCX3); 
            path.parentNode.children[4].setAttribute("cy", svg.getCY3); 
            path.parentNode.children[5].setAttribute("cx", svg.getCX4); 
            path.parentNode.children[5].setAttribute("cy", svg.getCY4); 

            //main shape
            svg.x = svg.x - svg.valueX;
            svg.y = svg.y - svg.valueY;
            //manipulable dots
            svg.cx1 = svg.cx1 - svg.valueX;
            svg.cy1 = svg.cy1 - svg.valueY;
            svg.cx2 = svg.cx2 - svg.valueX;
            svg.cy2 = svg.cy2 - svg.valueY;
            svg.cx3 = svg.cx3 - svg.valueX;
            svg.cy3 = svg.cy3 - svg.valueY;
            svg.cx4 = svg.cx4 - svg.valueX;
            svg.cy4 = svg.cy4 - svg.valueY;
            svg.topText = svg.topText - svg.valueY;
            svg.leftText = svg.leftText - svg.valueX;
            return;
        }
        if(event.target.parentNode.className.baseVal === "svg-end-of-instance"){

            //main shape
            path.setAttribute("cx", svg.getCX); 
            path.setAttribute("cy", svg.getCY); 
            path.parentNode.children[1].setAttribute("x", svg.getX); 
            path.parentNode.children[1].setAttribute("y", svg.getY); 

            //main shape
            svg.cx = svg.cx - svg.valueX;
            svg.cy = svg.cy - svg.valueY;
            svg.x = svg.x - svg.valueX;
            svg.y = svg.y - svg.valueY;
            return;
        }
        if(event.target.parentNode.className.baseVal === "svg-two-branching" || event.target.parentNode.className.baseVal === "svg-three-branching"){

            const textStyle = path.parentNode.children[1].children[0].children[0].style;
            //main shape
            path.setAttribute("x", svg.getX); 
            path.setAttribute("y", svg.getY);
            //text
            textStyle.paddingTop = (svg.getTextTop) + "px";
            textStyle.marginLeft = (svg.getTextLeft) + "px";
            
            //main shape
            svg.x = svg.x - svg.valueX;
            svg.y = svg.y - svg.valueY;
            svg.topText = svg.topText - svg.valueY;
            svg.leftText = svg.leftText - svg.valueX;
            return;
        }
        if(event.target.parentNode.className.baseVal === "svg-parallel"){

            const textStyle = path.parentNode.children[1].children[0].children[0].style;
            //set and changed coordinations
            path.setAttribute("d", svg.getPath); 
            //text
            textStyle.paddingTop = (svg.getTextTop) + "px";
            textStyle.marginLeft = (svg.getTextLeft) + "px";
        }
        if(event.target.parentNode.className.baseVal === "svg-rediraction"){
            
            const textStyle = path.parentNode.children[1].children[0].children[0].style;
            path.setAttribute("d", svg.getPath); 
            //text
            textStyle.paddingTop = (svg.getTextTop) + "px";
            textStyle.marginLeft = (svg.getTextLeft) + "px";
            
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
            const textStyle = path.parentNode.children[1].children[0].children[0].style;
            path.setAttribute("d", svg.getPath); 
            //text
            textStyle.paddingTop = (svg.getTextTop) + "px";
            textStyle.marginLeft = (svg.getTextLeft) + "px";
        }
        if(event.target.parentNode.className.baseVal === "svg-output"){
            const textStyle = path.parentNode.children[1].children[0].children[0].style;
            path.setAttribute("d", svg.getPath); 
            //text
            textStyle.paddingTop = (svg.getTextTop) + "px";
            textStyle.marginLeft = (svg.getTextLeft) + "px";
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
        svg.topText = svg.topText - svg.valueY;
        svg.leftText = svg.leftText - svg.valueX;
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
        else if(svg.name == "svg-process" || svg.name == "svg-event-transition"){
            let valueX = (svg.x + (svg.width / 2)) - (e.pageX);
            let valueY = (svg.y + (svg.height / 2)) - (e.pageY);

            svg.valueX = valueX;
            svg.valueY = valueY; 
        }
        else if(svg.name == "svg-end-of-instance"){
            let valueX = (svg.cx) - (e.pageX);
            let valueY = (svg.cy) - (e.pageY);
            svg.valueX = valueX;
            svg.valueY = valueY; 
        }
        else if(svg.name == "svg-two-branching" || svg.name == "svg-three-branching"){
            let valueX = (svg.x + (svg.width / 2)) - (e.pageX);
            let valueY = (svg.y + (svg.height / 2)) - (e.pageY);
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