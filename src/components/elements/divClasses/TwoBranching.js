export default class TwoBranching{
    
    constructor(id, name, top, left){
        this.id = id;
        this.name = name;
        this.top = top;
        this.left = left;
    }

    get getId(){
        return this.id;
    }

     get getStyle(){
        const style = `top: ${this.top}; left: ${this.left}`;
        return style;
    }
}