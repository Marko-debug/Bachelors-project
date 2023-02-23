export function updateArrowsRight(svg){

    const line = svg.objects[0];
    
    const xLineMove = line.xLine1 - line.xMove;
    const yLineMove = line.yLine1 - line.yMove;
    const xMoveLine = line.xMove - line.xLine1;
    const yMoveLine = line.yMove - line.yLine1;

    if(xLineMove < yLineMove && yLineMove > xMoveLine){
        updateOfRotationArrowsDownR(svg);
    }
    else if(xLineMove < yMoveLine && xMoveLine < yMoveLine){
        updateOfRotationArrowsUpR(svg);
    }
    else if(xMoveLine > yLineMove && xMoveLine > yMoveLine){
        updateOfRotationArrowsLeftR(svg);
    }
    else{
        console.log("none")
    }
}
export function updateArrowsDown(svg){

    const line = svg.objects[0];
    
    const xLineMove = line.xLine1 - line.xMove;
    const yLineMove = line.yLine1 - line.yMove;
    const xMoveLine = line.xMove - line.xLine1;
    const yMoveLine = line.yMove - line.yLine1;

    if(xLineMove > yLineMove && xLineMove > yMoveLine){
        updateOfRotationArrowsRightD(svg);
    }
    else if(xLineMove < yMoveLine && xMoveLine < yMoveLine){
        updateOfRotationArrowsUpD(svg);
    }
    else if(xMoveLine > yLineMove && xMoveLine > yMoveLine){
        updateOfRotationArrowsLeftD(svg);
    }
    else{
        console.log("none")
    }
}
export function updateArrowsUp(svg){

    const line = svg.objects[0];
    
    const xLineMove = line.xLine1 - line.xMove;
    const yLineMove = line.yLine1 - line.yMove;
    const xMoveLine = line.xMove - line.xLine1;
    const yMoveLine = line.yMove - line.yLine1;

    if(xLineMove > yLineMove && xLineMove > yMoveLine){
        updateOfRotationArrowsRightU(svg);
    }
    else if(xLineMove < yLineMove && yLineMove > xMoveLine){
        updateOfRotationArrowsDownU(svg);
    }
    else if(xMoveLine > yLineMove && xMoveLine > yMoveLine){
        updateOfRotationArrowsLeftU(svg);
    }
    else{
        console.log("none")
    }
}
export function updateArrowsLeft(svg){

    const line = svg.objects[0];
    
    const xLineMove = line.xLine1 - line.xMove;
    const yLineMove = line.yLine1 - line.yMove;
    const xMoveLine = line.xMove - line.xLine1;
    const yMoveLine = line.yMove - line.yLine1;

    if(xLineMove > yLineMove && xLineMove > yMoveLine){
        updateOfRotationArrowsRightL(svg);
    }
    else if(xLineMove < yLineMove && yLineMove > xMoveLine){
        updateOfRotationArrowsDownL(svg);
    }
    else if(xLineMove < yMoveLine && xMoveLine < yMoveLine){
        updateOfRotationArrowsUpL(svg);
    }
    else{
        console.log("none")
    }
}

// ---------------------------------------------------------------------------
//update instance of arrows

//downside
function updateOfRotationArrowsDownR(svg){
    svg.objects[1].xLine1 = svg.objects[1].xLine1 + 14;
    svg.objects[1].yLine1 = svg.objects[1].yLine1;
    svg.objects[1].xLine2 = svg.objects[1].xLine2 - 12;
    svg.objects[1].yLine2 = svg.objects[1].yLine2 + 12;
    svg.objects[1].xLine3 = svg.objects[1].xLine3; 
    svg.objects[1].yLine3 = svg.objects[1].yLine3 - 14;
}
//upside
function updateOfRotationArrowsUpR(svg){
    svg.objects[1].xLine1 = svg.objects[1].xLine1;
    svg.objects[1].yLine1 = svg.objects[1].yLine1 + 14;
    svg.objects[1].xLine2 = svg.objects[1].xLine2 - 12;
    svg.objects[1].yLine2 = svg.objects[1].yLine2 - 12;
    svg.objects[1].xLine3 = svg.objects[1].xLine3 + 14; 
    svg.objects[1].yLine3 = svg.objects[1].yLine3;
}

function updateOfRotationArrowsLeftR(svg){
    svg.objects[1].xLine1 = svg.objects[1].xLine1 + 14;
    svg.objects[1].yLine1 = svg.objects[1].yLine1 + 14;
    svg.objects[1].xLine2 = svg.objects[1].xLine2 - 24;
    svg.objects[1].yLine2 = svg.objects[1].yLine2;
    svg.objects[1].xLine3 = svg.objects[1].xLine3 + 14; 
    svg.objects[1].yLine3 = svg.objects[1].yLine3 - 14;
}

// DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//right
function updateOfRotationArrowsRightD(svg){
    svg.objects[1].xLine1 = svg.objects[1].xLine1 - 14;
    svg.objects[1].yLine1 = svg.objects[1].yLine1;
    svg.objects[1].xLine2 = svg.objects[1].xLine2 + 12;
    svg.objects[1].yLine2 = svg.objects[1].yLine2 - 12;
    svg.objects[1].xLine3 = svg.objects[1].xLine3; 
    svg.objects[1].yLine3 = svg.objects[1].yLine3 + 14;
}
//upside
function updateOfRotationArrowsUpD(svg){
    svg.objects[1].xLine1 = svg.objects[1].xLine1 - 14;
    svg.objects[1].yLine1 = svg.objects[1].yLine1 + 14;
    svg.objects[1].xLine2 = svg.objects[1].xLine2;
    svg.objects[1].yLine2 = svg.objects[1].yLine2 - 24;
    svg.objects[1].xLine3 = svg.objects[1].xLine3 + 14; 
    svg.objects[1].yLine3 = svg.objects[1].yLine3 + 14;
}
//left
function updateOfRotationArrowsLeftD(svg){
    svg.objects[1].xLine1 = svg.objects[1].xLine1;
    svg.objects[1].yLine1 = svg.objects[1].yLine1 + 14;
    svg.objects[1].xLine2 = svg.objects[1].xLine2 - 12;
    svg.objects[1].yLine2 = svg.objects[1].yLine2 - 12;
    svg.objects[1].xLine3 = svg.objects[1].xLine3 + 14; 
    svg.objects[1].yLine3 = svg.objects[1].yLine3;
}

// UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU
//right
function updateOfRotationArrowsRightU(svg){
    svg.objects[1].xLine1 = svg.objects[1].xLine1;
    svg.objects[1].yLine1 = svg.objects[1].yLine1 - 14;
    svg.objects[1].xLine2 = svg.objects[1].xLine2 + 12;
    svg.objects[1].yLine2 = svg.objects[1].yLine2 + 12;
    svg.objects[1].xLine3 = svg.objects[1].xLine3 - 14; 
    svg.objects[1].yLine3 = svg.objects[1].yLine3;
}
//downside
function updateOfRotationArrowsDownU(svg){
    svg.objects[1].xLine1 = svg.objects[1].xLine1 + 14;
    svg.objects[1].yLine1 = svg.objects[1].yLine1 - 14;
    svg.objects[1].xLine2 = svg.objects[1].xLine2;
    svg.objects[1].yLine2 = svg.objects[1].yLine2 + 24;
    svg.objects[1].xLine3 = svg.objects[1].xLine3 - 14; 
    svg.objects[1].yLine3 = svg.objects[1].yLine3 - 14;
}
//left
function updateOfRotationArrowsLeftU(svg){
    svg.objects[1].xLine1 = svg.objects[1].xLine1 + 14;
    svg.objects[1].yLine1 = svg.objects[1].yLine1;
    svg.objects[1].xLine2 = svg.objects[1].xLine2 - 12;
    svg.objects[1].yLine2 = svg.objects[1].yLine2 + 12;
    svg.objects[1].xLine3 = svg.objects[1].xLine3; 
    svg.objects[1].yLine3 = svg.objects[1].yLine3 - 14;
}

//LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
function updateOfRotationArrowsRightL(svg){
    svg.objects[1].xLine1 = svg.objects[1].xLine1 - 14;
    svg.objects[1].yLine1 = svg.objects[1].yLine1 - 14;
    svg.objects[1].xLine2 = svg.objects[1].xLine2 + 24;
    svg.objects[1].yLine2 = svg.objects[1].yLine2;
    svg.objects[1].xLine3 = svg.objects[1].xLine3 - 14; 
    svg.objects[1].yLine3 = svg.objects[1].yLine3 + 14;
}
//downside
function updateOfRotationArrowsDownL(svg){
    svg.objects[1].xLine1 = svg.objects[1].xLine1;
    svg.objects[1].yLine1 = svg.objects[1].yLine1 - 14;
    svg.objects[1].xLine2 = svg.objects[1].xLine2 + 12;
    svg.objects[1].yLine2 = svg.objects[1].yLine2 + 12;
    svg.objects[1].xLine3 = svg.objects[1].xLine3 - 14; 
    svg.objects[1].yLine3 = svg.objects[1].yLine3;
}
//upside
function updateOfRotationArrowsUpL(svg){
    svg.objects[1].xLine1 = svg.objects[1].xLine1 - 14;
    svg.objects[1].yLine1 = svg.objects[1].yLine1;
    svg.objects[1].xLine2 = svg.objects[1].xLine2 + 12;
    svg.objects[1].yLine2 = svg.objects[1].yLine2 - 12;
    svg.objects[1].xLine3 = svg.objects[1].xLine3; 
    svg.objects[1].yLine3 = svg.objects[1].yLine3 + 14;
}

