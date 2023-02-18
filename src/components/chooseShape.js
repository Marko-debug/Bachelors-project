// import {v4 as uuidv4} from 'uuid';
// const { v4: uuidv4 } = require('uuid');
import { generateElements} from "./generating/generateElements.js";
import { Process} from "./elements/svgClasses/Process.js";
import { Text } from "./elements/svgClasses/Text.js";
import {PhysicallyFlow} from "./elements/svgClasses/PhysicallyFlow.js";
import { PhysicallyFlowBroken } from "./elements/svgClasses/PhysicallyFlowBroken.js";
import {Input} from "./elements/svgClasses/Input.js";
import { Output } from "./elements/svgClasses/Output.js"
import {EventTransition} from "./elements/svgClasses/EventTransition.js"
import {EndOfInstance} from "./elements/svgClasses/EndOfInstance.js";
import {TwoBranching} from "./elements/svgClasses/TwoBranching.js";
import {ThreeBranching} from "./elements/svgClasses/ThreeBranching.js";
import { Parallel } from "./elements/svgClasses/Parallel.js";
import { Rediraction } from "./elements/svgClasses/Rediraction.js";

import { generateSVG} from "./generating/generateSVG.js";
import { processGenerate} from "./generating/processGenerate.js";
import { textGenerate} from "./generating/textGenerate.js";
import { generatePhysicallyFlow } from "./generating/generatePhysicallyFlow.js";
import { generatePhysicallyFlowBroken } from "./generating/generatePhysicallyFlowBroken.js";
import { EndOfTwoProcess } from "./elements/svgClasses/EndOfTwoProcess.js";
import { EndOfThreeProcess } from "./elements/svgClasses/EndOfThreeProcess.js";

const allElements = [];

// const object = new Parallel(6, "svg-parallel", 650, 80, 630, 60, 500, 60, 500, 150, 650, 150, 650, 80, 630, 80, 630, 60, 0, 0);
// allElements.push(object);
// const object1 = new Text(20, "text", "60px", "500px")
// allElements.push(object1);
// const object2 = new Text(21, "text", "60px", "500px")
// allElements.push(object2);
// const object = new Process(36, "process", "300px", "200px", "60px", "500px","150px","60px", "-2px","148px","180px", "60px", "138px","-2px","-8px", "190px", "-8px", "190px", "-8px", "-8px", "286px", "290px");
// allElements.push(object); 
// const object = new Process(9642, "svg-process", 500, 100, 350, 200, 680, 100, 170, 50, 500, 250, 170, 50, 5637, "Timer", 115, 730, 3243, "Owner", 265, 530, 9884, "Process", 160, 530, 505, 105, 845, 105, 505, 295, 845, 295, 0, 0);
// allElements.push(object);

//function for generating id 
const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

