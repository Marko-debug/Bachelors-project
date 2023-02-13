export class EndOfTwoProcess{
    constructor(id, name, cx, cy, xMove1, yMove1, xLine1, yLine1, xMove2, yMove2, xLine2, yLine2, valueX, valueY){
        this.id = id;
        this.name = name;
        this.cx = cx;
        this.cy = cy;
        this.xMove1 = xMove1;
        this.yMove1 = yMove1;
        this.xLine1 = xLine1;
        this.yLine1 = yLine1;
        this.xMove2 = xMove2;
        this.yMove2 = yMove2;
        this.xLine2 = xLine2;
        this.yLine2 = yLine2;
        this.valueX = valueX;
        this.valueY = valueY;
    }


    get getCX(){
        return `${this.cx - this.valueX}`; 
    }

    get getCY(){
        return `${this.cy - this.valueY}`; 
    }

    get getPath(){
        return `
        M ${this.xMove1 - this.valueX} ${this.yMove1 - this.valueY} 
        L ${this.xLine1 - this.valueX} ${this.yLine1 - this.valueY} 
        M ${this.xMove2 - this.valueX} ${this.yMove2 - this.valueY} 
        L ${this.xLine2 - this.valueX} ${this.yLine2 - this.valueY}`;
    }
}
