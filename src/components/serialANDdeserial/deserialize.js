import { generateElements} from "../generating/generateElements.js";
import { Process} from "../elements/svgClasses/Process.js";
import { Text } from "../elements/svgClasses/Text.js";
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
import { generatePhysicallyFlow } from "../generating/generatePhysicallyFlow.js";
import { generatePhysicallyFlowBroken } from "../generating/generatePhysicallyFlowBroken.js";
import { EndOfTwoProcess } from "../elements/svgClasses/EndOfTwoProcess.js";
import { EndOfThreeProcess } from "../elements/svgClasses/EndOfThreeProcess.js";
// import { allData } from "./serialize.js";
import { allElements } from "../chooseShape.js";

// const getBtnDeserialize = document.querySelector(".open-file");

// getBtnDeserialize.addEventListener("click", ()=> deserializeData())

//it is not fully fuctional
window.loadFile = function loadFile() {
  var input, file, fr;

    check();

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
    let lines = e.target.result;
    var newArr = JSON.parse(lines); 

    newArr.forEach((element) =>{
        recoverElement(element);
        console.log('...deserialized...')
    })
  }
}

function check(){
    let shapeSVG = document.querySelector(".svg-elements");
    if(shapeSVG !== null){
        while (shapeSVG.firstChild) {
            shapeSVG.removeChild(shapeSVG.firstChild);
        }
    }
}

