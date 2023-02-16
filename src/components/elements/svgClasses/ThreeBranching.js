export class ThreeBranching{
    
    constructor(id, name, x, y, width, height, idText, contentText, topText, leftText, valueX, valueY){
        this.id = id;
        this.name = name;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.idText = idText;
        this.contentText = contentText;
        this.topText = topText;
        this.leftText = leftText;
        this.valueX = valueX;
        this.valueY = valueY;
    }

    get getId(){
        return this.id;
    }

    // MOVING
    //main shape
    get getX(){
        return `${this.x - this.valueX}`;
    }
    get getY(){
        return `${this.y - this.valueY}`;
    }

    //text
    get getTextTop(){
        return `${this.topText - this.valueY}`;
    }
    get getTextLeft(){
        return `${this.leftText - this.valueX}`;
    }
}