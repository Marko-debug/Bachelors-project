import {updateArrowsRight, updateArrowsDown, updateArrowsUp, updateArrowsLeft} from "./updateOfRotationArrows.js"; 

export function rotationArrows1(svg, arrowPath){

    const line = svg.objects[0];
    const direction = svg.objects[1].direction;
    
    const xLineMove = line.xLine1 - line.xMove;
    const yLineMove = line.yLine1 - line.yMove;
    const xMoveLine = line.xMove - line.xLine1;
    const yMoveLine = line.yMove - line.yLine1;
    
    if(direction === "right"){
        if(xLineMove > yLineMove && xLineMove > yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrow); 
        }
        else if(xLineMove < yLineMove && yLineMove > xMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowDown1); 
            svg.objects[1].direction = "down";
            updateArrowsRight(svg);
        }
        else if(xLineMove < yMoveLine && xMoveLine < yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowUp1); 
            svg.objects[1].direction = "up";
            updateArrowsRight(svg);
        }
        else if(xMoveLine > yLineMove && xMoveLine > yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowLeft1); 
            svg.objects[1].direction = "left";
            updateArrowsRight(svg);
        }
        else{
            console.log("none")
        }
    }
    else if(direction === "down"){
        if(xLineMove > yLineMove && xLineMove > yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowRight1); 
            svg.objects[1].direction = "right";
            updateArrowsDown(svg)
        }
        else if(xLineMove < yLineMove && yLineMove > xMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrow); 
        }
        else if(xLineMove < yMoveLine && xMoveLine < yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowUp1); 
            svg.objects[1].direction = "up";
            updateArrowsDown(svg)
        }
        else if(xMoveLine > yLineMove && xMoveLine > yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowLeft1); 
            svg.objects[1].direction = "left";
            updateArrowsDown(svg)
        }
        else{
            console.log("none")
        }
    }
    else if(direction === "up"){
        if(xLineMove > yLineMove && xLineMove > yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowRight1); 
            svg.objects[1].direction = "right";
            updateArrowsUp(svg);
        }
        else if(xLineMove < yLineMove && yLineMove > xMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowDown1); 
            svg.objects[1].direction = "down";
            updateArrowsUp(svg);
        }
        else if(xLineMove < yMoveLine && xMoveLine < yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrow); 
        }
        else if(xMoveLine > yLineMove && xMoveLine > yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowLeft1); 
            svg.objects[1].direction = "left";
            updateArrowsUp(svg);
        }
        else{
            console.log("none")
        }
    }
    else if(direction === "left"){
        if(xLineMove > yLineMove && xLineMove > yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowRight1); 
            svg.objects[1].direction = "right";
            updateArrowsLeft(svg);
        }
        else if(xLineMove < yLineMove && yLineMove > xMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowDown1); 
            svg.objects[1].direction = "down";
            updateArrowsLeft(svg);
        }
        else if(xLineMove < yMoveLine && xMoveLine < yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowUp1); 
            svg.objects[1].direction = "up";
            updateArrowsLeft(svg);
        }
        else if(xMoveLine > yLineMove && xMoveLine > yMoveLine){
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

// when is taking dot 2
export function rotationArrows2(svg, arrowPath){
    if(svg.name === "svg-physically-flow-broken" || svg.name === "svg-information-flow-broken") return;
    if(svg.name === "svg-sequential-flow-broken")return;

    const line = svg.objects[0];
    const direction = svg.objects[1].direction;
    
    const xLineMove = line.xLine1 - line.xMove;
    const yLineMove = line.yLine1 - line.yMove;
    const xMoveLine = line.xMove - line.xLine1;
    const yMoveLine = line.yMove - line.yLine1;
    
    if(direction === "right"){
        if(xLineMove > yLineMove && xLineMove > yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrow2); 
        }
        else if(xLineMove < yLineMove && yLineMove > xMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowDown2); 
            svg.objects[1].direction = "down";
            updateArrowsRight(svg);
        }
        else if(xLineMove < yMoveLine && xMoveLine < yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowUp2); 
            svg.objects[1].direction = "up";
            updateArrowsRight(svg);
        }
        else if(xMoveLine > yLineMove && xMoveLine > yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowLeft2); 
            svg.objects[1].direction = "left";
            updateArrowsRight(svg);
        }
        else{
            console.log("none")
        }
    }
    else if(direction === "down"){
        if(xLineMove > yLineMove && xLineMove > yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowRight2); 
            svg.objects[1].direction = "right";
            updateArrowsDown(svg)
        }
        else if(xLineMove < yLineMove && yLineMove > xMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrow2); 
        }
        else if(xLineMove < yMoveLine && xMoveLine < yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowUp2); 
            svg.objects[1].direction = "up";
            updateArrowsDown(svg)
        }
        else if(xMoveLine > yLineMove && xMoveLine > yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowLeft2); 
            svg.objects[1].direction = "left";
            updateArrowsDown(svg)
        }
        else{
            console.log("none")
        }
    }
    else if(direction === "up"){
        if(xLineMove > yLineMove && xLineMove > yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowRight2); 
            svg.objects[1].direction = "right";
            updateArrowsUp(svg);
        }
        else if(xLineMove < yLineMove && yLineMove > xMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowDown2); 
            svg.objects[1].direction = "down";
            updateArrowsUp(svg);
        }
        else if(xLineMove < yMoveLine && xMoveLine < yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrow2); 
        }
        else if(xMoveLine > yLineMove && xMoveLine > yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowLeft2); 
            svg.objects[1].direction = "left";
            updateArrowsUp(svg);
        }
        else{
            console.log("none")
        }
    }
    else if(direction === "left"){
        if(xLineMove > yLineMove && xLineMove > yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowRight2); 
            svg.objects[1].direction = "right";
            updateArrowsLeft(svg);
        }
        else if(xLineMove < yLineMove && yLineMove > xMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowDown2); 
            svg.objects[1].direction = "down";
            updateArrowsLeft(svg);
        }
        else if(xLineMove < yMoveLine && xMoveLine < yMoveLine){
            arrowPath.setAttribute("d", svg.getPathArrowUp2); 
            svg.objects[1].direction = "up";
            updateArrowsLeft(svg);
        }
        else if(xMoveLine > yLineMove && xMoveLine > yMoveLine){
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