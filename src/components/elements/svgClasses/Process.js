export class Process{
    
    constructor(id, name, x, y, width, height, xT, yT, widthT, heightT, xO, yO, widthO, heightO, cx1, cy1, cx2, cy2, cx3, cy3, cx4, cy4, valueX, valueY){
        this.id = id;
        this.name = name;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.xT = xT;
        this.yT = yT;
        this.widthT = widthT;
        this.heightT = heightT;
        this.xO = xO;
        this.yO = yO;
        this.widthO = widthO;
        this.heightO = heightO;
        this.cx1 = cx1;
        this.cy1 = cy1;
        this.cx2 = cx2;
        this.cy2 = cy2;
        this.cx3 = cx3;
        this.cy3 = cy3;
        this.cx4 = cx4;
        this.cy4 = cy4;
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

    //timer
    get getXT(){
        return `${this.xT - this.valueX}`;
    }
    get getYT(){
        return `${this.yT - this.valueY}`;
    }

    //owner
    get getXO(){
        return `${this.xO - this.valueX}`;
    }
    get getYO(){
        return `${this.yO - this.valueY}`;
    }

    //manipulable dots
    get getCX1(){
        return `${this.cx1 - this.valueX}`;
    }
    get getCY1(){
        return `${this.cy1 - this.valueY}`;
    }
    get getCX2(){
        return `${this.cx2 - this.valueX}`;
    }
    get getCY2(){
        return `${this.cy2 - this.valueY}`;
    }
    get getCX3(){
        return `${this.cx3 - this.valueX}`;
    }
    get getCY3(){
        return `${this.cy3 - this.valueY}`;
    }
    get getCX4(){
        return `${this.cx4 - this.valueX}`;
    }
    get getCY4(){
        return `${this.cy4 - this.valueY}`;
    }

    //RESIZING
    get getWidth1(){
        return `${this.width + this.valueX}`;
    }
    get getHeight1(){
        return `${this.height + this.valueY}`;
    }

    get getWidth2(){
        return `${this.width - this.valueX}`;
    }
    get getHeight2(){
        return `${this.height + this.valueY}`;
    }

    get getWidth3(){
        return `${this.width + this.valueX}`;
    }
    get getHeight3(){
        return `${this.height - this.valueY}`;
    }
    
    get getWidth4(){
        return `${this.width - this.valueX}`;
    }
    get getHeight4(){
        return `${this.height - this.valueY}`;
    }
}