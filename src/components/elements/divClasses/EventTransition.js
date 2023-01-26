export default class EventTransition{
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
}