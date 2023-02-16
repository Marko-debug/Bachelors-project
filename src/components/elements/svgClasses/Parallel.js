export class Parallel{
    constructor(id, name, xMove, yMove, xLine1, yLine1, xLine2, yLine2, xLine3, yLine3, xLine4, yLine4, xLine5, yLine5, xLine6, yLine6, xLine7, yLine7, idText, contentText, topText, leftText, valueX, valueY) {
        this.id = id;
        this.name = name;
        this.xMove = xMove;
        this.yMove = yMove;
        this.xLine1 = xLine1;
        this.yLine1 = yLine1;
        this.xLine2 = xLine2;
        this.yLine2 = yLine2;
        this.xLine3 = xLine3;
        this.yLine3 = yLine3;
        this.xLine4 = xLine4;
        this.yLine4 = yLine4;
        this.xLine5 = xLine5;
        this.yLine5 = yLine5;
        this.xLine6 = xLine6;
        this.yLine6 = yLine6;
        this.xLine7 = xLine7;
        this.yLine7 = yLine7;
        this.idText = idText;
        this.contentText = contentText;
        this.topText = topText;
        this.leftText = leftText;
        this.valueX = valueX;
        this.valueY = valueY;
    }

    get getPath() {
        return `
        M ${this.xMove - this.valueX} ${this.yMove - this.valueY} 
        L ${this.xLine1 - this.valueX} ${this.yLine1 - this.valueY} 
        L ${this.xLine2 - this.valueX} ${this.yLine2 - this.valueY} 
        L ${this.xLine3 - this.valueX} ${this.yLine3 - this.valueY} 
        L ${this.xLine4 - this.valueX} ${this.yLine4 - this.valueY} 
        L ${this.xLine5 - this.valueX} ${this.yLine5 - this.valueY} 
        L ${this.xLine6 - this.valueX} ${this.yLine6 - this.valueY} 
        L ${this.xLine7 - this.valueX} ${this.yLine7 - this.valueY}`
    }

    //text
    get getTextTop(){
        return `${this.topText - this.valueY}`;
    }
    get getTextLeft(){
        return `${this.leftText - this.valueX}`;
    }
}