const recoverElement = (element) => {
    if(element.name === "svg-process"){

        const object = new Process(element.id, element.name, element.x, element.y, element.width, element.height, element.xT, element.yT, element.widthT, element.heightT, element.xO, element.yO, element.widthO, element.heightO, element.idTimer, element.contentTimer, element.topTimer, element.leftTimer, element.idOwner, element.contentOwner, element.topOwner, element.leftOwner, element.idProcess, element.contentProcess, element.topProcess, element.leftProcess, element.cx1, element.cy1, element.cx2, element.cy2, element.cx3, element.cy3, element.cx4, element.cy4, 0, 0);
        allElements.push(object);
        processGenerate(element.id, element.name, object)
    }
    else if(element.name === "svg-text"){
        const object = new Text(element.id, element.name, element.contentText, element.top, element.left, 0, 0)
        allElements.push(object);
        textGenerate(element.id, element.name, object)
    }
    else if(element.name === "svg-physically-flow"){
        const line = element.objects[0];
        const arrow = element.objects[1];
        const dot1 = element.objects[2];
        const dot2 = element.objects[3];
        const path = [{name: line.name, xMove: line.xMove, yMove: line.yMove, xLine1: line.xLine1, yLine1: line.yLine1},
                      {name: arrow.name, xMove: arrow.xMove, yMove: arrow.yMove, xLine1: arrow.xLine1, yLine1: arrow.yLine1, xLine2: arrow.xLine2, yLine2: arrow.yLine2, xLine3: arrow.xLine3, yLine3: arrow.yLine3, direction: arrow.direction},
                      {name: dot1.name, x: dot1.x, y: dot1.y}, 
                      {name: dot2.name, x: dot2.x, y: dot2.y}];
        const object = new PhysicallyFlow(element.id, element.name, path, 0, 0)
        allElements.push(object);
        generatePhysicallyFlow(element.id, element.name, object);
    }
    else if(element.name === "svg-physically-flow-broken"){
        const line = element.objects[0];
        const arrow = element.objects[1];
        const dot1 = element.objects[2];
        const dot2 = element.objects[3];
        const path = [{name: line.name, xMove: line.xMove, yMove: line.yMove, xLine1: line.xLine1, yLine1: line.yLine1, xLine2: line.xLine2, yLine2: line.yLine2},
                      {name: arrow.name, xMove: arrow.xMove, yMove: arrow.yMove, xLine1: arrow.xLine1, yLine1: arrow.yLine1, xLine2: arrow.xLine2, yLine2: arrow.yLine2, xLine3: arrow.xLine3, yLine3: arrow.yLine3, direction: arrow.direction}, 
                      {name: dot1.name, x: dot1.x, y: dot1.y}, 
                      {name: dot2.name, x: dot2.x, y: dot2.y}];
        const object = new PhysicallyFlowBroken(element.id, element.name, path, 0, 0)
        allElements.push(object);
        generatePhysicallyFlowBroken(element.id, element.name, object);
    }
    else if(element.name === "svg-information-flow"){
        const line = element.objects[0];
        const arrow = element.objects[1];
        const dot1 = element.objects[2];
        const dot2 = element.objects[3];
        const path = [{name: line.name, xMove: line.xMove, yMove: line.yMove, xLine1: line.xLine1, yLine1: line.yLine1},
                      {name: arrow.name, xMove: arrow.xMove, yMove: arrow.yMove, xLine1: arrow.xLine1, yLine1: arrow.yLine1, xLine2: arrow.xLine2, yLine2: arrow.yLine2, xLine3: arrow.xLine3, yLine3: arrow.yLine3, direction: arrow.direction},
                      {name: dot1.name, x: dot1.x, y: dot1.y}, 
                      {name: dot2.name, x: dot2.x, y: dot2.y}];
        const object = new PhysicallyFlow(element.id, element.name, path, 0, 0)
        allElements.push(object);
        generatePhysicallyFlow(element.id, element.name, object);
    }
    else if(element.name === "svg-information-flow-broken"){
        const line = element.objects[0];
        const arrow = element.objects[1];
        const dot1 = element.objects[2];
        const dot2 = element.objects[3];
        const path = [{name: line.name, xMove: line.xMove, yMove: line.yMove, xLine1: line.xLine1, yLine1: line.yLine1, xLine2: line.xLine2, yLine2: line.yLine2},
                      {name: arrow.name, xMove: arrow.xMove, yMove: arrow.yMove, xLine1: arrow.xLine1, yLine1: arrow.yLine1, xLine2: arrow.xLine2, yLine2: arrow.yLine2, xLine3: arrow.xLine3, yLine3: arrow.yLine3, direction: arrow.direction}, 
                      {name: dot1.name, x: dot1.x, y: dot1.y}, 
                      {name: dot2.name, x: dot2.x, y: dot2.y}];
        const object = new PhysicallyFlowBroken(element.id, element.name, path, 0, 0)
        allElements.push(object);
        generatePhysicallyFlowBroken(element.id, element.name, object);
    }
    else if(element.name === "svg-sequential-flow"){
        const line = element.objects[0];
        const arrow = element.objects[1];
        const dot1 = element.objects[2];
        const dot2 = element.objects[3];
        const path = [{name: line.name, xMove: line.xMove, yMove: line.yMove, xLine1: line.xLine1, yLine1: line.yLine1},
                      {name: arrow.name, xMove: arrow.xMove, yMove: arrow.yMove, xLine1: arrow.xLine1, yLine1: arrow.yLine1, xLine2: arrow.xLine2, yLine2: arrow.yLine2, xLine3: arrow.xLine3, yLine3: arrow.yLine3, direction: arrow.direction},
                      {name: dot1.name, x: dot1.x, y: dot1.y}, 
                      {name: dot2.name, x: dot2.x, y: dot2.y}];
        const object = new PhysicallyFlow(element.id, element.name, path, 0, 0)
        allElements.push(object);
        generatePhysicallyFlow(element.id, element.name, object);
    }
    else if(element.name === "svg-sequential-flow-broken"){
        const line = element.objects[0];
        const arrow = element.objects[1];
        const dot1 = element.objects[2];
        const dot2 = element.objects[3];
        const path = [{name: line.name, xMove: line.xMove, yMove: line.yMove, xLine1: line.xLine1, yLine1: line.yLine1, xLine2: line.xLine2, yLine2: line.yLine2},
                      {name: arrow.name, xMove: arrow.xMove, yMove: arrow.yMove, xLine1: arrow.xLine1, yLine1: arrow.yLine1, xLine2: arrow.xLine2, yLine2: arrow.yLine2, xLine3: arrow.xLine3, yLine3: arrow.yLine3, direction: arrow.direction}, 
                      {name: dot1.name, x: dot1.x, y: dot1.y}, 
                      {name: dot2.name, x: dot2.x, y: dot2.y}];
        const object = new PhysicallyFlowBroken(element.id, element.name, path, 0, 0)
        allElements.push(object);
        generatePhysicallyFlowBroken(element.id, element.name, object);
    }
    else if(element.name === "svg-input-right"){
        const object = new Input(element.id, element.name, element.xMove, element.yMove, element.xLine1, element.yLine1, element.xLine2, element.yLine2, element.xLine3, element.yLine3, element.xLine4, element.yLine4, element.xLine5, element.yLine5, element.xLine6, element.yLine6, element.xLine7, element.yLine7, element.idText, element.contentText, element.topText, element.leftText, 0, 0)
        allElements.push(object);
        generateSVG(element.id, element.name, object);  
    }
    else if(element.name === "svg-output-right"){
        const object = new Output(element.id, element.name, element.xMove, element.yMove, element.xLine1, element.yLine1, element.xLine2, element.yLine2, element.xLine3, element.yLine3, element.xLine4, element.yLine4, element.xLine5, element.yLine5, element.xLine6, element.yLine6, element.xLine7, element.yLine7, element.idText, element.contentText, element.topText, element.leftText, 0, 0)
        allElements.push(object);
        generateSVG(element.id, element.name, object);  
    }
    else if(element.name === "svg-input-left"){
        const object = new Input(element.id, element.name, element.xMove, element.yMove, element.xLine1, element.yLine1, element.xLine2, element.yLine2, element.xLine3, element.yLine3, element.xLine4, element.yLine4, element.xLine5, element.yLine5, element.xLine6, element.yLine6, element.xLine7, element.yLine7, element.idText, element.contentText, element.topText, element.leftText, 0, 0)
        allElements.push(object);
        generateSVG(element.id, element.name, object);  
    }
    else if(element.name === "svg-output-left"){
        const object = new Output(element.id, element.name, element.xMove, element.yMove, element.xLine1, element.yLine1, element.xLine2, element.yLine2, element.xLine3, element.yLine3, element.xLine4, element.yLine4, element.xLine5, element.yLine5, element.xLine6, element.yLine6, element.xLine7, element.yLine7, element.idText, element.contentText, element.topText, element.leftText, 0, 0)
        allElements.push(object);
        generateSVG(element.id, element.name, object);  
    }
    else if(element.name === "svg-event-transition"){
        const object = new EventTransition(element.id, element.name, 
        element.x, element.y, element.width, element.height, element.cx1, element.cy1, element.cx2, element.cy2, element.cx3, element.cy3, element.cx4, element.cy4, element.idText, element.contentText, element.topText, element.leftText, 0, 0);
        allElements.push(object);
        processGenerate(element.id, element.name, object);  
    }
    else if(element.name === "svg-end-of-instance"){
        const object = new EndOfInstance(element.id, element.name, element.cx, element.cy, element.x, element.y, 0, 0);
        allElements.push(object);
        generateSVG(element.id, element.name, object)
    }
    else if(element.name === "svg-two-branching"){
        const object = new TwoBranching(element.id, element.name, element.x, element.y, element.width, element.height, element.idText, element.contentText, element.topText, element.leftText, 0, 0);
        allElements.push(object);
        generateSVG(element.id, element.name, object)
    }
    else if(element.name === "svg-three-branching"){
        const object = new ThreeBranching(element.id, element.name, element.x, element.y, element.width, element.height, element.idText, element.contentText, element.topText, element.leftText, 0, 0);
        allElements.push(object);
        generateSVG(element.id, element.name, object)
    }
    else if(element.name === "svg-rediraction"){
        const object = new Rediraction(element.id, element.name, element.xMove, element.yMove, element.xLine1, element.yLine1, element.xLine2, element.yLine2, element.xLine3, element.yLine3, element.xLine4, element.yLine4, element.xLine5, element.yLine5,element.xLine6, element.yLine6, element.xLine7, element.yLine7, element.xLine8, element.yLine8, element.idText, element.contentText, element.topText, element.leftText, 0, 0)
        allElements.push(object);
        generateSVG(element.id, element.name, object);
    }
    else if(element.name === "svg-parallel"){
        const object = new Parallel(element.id, element.name, element.xMove, element.yMove, element.xLine1, element.yLine1, element.xLine2, element.yLine2, element.xLine3, element.yLine3, element.xLine4, element.yLine4, element.xLine5, element.yLine5, element.xLine6, element.yLine6, element.xLine7, element.yLine7, element.idText, element.contentText, element.topText, element.leftText, 0, 0)
        allElements.push(object);
        generateSVG(element.id, element.name, object);
    }
    else if(element.name === "svg-end-of-two-processes"){
        const object = new EndOfTwoProcess(element.id, element.name, element.cx, element.cy, element.xMove1, element.yMove1, element.xLine1, element.yLine1, element.xMove2, element.yMove2, element.xLine2, element.yLine2, 0, 0)
        allElements.push(object);
        generateSVG(element.id, element.name, object);
    }
    else if(element.name === "svg-end-of-three-processes"){
        const object = new EndOfThreeProcess(element.id, element.name, element.cx, element.cy, element.xMove1, element.yMove1, element.xLine1, element.yLine1, element.xMove2, element.yMove2, element.xLine2, element.yLine2, element.xMove3, element.yMove3, element.xLine3, element.yLine3, 0, 0)
        allElements.push(object);
        generateSVG(element.id, element.name, object);
    }    
    else{
        console.log('i do not know')
    }

}