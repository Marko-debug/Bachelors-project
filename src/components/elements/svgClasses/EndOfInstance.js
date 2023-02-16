export class EndOfInstance{
    
    constructor(id, name, cx, cy, x, y, valueX, valueY){
        this.id = id;
        this.name = name;
        this.cx = cx;
        this.cy = cy;
        this.x = x;
        this.y = y;
        this.valueX = valueX;
        this.valueY = valueY;
    }

    get getId(){
        return this.id;
    }

    // MOVING
    //main shape
    get getCX(){
        return `${this.cx - this.valueX}`;
    }
    get getCY(){
        return `${this.cy - this.valueY}`;
    }
    get getX(){
        return `${this.x - this.valueX}`;
    }
    get getY(){
        return `${this.y - this.valueY}`;
    }
}