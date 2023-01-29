export default class Process{
    
    constructor(id, name, width, height, top, left, dotTop1, dotTop2, dotTop3, dotTop4, dotLeft1, dotLeft2, dotLeft3, dotLeft4){
        this.id = id;
        this.name = name;
        this.width = width;
        this.height = height;
        this.top = top;
        this.left = left;
        this.dotTop1 = dotTop1;
        this.dotTop2 = dotTop2;
        this.dotTop3 = dotTop3;
        this.dotTop4 = dotTop4;
        this.dotLeft1 = dotLeft1;
        this.dotLeft2 = dotLeft2;
        this.dotleft3 = dotLeft3;
        this.dotLeft4 = dotLeft4;
    }

    get getId(){
        return this.id;
    }

     get getStyle(){
        const style = `width: ${this.width}; height: ${this.height}; top: ${this.top}; left: ${this.left}`;
        return style;
    }

    // set setId(idElement){
    //     this.id = idElement;
    // }
    
    // set setName(nameElement){
    //     this.name = nameElement;
    // }
    
    // set setWidth(widthElement){
    //     this.width = widthElement;
    // }
    
    // set setHeight(heightElement){
    //     this.heigth = heightElement;
    // }

    // set setTop(topElement){
    //     this.name = topElement;
    // }
    
    // set setLeft(leftElement){
    //     this.left = leftElement;
    // }
    
}