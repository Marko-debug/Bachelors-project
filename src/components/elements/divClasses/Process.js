export default class Process{
    
    constructor(id, name, width, height, top, left){
        this.id = id;
        this.name = name;
        this.width = width;
        this.height = height;
        this.top = top;
        this.left = left;
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