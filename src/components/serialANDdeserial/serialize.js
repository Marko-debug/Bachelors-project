// const fs = require('fs')
import { allElements } from "../chooseShape.js";

const getBtnSerialize = document.querySelector(".save");

getBtnSerialize.addEventListener("click", ()=> serializeData())

function serializeData(){
    const clone = JSON.stringify(allElements)
    
    //remove all elements in both containers SVG and DIV
    let shapeSVG = document.querySelector(".svg-elements");
    let shapeDIV = document.querySelector(".elements");
    if(shapeSVG !== null){
        while (shapeSVG.firstChild) {
            shapeSVG.removeChild(shapeSVG.firstChild);
        }
    }

    var link = document.createElement('a');
    link.download = 'data.json';
    var blob = new Blob([clone], {type: 'text/plain'});
    link.href = window.URL.createObjectURL(blob);
    link.click();
}