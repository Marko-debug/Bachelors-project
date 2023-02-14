export class ThreeBranching{
    
    constructor(id, name, x, y, width, height, valueX, valueY){
        this.id = id;
        this.name = name;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
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
}