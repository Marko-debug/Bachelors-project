import { generateElements} from "./generating/generateElements.js";
import Process from "./elements/divClasses/Process.js"
import {PhysicallyFlow} from "./elements/svgClasses/PhysicallyFlow.js";
import { PhysicallyFlowBroken } from "./elements/svgClasses/PhysicallyFlowBroken.js";
import {Input} from "./elements/svgClasses/Input.js";
import Output from "./elements/divClasses/Output.js"
import EventTransition from "./elements/divClasses/EventTransition.js"
import EndOFInstance from "./elements/divClasses/EndOfInstance.js";
import TwoBranching from "./elements/divClasses/TwoBranching.js";
import { Parallel } from "./elements/svgClasses/Parallel.js";
import { Rediraction } from "./elements/svgClasses/Rediraction.js";

import { generateSVG} from "./generating/generateSVG.js";
import { make } from "./generating/make.js";
import { EndOfTwoProcess } from "./elements/svgClasses/EndOfTwoProcess.js";
import { EndOfThreeProcess } from "./elements/svgClasses/EndOfThreeProcess.js";

const allElements = [];

const chooseElement = (element) => {
    // const process = document.querySelector(`.${element}`)
    // process.addEventListener("click", () => {

    const elements = document.querySelector(`.elements`)
    const svg = document.querySelector(".svg");
    if(element === "btn-process"){

        const name = "process";
        const id = Math. floor(Math. random() * 100);
        const object = new Process(id, name, "300px", "200px", "60px", "500px", "-8px", "190px", "-8px", "190px", "-8px", "-8px", "286px", "290px");
        allElements.push(object);
        generateElements(elements, name, object)
    }
    else if(element === "btn-text"){
        const div = document.createElement("div")
        div.setAttribute("id", Math. floor(Math. random() * 100))
        div.classList.add("text")
        elements.appendChild(div)
        div.setAttribute("onclick","selectElement(document.getElementById(event.target.id));");
        div.setAttribute("onmousedown","dragElement(event);");
        div.setAttribute("contenteditable", "true");
        div.innerHTML="Text";
    }
    else if(element === "btn-physically-flow"){
        const className = "svg-physically-flow";
        const id = Math. floor(Math. random() * 100);
        const path = [{name: "line", xMove: 500, yMove: 180, xLine1: 790, yLine1: 180},{name: "arrow", xMove: 790, yMove: 180, xLine1: 783, yLine1: 183, xLine2: 785, yLine2: 180, xLine3: 783, yLine3: 176}, {name: "dot1", x: 790, y: 180}, {name: "dot2", x: 500, y: 180}];
        const object = new PhysicallyFlow(id, className, path, 0, 0)
        allElements.push(object);
        make(id, className);
    }
    else if(element === "btn-physically-flow-broken"){
        const className = "svg-physically-flow-broken";
        const id = Math. floor(Math. random() * 100);
        const path = [{name: "line1", xMove: 500, yMove: 180, xLine1: 600, yLine1: 180},{name: "line2", xMove: 600, yMove: 180, xLine1: 600, yLine1: 280},{name: "arrow", xMove: 600, yMove: 280, xLine1: 603, yLine1: 273, xLine2: 597, yLine2: 273, xLine3: 597, yLine3: 273}, {name: "dot1", x: 600, y: 280}, {name: "dot2", x: 500, y: 180}];
        const object = new PhysicallyFlowBroken(id, className, path)
        allElements.push(object);
        make(id, className);
    }
    else if(element === "btn-input"){
        const className = "svg-input";
        const id = Math. floor(Math. random() * 100);
        const object = new Input(id, className, 500, 60, 500, 110, 650, 110, 650, 140, 700, 85, 650, 30, 650, 60, 500, 60)
        allElements.push(object);
        generateSVG(id, className);  
    }
    else if(element === "btn-output"){

        const name = "output";
        const id = Math. floor(Math. random() * 100);
        const object = new Output(id, name, "60px", "500px");
        allElements.push(object);
        generateElements(elements, name, object)
    }
    else if(element === "btn-event-transition"){

        const name = "event-transition";
        const id = Math. floor(Math. random() * 100);
        const object = new EventTransition(id, name, "150px", "60px", "60px", "500px", "-8px", "50px", "-8px", "50px", "-8px", "-8px", "140px", "140px");
        allElements.push(object);
        generateElements(elements, name, object)
    }
    else if(element === "btn-end-of-instance"){

        const name = "end-of-instance";
        const id = Math. floor(Math. random() * 100);
        const object = new EndOFInstance(id, name, "60px", "500px");
        allElements.push(object);
        generateElements(elements, name, object)
    }
    else if(element === "btn-two-branches"){

        const name = "two-branching"
        const id = Math. floor(Math. random() * 100);
        const object = new TwoBranching(id, name, "60px", "550px");
        allElements.push(object);
        generateElements(elements, name, object)
    }
    else if(element === "btn-three-branches"){
        const name = "three-branching"
        const id = Math. floor(Math. random() * 100);
        const object = new TwoBranching(id, name, "60px", "550px");
        allElements.push(object);
        generateElements(elements, name, object)
    }
    else if(element === "btn-rediraction"){
        const className = "svg-rediraction";
        const id = Math. floor(Math. random() * 100);
        const object = new Rediraction(id, className, 700, 80, 660, 110, 660, 160, 700, 190, 750, 190, 790, 160, 790, 110, 750, 80, 700, 80)
        allElements.push(object);
        generateSVG(id, className);
    }
    else if(element === "btn-parallel"){
        const className = "svg-parallel";
        const id = Math. floor(Math. random() * 100);
        const object = new Parallel(id, className, 650, 80, 630, 60, 500, 60, 500, 150, 650, 150, 650, 80, 630, 80, 630, 60, 0, 0)
        allElements.push(object);
        generateSVG(id, className);
    }
    else if(element === "btn-end-of-two-processes"){
        const className = "svg-end-of-two-processes";
        const id = Math. floor(Math. random() * 100);
        const object = new EndOfTwoProcess(id, className, 600, 100, 580, 55, 580, 145, 620, 55, 620, 145, 0, 0)
        allElements.push(object);
        generateSVG(id, className);
    }
    else if(element === "btn-end-of-three-processes"){
        const className = "svg-end-of-three-processes";
        const id = Math. floor(Math. random() * 100);
        const object = new EndOfThreeProcess(id, className, 600, 100, 575, 56, 575, 144, 600, 50, 600, 150, 625, 56, 625, 144, 0, 0)
        allElements.push(object);
        generateSVG(id, className);
    }    
    else{
        console.log('i do not know')

    
        // const elements = document.querySelector(`#shape`)
        // const rect = document.createElementNS('http://wwww.w3.org/2000/svg', 'rect');
        // elements.appendChild(rect);

        // const setAttributeList = (element, props) => {
        //     Object.entries(props).forEach(([key, value]) =>{
        //         element.setAttributeNS(null, key, value);
        //     })
        // }

        // setAttributeList(rect, {
        //     x: 200,
        //     y: 100,
        //     rx: 10,
        //     ry: 10,
        //     width: 100,
        //     height: 200,
        //     stroke: 'black',
        //     fill: 'orange',
        //     // stroke-width: 2,
        //     });
    }

}
export {chooseElement};

