// const fs = require('fs')
import { allElements } from "../chooseShape.js";

const getBtnSerialize = document.querySelector(".save");

getBtnSerialize.addEventListener("click", ()=> serializeData())

function serializeData(){
    console.log(allElements)
    const clone = JSON.stringify(allElements)
    // allElements.forEach((element)=>{
    //     const clone = JSON.stringify(element);
    //     // const revert = JSON.parse(clone);
    //     allData.push(clone);
    //     console.log('...serialized...');
    // })
    //remove all items in array
    // allElements.splice(0,allElements.length)

    //remove all elements in both containers SVG and DIV
    let shapeSVG = document.querySelector(".svg-elements");
    let shapeDIV = document.querySelector(".elements");
    if(shapeSVG !== null){
        while (shapeSVG.firstChild) {
            shapeSVG.removeChild(shapeSVG.firstChild);
        }
    }
    // if(shapeDIV !== null){
    //     while (shapeDIV.firstChild) {
    //         shapeDIV.removeChild(shapeDIV.firstChild);
    //     }
    // }

    var link = document.createElement('a');
    link.download = 'data.json';
    var blob = new Blob([clone], {type: 'text/plain'});
    link.href = window.URL.createObjectURL(blob);
    link.click();
}