// export class Text{
//     constructor(id, name, top, left){
//         this.id = id;
//         this.name = name;
//         this.top = top;
//         this.left = left;
//     }

//     get getId(){
//         return this.id;
//     }

//     get getStyle(){
//         const style = `top: ${this.top}; left: ${this.left}`;
//         return style;
//     }
// }

export class Text{
    constructor(id, name, content, top, left,valueX, valueY) {
        this.id = id;
        this.name = name;
        this.content = content;
        this.top = top;
        this.left = left;
        this.valueX = valueX;
        this.valueY = valueY;
    }

    // get getPath(){
    //     return ;
    // }
}