// const svg = document.createElement("svg");
// const defs = document.createElement("defs");
// const marker = document.createElement("marker");
// const line = document.createElement("line");
// const polygon = document.createElement("polygon");
// svg.setAttributeNS(null ,"viewBox", "0 0 350 100");
// marker.id = "arrowhead";
// marker.setAttributeNS(null, "markerWidth", "10")
// marker.setAttributeNS(null, "markerHeight", "7")
// marker.setAttributeNS(null, "refX", "0")
// marker.setAttributeNS(null, "refY", "3.5")
// marker.setAttributeNS(null, "orient", "auto")

// polygon.setAttributeNS(null, "points", "0 0, 10 3.5, 0 7")
// line.setAttributeNS(null, "x1", "0")
// line.setAttributeNS(null, "y1", "50")
// line.setAttributeNS(null, "x2", "250")
// line.setAttributeNS(null, "y2", "50")
// line.setAttributeNS(null, "stroke", "#000")
// line.setAttributeNS(null, "stroke-width", "8")
// line.setAttributeNS(null, "style", "z-index: 1")
// line.setAttributeNS(null, "marker-end", "url(#arrowhead)")

// document.body.appendChild(svg);
// svg.appendChild(defs);
// svg.appendChild(line);
// defs.appendChild(marker); 
// marker.appendChild(polygon); 

export {allElements}