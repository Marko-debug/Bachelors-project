import { generateElements} from "../generating/generateElements.js";
import { Process} from "../elements/svgClasses/Process.js";
import {PhysicallyFlow} from "../elements/svgClasses/PhysicallyFlow.js";
import { PhysicallyFlowBroken } from "../elements/svgClasses/PhysicallyFlowBroken.js";
import {Input} from "../elements/svgClasses/Input.js";
import {Output}  from "../elements/svgClasses/Output.js"
import {EventTransition} from "../elements/svgClasses/EventTransition.js"
import {EndOfInstance} from "../elements/svgClasses/EndOfInstance.js";
import {TwoBranching} from "../elements/svgClasses/TwoBranching.js";
import {ThreeBranching} from "../elements/svgClasses/ThreeBranching.js";
import { Parallel } from "../elements/svgClasses/Parallel.js";
import { Rediraction } from "../elements/svgClasses/Rediraction.js";

import { generateSVG} from "../generating/generateSVG.js";
import { processGenerate} from "../generating/processGenerate.js";
import { textGenerate} from "../generating/textGenerate.js";
import { make } from "../generating/make.js";
import { EndOfTwoProcess } from "../elements/svgClasses/EndOfTwoProcess.js";
import { EndOfThreeProcess } from "../elements/svgClasses/EndOfThreeProcess.js";
// import { allData } from "./serialize.js";
import { allElements } from "../chooseShape.js";

// const getBtnDeserialize = document.querySelector(".open-file");

// getBtnDeserialize.addEventListener("click", ()=> deserializeData())

//it is not fully fuctional
window.loadFile = function loadFile() {
  var input, file, fr;

  if (typeof window.FileReader !== 'function') {
    alert("The file API isn't supported on this browser yet.");
    return;
  }

  input = document.getElementById('fileinput');
  if (!input) {
    alert("Um, couldn't find the fileinput element.");
  }
  else if (!input.files) {
    alert("This browser doesn't seem to support the `files` property of file inputs.");
  }
  else if (!input.files[0]) {
    alert("Please select a file before clicking 'Load'");
  }
  else {
    file = input.files[0];
    fr = new FileReader();
    fr.onload = receivedText;
    fr.readAsText(file);
  }

  function receivedText(e) {
    console.log(e.target.result)
    let lines = e.target.result;
    var newArr = JSON.parse(lines); 
    console.log(newArr)

    newArr.forEach((element) =>{
        recoverElement(element);
        console.log('...deserialized...')
    })
  }
}

