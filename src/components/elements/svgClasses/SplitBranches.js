// import { ManipulableDots } from "./ManipulableDots";

export class SplitBranches{
    constructor(id, name, objects, valueX, valueY) {
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
        L ${this.objects[0].xLine1} ${this.objects[0].yLine1}`;
    }

    get getPathArrow(){
        return `
        M ${this.objects[1].xMove} ${this.objects[1].yMove}
        L ${this.objects[1].xLine1} ${this.objects[1].yLine1}
        L ${this.objects[1].xLine2} ${this.objects[1].yLine2}
        L ${this.objects[1].xLine3} ${this.objects[1].yLine3}
        Z`;
    }

    get getPathLineS(){
        return `
        M ${this.objects[2].xMove} ${this.objects[2].yMove}
        L ${this.objects[2].xLine1} ${this.objects[2].yLine1}`;
    }

    get getPathArrowS(){
        return `
        M ${this.objects[3].xMove} ${this.objects[3].yMove}
        L ${this.objects[3].xLine1} ${this.objects[3].yLine1}
        L ${this.objects[3].xLine2} ${this.objects[3].yLine2}
        L ${this.objects[3].xLine3} ${this.objects[3].yLine3}
        Z`;
    }

    get getPathLineR(){
        return `
        M ${this.objects[4].xMove} ${this.objects[4].yMove}
        L ${this.objects[4].xLine1} ${this.objects[4].yLine1}
        L ${this.objects[4].xLine2} ${this.objects[4].yLine2}`;
    }

    get getPathArrowR(){
        return `
        M ${this.objects[5].xMove} ${this.objects[5].yMove}
        L ${this.objects[5].xLine1} ${this.objects[5].yLine1}
        L ${this.objects[5].xLine2} ${this.objects[5].yLine2}
        L ${this.objects[5].xLine3} ${this.objects[5].yLine3}
        Z`;
    }

    get getPathLineL(){
        return `
        M ${this.objects[6].xMove} ${this.objects[6].yMove}
        L ${this.objects[6].xLine1} ${this.objects[6].yLine1}
        L ${this.objects[6].xLine2} ${this.objects[6].yLine2}`;
    }

    get getPathArrowL(){
        return `
        M ${this.objects[7].xMove} ${this.objects[7].yMove}
        L ${this.objects[7].xLine1} ${this.objects[7].yLine1}
        L ${this.objects[7].xLine2} ${this.objects[7].yLine2}
        L ${this.objects[7].xLine3} ${this.objects[7].yLine3}
        Z`;
    }

    get getPathLine1(){
        return `
        M ${this.objects[0].xMove} ${this.objects[0].yMove} 
        L ${this.objects[0].xLine1 - this.valueX} ${this.objects[0].yLine1 - this.valueY}`;
    }

    get getPathArrow1(){
        return `
        M ${this.objects[1].xMove - this.valueX} ${this.objects[1].yMove - this.valueY} 
        L ${this.objects[1].xLine1 - this.valueX} ${this.objects[1].yLine1 - this.valueY} 
        L ${this.objects[1].xLine2 - this.valueX} ${this.objects[1].yLine2 - this.valueY} 
        L ${this.objects[1].xLine3 - this.valueX} ${this.objects[1].yLine3 - this.valueY} Z`;
    }

    get getPathDot1X(){
        return `${this.objects[8].x - this.valueX}`;
    }

    get getPathDot1Y(){
        return `${this.objects[8].y - this.valueY}`;
    }

    //opposite side
    get getPathLine2(){
        return `
        M ${this.objects[0].xMove - this.valueX} ${this.objects[0].yMove - this.valueY} 
        L ${this.objects[0].xLine1} ${this.objects[0].yLine1}`;
    }

    get getPathDot2X(){
        return `${this.objects[9].x - this.valueX}`;
    }

    get getPathDot2Y(){
        return `${this.objects[9].y - this.valueY}`;
    }

}
