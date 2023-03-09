import {updateArrowsBrokenDown, updateArrowsBrokenUp} from "./updateOfRotationArrowsBroken.js"; 

export function rotationArrowsBroken1(svg, arrowPath){

    const line = svg.objects[0];
    const direction = svg.objects[1].direction;

    if(direction === "down"){
        if(line.yMove < line.yLine2){
            arrowPath.setAttribute("d", svg.getPathArrow); 
        }
        else if(line.yMove > line.yLine2){
            arrowPath.setAttribute("d", svg.getPathArrowUp1); 
            svg.objects[1].direction = "up";
            updateArrowsBrokenDown(svg)
        }
        else{
            console.log("none")
        }
    }
    else if(direction === "up"){
        if(line.yMove < line.yLine2){
            arrowPath.setAttribute("d", svg.getPathArrowDown1); 
            svg.objects[1].direction = "down";
            updateArrowsBrokenUp(svg)
        }
        else if(line.yMove > line.yLine2){
            arrowPath.setAttribute("d", svg.getPathArrow); 
        }
        else{
            console.log("none")
        }
    }
    else{
        console.log("none")
    }
}

export function rotationArrowsBroken2(svg, arrowPath){

    const line = svg.objects[0];
    const direction = svg.objects[1].direction;

    if(direction === "down"){
        if(line.yMove < line.yLine2){
            console.log("down1")
            arrowPath.setAttribute("d", svg.getPathArrow2); 
        }
        else if(line.yMove > line.yLine2){
            console.log("up1")
            arrowPath.setAttribute("d", svg.getPathArrowUp1); 
            svg.objects[1].direction = "up";
            updateArrowsBrokenDown(svg)
        }
        else{
            console.log("none")
        }
    }
    else if(direction === "up"){
        if(line.yMove < line.yLine2){
            console.log("down2")
            arrowPath.setAttribute("d", svg.getPathArrowDown1); 
            svg.objects[1].direction = "down";
            updateArrowsBrokenUp(svg)
        }
        else if(line.yMove > line.yLine2){
            console.log("up2")
            arrowPath.setAttribute("d", svg.getPathArrow2); 
        }
        else{
            console.log("none")
        }
    }
    else{
        console.log("none")
    }
}