const chooseElement = (element) => {
    // const process = document.querySelector(`.${element}`)
    // process.addEventListener("click", () => {
    // let myuuid = uuidv4();
    // console.log('Your UUID is: ' + myuuid);

    if(element === "btn-process"){

        const className = "svg-process";
        const id = s4();
        const idTimer = s4();
        const idOwner = s4();
        const idProcess = s4();
        const object = new Process(id, className, 500, 100, 350, 200, 680, 100, 170, 50, 500, 250, 170, 50, `timer-${idTimer}`, "Timer", 115, 730, `owner-${idOwner}`, "Owner", 265, 530, `process-${idProcess}`, "Process", 160, 530, 505, 105, 845, 105, 505, 295, 845, 295, 0, 0);
        allElements.push(object);
        processGenerate(id, className, object);
        // const className = "process";
        // const id = Math. floor(Math. random() * 100);
        // const object = new Process(id, className, "300px", "200px", "60px", "500px","150px","60px", "-2px","148px","180px", "60px", "138px","-2px","-8px", "190px", "-8px", "190px", "-8px", "-8px", "286px", "290px");
        // allElements.push(object);
        // generateElements(elements, className, object)
    }
    else if(element === "btn-text"){
        const className = "svg-text";
        const id = s4();
        const object = new Text(id, className, "Text", 150, 600, 0, 0)
        allElements.push(object);
        textGenerate(id, className, object)
    }
    else if(element === "btn-physically-flow"){
        const className = "svg-physically-flow";
        const id = s4();
        const path = [
            {name: "line", xMove: 500, yMove: 180, xLine1: 790, yLine1: 180},
            {name: "arrow", xMove: 790, yMove: 180, xLine1: 783, yLine1: 183, xLine2: 785, yLine2: 180, xLine3: 783, yLine3: 176}, 
            {name: "dot1", x: 790, y: 180},
            {name: "dot2", x: 500, y: 180}];
        const object = new PhysicallyFlow(id, className, path, 0, 0)
        allElements.push(object);
        generatePhysicallyFlow(id, className, object);
    }
    else if(element === "btn-physically-flow-broken"){
        const className = "svg-physically-flow-broken";
        const id = s4();
        const path = [
            {name: "line", xMove: 500, yMove: 180, xLine1: 600, yLine1: 180, xLine2: 600, yLine2: 280},
            {name: "arrow", xMove: 600, yMove: 280, xLine1: 603, yLine1: 273, xLine2: 597, yLine2: 273, xLine3: 597, yLine3: 273}, 
            {name: "dot1", x: 600, y: 280},
            {name: "dot2", x: 500, y: 180}];
        const object = new PhysicallyFlowBroken(id, className, path)
        allElements.push(object);
        generatePhysicallyFlowBroken(id, className, object);
    }
    else if(element === "btn-input"){
        const className = "svg-input";
        const id = s4();
        const idText = s4();
        const object = new Input(id, className, 500, 60, 500, 110, 650, 110, 650, 140, 700, 85, 650, 30, 650, 60, 500, 60, idText,"Input", 65, 510, 0, 0) // right
        // const object = new Input(id, className, 700, 60, 700, 110, 550, 110, 550, 140, 500, 85, 550, 30, 550, 60, 700, 60, 0, 0)  // left
        // const object = new Input(id, className, 550, 250, 600, 250, 600, 100, 630, 100, 575, 50, 520, 100, 550, 100, 550, 250, 0, 0)  // upwards
        // const object = new Input(id, className, 550, 50, 600, 50, 600, 200, 630, 200, 575, 250, 520, 200, 550, 200, 550, 50, 0, 0)  // downwards
        allElements.push(object);
        generateSVG(id, className, object);  
    }
    else if(element === "btn-output"){

        const className = "svg-output";
        const id = s4();
        const idText = s4();
        const object = new Output(id, className, 500, 60, 500, 110, 650, 110, 650, 140, 700, 85, 650, 30, 650, 60, 500, 60, idText,"Output", 65, 510, 0, 0) // right
        // const object = new Output(id, className, 700, 60, 700, 110, 550, 110, 550, 140, 500, 85, 550, 30, 550, 60, 700, 60, 0, 0)  // left
        // const object = new Output(id, className, 550, 250, 600, 250, 600, 100, 630, 100, 575, 50, 520, 100, 550, 100, 550, 250, 0, 0)  // upwards
        // const object = new Output(id, className, 550, 50, 600, 50, 600, 200, 630, 200, 575, 250, 520, 200, 550, 200, 550, 50, 0, 0)  // downwards
        allElements.push(object);
        generateSVG(id, className, object);  

        // const name = "output";
        // const id = s4();
        // const object = new Output(id, name, "60px", "500px");
        // allElements.push(object);
        // generateElements(elements, name, object)
    }
    else if(element === "btn-event-transition"){

        const className = "svg-event-transition";
        const id = s4();
        const idText = s4();
        const object = new EventTransition(id, className, 500, 100, 170, 60, 510, 110, 660, 110, 510, 150, 660, 150, idText,"Event Name", 120, 510, 0, 0);
        allElements.push(object);
        processGenerate(id, className, object);  
    }
    else if(element === "btn-end-of-instance"){

        const className = "svg-end-of-instance";
        const id = s4();
        const object = new EndOfInstance(id, className, 600, 100, 585, 115, 0, 0);
        allElements.push(object);
        generateSVG(id, className, object)
    }
    else if(element === "btn-two-branches"){

        const className = "svg-two-branching"
        const id = s4();
        const idText = s4();
        const object = new TwoBranching(id, className, 500, 100, 100, 100, idText,"Question", 110, 510, 0, 0);
        allElements.push(object);
        generateSVG(id, className, object)
    }
    else if(element === "btn-three-branches"){
        const className = "svg-three-branching"
        const id = s4();
        const idText = s4();
        const object = new ThreeBranching(id, className, 500, 100, 100, 100, idText,"Question", 110, 510, 0, 0);
        allElements.push(object);
        generateSVG(id, className, object)
    }
    else if(element === "btn-rediraction"){
        const className = "svg-rediraction";
        const id = s4();
        const idText = s4();
        const object = new Rediraction(id, className, 700, 80, 660, 110, 660, 160, 700, 190, 750, 190, 790, 160, 790, 110, 750, 80, 700, 80, idText,"Connector <br> number", 110, 685,0, 0)
        allElements.push(object);
        generateSVG(id, className, object);
    }
    else if(element === "btn-parallel"){
        const className = "svg-parallel";
        const id = s4();
        const idText = s4();
        const object = new Parallel(id, className, 650, 80, 630, 60, 500, 60, 500, 150, 650, 150, 650, 80, 630, 80, 630, 60, idText,"Message", 80, 510, 0, 0)
        allElements.push(object);
        generateSVG(id, className, object);
    }
    else if(element === "btn-end-of-two-processes"){
        const className = "svg-end-of-two-processes";
        const id = s4();
        const object = new EndOfTwoProcess(id, className, 600, 100, 580, 55, 580, 145, 620, 55, 620, 145, 0, 0)
        allElements.push(object);
        generateSVG(id, className, object);
    }
    else if(element === "btn-end-of-three-processes"){
        const className = "svg-end-of-three-processes";
        const id = s4();
        const object = new EndOfThreeProcess(id, className, 600, 100, 575, 56, 575, 144, 600, 50, 600, 150, 625, 56, 625, 144, 0, 0)
        allElements.push(object);
        generateSVG(id, className, object);
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
export {allElements}