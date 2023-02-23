// -------------------------------------------------------------------------

export function updateArrowsBrokenDown(svg){

    const line = svg.objects[0];

    // if(line.yMove > line.yLine2){
    //     arrowPath.setAttribute("d", svg.getPathArrowUp1); 
    // }
    if(line.yMove > line.yLine2){
        updateOfRotationArrowsUp(svg);
    }
    else{
        console.log("none")
    }
}

export function updateArrowsBrokenUp(svg){

    const line = svg.objects[0];

    if(line.yMove < line.yLine2){
        updateOfRotationArrowsDown(svg);
    }
    // else if(line.yMove < line.yLine2){
    //     arrowPath.setAttribute("d", svg.getPathArrowDown1); 
    // }
    else{
        console.log("none")
    }
}

// ---------------------------------------------------------------------------
//update instance of arrows broken

//downside
function updateOfRotationArrowsDown(svg){
    svg.objects[1].xLine1 = svg.objects[1].xLine1 + 14;
    svg.objects[1].yLine1 = svg.objects[1].yLine1 - 14;
    svg.objects[1].xLine2 = svg.objects[1].xLine2;
    svg.objects[1].yLine2 = svg.objects[1].yLine2 + 24;
    svg.objects[1].xLine3 = svg.objects[1].xLine3 - 14; 
    svg.objects[1].yLine3 = svg.objects[1].yLine3 - 14;
}
//upside
function updateOfRotationArrowsUp(svg){
    svg.objects[1].xLine1 = svg.objects[1].xLine1 - 14;
    svg.objects[1].yLine1 = svg.objects[1].yLine1 + 14;
    svg.objects[1].xLine2 = svg.objects[1].xLine2;
    svg.objects[1].yLine2 = svg.objects[1].yLine2 - 24;
    svg.objects[1].xLine3 = svg.objects[1].xLine3 + 14; 
    svg.objects[1].yLine3 = svg.objects[1].yLine3 + 14;
}