const recoverElement = (element) => {
    if(element.name === "svg-process"){

        const object = new Process(element.id, element.name, element.x, element.y, element.width, element.height, element.xT, element.yT, element.widthT, element.heightT, element.xO, element.yO, element.widthO, element.heightO, element.cx1, element.cy1, element.cx2, element.cy2, element.cx3, element.cy3, element.cx4, element.cy4, element.valueX, element.valueY);
        allElements.push(object);
        processGenerate(element.id, element.name, object)
    }
    else if(element.name === "text"){
        const object = new Text(element.id, element.name, element.content, element.top, element.left, element.valueX, element.valueY)
        allElements.push(object);
        textGenerate(element.id, element.name, object)
    }
    else if(element.name === "physically-flow"){
        const path = [{name: "line", xMove: 500, yMove: 180, xLine1: 790, yLine1: 180},{name: "arrow", xMove: 790, yMove: 180, xLine1: 783, yLine1: 183, xLine2: 785, yLine2: 180, xLine3: 783, yLine3: 176}, {name: "dot1", x: 790, y: 180}, {name: "dot2", x: 500, y: 180}];
        const object = new PhysicallyFlow(id, className, path, 0, 0)
        allElements.push(object);
        make(id, className);
    }
    else if(element.name === "physically-flow-broken"){
        const path = [{name: "line1", xMove: 500, yMove: 180, xLine1: 600, yLine1: 180},{name: "line2", xMove: 600, yMove: 180, xLine1: 600, yLine1: 280},{name: "arrow", xMove: 600, yMove: 280, xLine1: 603, yLine1: 273, xLine2: 597, yLine2: 273, xLine3: 597, yLine3: 273}, {name: "dot1", x: 600, y: 280}, {name: "dot2", x: 500, y: 180}];
        const object = new PhysicallyFlowBroken(id, className, path)
        allElements.push(object);
        make(id, className);
    }
    else if(element.name === "svg-input"){
        const object = new Input(element.id, element.name, element.xMove, element.yMove, element.xLine1, element.yLine1, element.xLine2, element.yLine2, element.xLine3, element.yLine3, element.xLine4, element.yLine4, element.xLine5, element.yLine5, element.xLine6, element.yLine6, element.xLine7, element.yLine7, element.valueX, element.valueY)
        allElements.push(object);
        generateSVG(element.id, element.name, object);  
    }
    else if(element.name === "svg-output"){
        const object = new Output(element.id, element.name, element.xMove, element.yMove, element.xLine1, element.yLine1, element.xLine2, element.yLine2, element.xLine3, element.yLine3, element.xLine4, element.yLine4, element.xLine5, element.yLine5, element.xLine6, element.yLine6, element.xLine7, element.yLine7, element.valueX, element.valueY)
        allElements.push(object);
        generateSVG(element.id, element.name, object);  
    }
    else if(element.name === "svg-event-transition"){
        const object = new EventTransition(element.id, element.name, 
        element.x, element.y, element.widht, element.height, element.cx1, element.cy1, element.cx2, element.cy2, element.cx3, element.cy3, element.cx4, element.cy4, element.valueX, element.valueY);
        allElements.push(object);
        processGenerate(element.id, element.name, object);  
    }
    else if(element.name === "end-of-instance"){
        const object = new EndOfInstance(element.id, element.name, element.cx, element.cy, element.x, element.y, element.valueX, element.valueY);
        allElements.push(object);
        generateSVG(element.id, element.name, object)
    }
    else if(element.name === "two-branches"){
        const object = new TwoBranching(element.id, element.name, element.x, element.y, element.width, element.height, element.valueX, element.valueY);
        allElements.push(object);
        generateSVG(element.id, element.name, object)
    }
    else if(element.name === "three-branches"){
        const object = new ThreeBranching(element.id, element.name, element.x, element.y, element.width, element.height, element.valueX, element.valueY);
        allElements.push(object);
        generateSVG(element.id, element.name, object)
    }
    else if(element.name === "svg-rediraction"){
        const object = new Rediraction(element.id, element.name, element.xMove, element.yMove, element.xLine1, element.yLine1, element.xLine2, element.yLine2, element.xLine3, element.yLine3, element.xLine4, element.yLine4, element.xLine5, element.yLine5,element.xLine6, element.yLine6, element.xLine7, element.yLine7, element.xLine8, element.yLine8, element.valueX, element.valueY)
        allElements.push(object);
        generateSVG(element.id, element.name, object);
    }
    else if(element.name === "svg-parallel"){
        const object = new Parallel(element.id, element.name, element.xMove, element.yMove, element.xLine1, element.yLine1, element.xLine2, element.yLine2, element.xLine3, element.yLine3, element.xLine4, element.yLine4, element.xLine5, element.yLine5, element.xLine6, element.yLine6, element.xLine7, element.yLine7, element.valueX, element.valueY)
        allElements.push(object);
        generateSVG(element.id, element.name, object);
    }
    else if(element.name === "svg-end-of-two-processes"){
        const object = new EndOfTwoProcess(element.id, element.name, element.cx, element.cy, element.xMove1, element.yMove1, element.xLine1, element.yLine1, element.xMove2, element.yMove2, element.xLine2, element.yLine2, element.valueX, element.valueY)
        allElements.push(object);
        generateSVG(element.id, element.name, object);
    }
    else if(element.name === "svg-end-of-three-processes"){
        const object = new EndOfThreeProcess(element.id, element.name, element.cx, element.cy, element.xMove1, element.yMove1, element.xLine1, element.yLine1, element.xMove2, element.yMove2, element.xLine2, element.yLine2, element.xMove3, element.yMove3, element.xLine3, element.yLine3, element.valueX, element.valueY)
        allElements.push(object);
        generateSVG(element.id, element.name, object);
    }    
    else{
        console.log('i do not know')
    }

}