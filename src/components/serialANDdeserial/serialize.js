import { allElements } from "../chooseShape.js";

const getBtnSerialize = document.querySelector(".save");

getBtnSerialize.addEventListener("click", ()=> serializeData())

function serializeData(){
    if(allElements.length === 0){
        alert("There is not element to serialize");
        return;
    }
    const clone = JSON.stringify(allElements)
    
    //remove all elements in both containers SVG and DIV
    let shapeSVG = document.querySelector(".svg-elements");
    if(shapeSVG !== null){
        while (shapeSVG.firstChild) {
            shapeSVG.removeChild(shapeSVG.firstChild);
        }
    }
    //remove all items in array allElements
    allElements.length = 0

    var link = document.createElement('a');
    link.download = 'data.json';
    var blob = new Blob([clone], {type: 'text/plain'});
    link.href = window.URL.createObjectURL(blob);
    link.click();
}