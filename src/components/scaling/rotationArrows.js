// import { updateOfRotationArrowsRight1, updateOfRotationArrowsDown1, updateOfRotationArrowsUp1, updateOfRotationArrowsLeft1, updateOfRotationArrowsRight2, updateOfRotationArrowsDown2, updateOfRotationArrowsUp2, updateOfRotationArrowsLeft2} from "./updateOfRotationArrows.js"; 

export function rotationArrows1(svg, arrowPath){

    const line = svg.objects[0];
    
    const xLineMove = line.xLine1 - line.xMove;
    const yLineMove = line.yLine1 - line.yMove;
    const xMoveLine = line.xMove - line.xLine1;
    const yMoveLine = line.yMove - line.yLine1;

    if(xLineMove > yLineMove && xLineMove > yMoveLine){
        arrowPath.setAttribute("d", svg.getPathArrowRight1); 
        // updateOfRotationArrowsRight1(svg);
    }
    else if(xLineMove < yLineMove && yLineMove > xMoveLine){
        arrowPath.setAttribute("d", svg.getPathArrowDown1); 
        // updateOfRotationArrowsDown1(svg);
    }
    else if(xLineMove < yMoveLine && xMoveLine < yMoveLine){
        arrowPath.setAttribute("d", svg.getPathArrowUp1); 
        // updateOfRotationArrowsUp1(svg);
    }
    else if(xMoveLine > yLineMove && xMoveLine > yMoveLine){
        arrowPath.setAttribute("d", svg.getPathArrowLeft1); 
        // updateOfRotationArrowsLeft1(svg);
    }
    else{
        console.log("none")
    }
}

export function rotationArrows2(svg, arrowPath){

    const line = svg.objects[0];
    
    const xLineMove = line.xLine1 - line.xMove;
    const yLineMove = line.yLine1 - line.yMove;
    const xMoveLine = line.xMove - line.xLine1;
    const yMoveLine = line.yMove - line.yLine1;

    if(xLineMove > yLineMove && xLineMove > yMoveLine){
        arrowPath.setAttribute("d", svg.getPathArrowRight2); 
        // updateOfRotationArrowsRight2(svg);
    }
    else if(xLineMove < yLineMove && yLineMove > xMoveLine){
        arrowPath.setAttribute("d", svg.getPathArrowDown2); 
        // updateOfRotationArrowsDown2(svg);
    }
    else if(xLineMove < yMoveLine && xMoveLine < yMoveLine){
        arrowPath.setAttribute("d", svg.getPathArrowUp2); 
        // updateOfRotationArrowsUp2(svg);
    }
    else if(xMoveLine > yLineMove && xMoveLine > yMoveLine){
        arrowPath.setAttribute("d", svg.getPathArrowLeft2); 
        // updateOfRotationArrowsLeft2(svg);
    }
    else{
        console.log("none")
    }
}

export function rotationArrowsBroken1(svg, arrowPath){

    const line = svg.objects[0];

    if(line.yMove > line.yLine2){
        arrowPath.setAttribute("d", svg.getPathArrowUp1); 
    }
    else if(line.yMove < line.yLine2){
        arrowPath.setAttribute("d", svg.getPathArrowDown1); 
    }
    else{
        console.log("none")
    }
}

export function rotationArrowsBroken2(svg, arrowPath){

    const line = svg.objects[0];

    if(line.yMove > line.yLine2){
        arrowPath.setAttribute("d", svg.getPathArrowUp1); 
    }
    else if(line.yMove < line.yLine2){
        arrowPath.setAttribute("d", svg.getPathArrowDown1); 
    }
    else{
        console.log("none")
    }
}