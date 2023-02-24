export class PhysicallyFlowBroken{
    constructor(id, name, objects, valueX, valueY){
        this.id = id;
        this.name = name;
        this.objects = objects;
        this.valueX = valueX;
        this.valueY = valueY;
    }

    get getId(){
        return this.id;
    }

    get getPathLine(){
        return `
        M ${this.objects[0].xMove} ${this.objects[0].yMove}
        L ${this.objects[0].xLine1} ${this.objects[0].yLine1}
        L ${this.objects[0].xLine2} ${this.objects[0].yLine2}`;
    }

    //moving arrow
    get getPathArrow(){
        return `
        M ${this.objects[1].xMove - this.valueX} ${this.objects[1].yMove - this.valueY}
        L ${this.objects[1].xLine1 - this.valueX} ${this.objects[1].yLine1 - this.valueY}
        L ${this.objects[1].xLine2 - this.valueX} ${this.objects[1].yLine2 - this.valueY}
        L ${this.objects[1].xLine3 - this.valueX} ${this.objects[1].yLine3 - this.valueY}
        Z`;
    }

    //moving arrow
    get getPathArrow2(){
        return `
        M ${this.objects[1].xMove} ${this.objects[1].yMove}
        L ${this.objects[1].xLine1} ${this.objects[1].yLine1}
        L ${this.objects[1].xLine2} ${this.objects[1].yLine2}
        L ${this.objects[1].xLine3} ${this.objects[1].yLine3}
        Z`;
    }

    get getPathLine1(){
        return `
        M ${this.objects[0].xMove} ${this.objects[0].yMove} 
        L ${this.objects[0].xLine1 - this.valueX} ${this.objects[0].yLine1}
        L ${this.objects[0].xLine2 - this.valueX} ${this.objects[0].yLine2 - this.valueY}`;
    }

    get getPathArrow1(){
        return `
        M ${this.objects[1].xMove - this.valueX} ${this.objects[1].yMove - this.valueY} 
        L ${this.objects[1].xLine1 - this.valueX} ${this.objects[1].yLine1 - this.valueY} 
        L ${this.objects[1].xLine2 - this.valueX} ${this.objects[1].yLine2 - this.valueY} 
        L ${this.objects[1].xLine3 - this.valueX} ${this.objects[1].yLine3 - this.valueY} Z`;
    }

    //ROTATION dot1
    //upside
    get getPathArrowUp1(){
        return `
        M ${this.objects[1].xMove} ${this.objects[1].yMove} 
        L ${this.objects[1].xLine1 - 14} ${this.objects[1].yLine1 + 14} 
        L ${this.objects[1].xLine2} ${this.objects[1].yLine2 - 24} 
        L ${this.objects[1].xLine3 + 14} ${this.objects[1].yLine3 + 14} Z`;
    }
    //downside
    get getPathArrowDown1(){
        return `
        M ${this.objects[1].xMove} ${this.objects[1].yMove} 
        L ${this.objects[1].xLine1 + 14} ${this.objects[1].yLine1 - 14} 
        L ${this.objects[1].xLine2} ${this.objects[1].yLine2 + 24} 
        L ${this.objects[1].xLine3 - 14} ${this.objects[1].yLine3 - 14} Z`;
    }

    //ROTATION dot2
    //upside
    get getPathArrowUp2(){
        return `
        M ${this.objects[1].xMove} ${this.objects[1].yMove} 
        L ${this.objects[1].xLine1 - 14} ${this.objects[1].yLine1 + 14} 
        L ${this.objects[1].xLine2} ${this.objects[1].yLine2 - 24} 
        L ${this.objects[1].xLine3 + 14} ${this.objects[1].yLine3 + 14} Z`;
    }
    //downside
    get getPathArrowDown2(){
        return `
        M ${this.objects[1].xMove} ${this.objects[1].yMove} 
        L ${this.objects[1].xLine1} ${this.objects[1].yLine1} 
        L ${this.objects[1].xLine2} ${this.objects[1].yLine2} 
        L ${this.objects[1].xLine3} ${this.objects[1].yLine3} Z`;
    }

    get getPathDot1X(){
        return `${this.objects[2].x - this.valueX}`;
    }

    get getPathDot1Y(){
        return `${this.objects[2].y - this.valueY}`;
    }

    //opposite side
    get getPathLine2(){
        return `
        M ${this.objects[0].xMove - this.valueX} ${this.objects[0].yMove - this.valueY} 
        L ${this.objects[0].xLine1} ${this.objects[0].yLine1 - this.valueY}
        L ${this.objects[0].xLine2} ${this.objects[0].yLine2}
        `;
    }

    get getPathDot2X(){
        return `${this.objects[3].x - this.valueX}`;
    }

    get getPathDot2Y(){
        return `${this.objects[3].y - this.valueY}`;
    }
}
