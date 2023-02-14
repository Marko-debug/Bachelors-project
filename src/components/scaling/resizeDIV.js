import {allElements} from '../chooseShape.js';

export function resizeElement(event, pos1, pos2) {
    event.preventDefault();
    let objIndex = allElements.findIndex(obj => obj.id == event.target.parentNode.id);
    
    const elmnt = document.getElementById(event.target.parentNode.id);

    if(event.target.parentNode.className === "process")resizeProcess();
    else {
        resizeOthers();
    ;}

    function resizeProcess(){
        if(event.target.style.cursor === "se-resize") {

            // if((elmnt.clientHeight - pos2) < 200 && (elmnt.clientWidth - pos1) < 300)return;
            // if((elmnt.clientHeight - pos2) < 200 || (elmnt.clientWidth - pos1) < 300)return;
            // set the caught dot new position:
            event.target.style.top = (event.target.offsetTop - pos2) + "px";
            event.target.style.left = (event.target.offsetLeft - pos1) + "px";
            allElements[objIndex].dotTop4 = (event.target.offsetTop - pos2) + "px";
            allElements[objIndex].dotLeft4 = (event.target.offsetLeft - pos1) + "px";

            // set the ne-resize dot new position:
            event.target.parentNode.children[4].style.left = (event.target.parentNode.children[4].offsetLeft - pos1) + "px";
            allElements[objIndex].dotLeft3 = (event.target.parentNode.children[4].offsetLeft - pos1) + "px";  

            // set the sw-resize dot new position:
            event.target.parentNode.children[3].style.top = (event.target.parentNode.children[3].offsetTop - pos2) + "px";
            allElements[objIndex].dotTop2 = (event.target.parentNode.children[3].offsetTop - pos2) + "px";

            //set the process-time:
            event.target.parentNode.children[0].style.left = (event.target.parentNode.children[0].offsetLeft - pos1) + "px";
            //set the process-owner:
            event.target.parentNode.children[1].style.top= (event.target.parentNode.children[1].offsetTop - pos2) + "px";

            // console.log(`clientWidth: ${elmnt.clientWidth} ,clientHeight: ${elmnt.clientHeight}`)
            // console.log(`width: ${elmnt.style.width} ,height: ${elmnt.style.height}`)

            //set the main element new position:
            elmnt.style.height = (elmnt.clientHeight - pos2) + "px";
            elmnt.style.width = (elmnt.clientWidth - pos1) + "px";

            //update instance
            allElements[objIndex].height = (elmnt.clientHeight - pos2) + "px";
            allElements[objIndex].width = (elmnt.clientWidth - pos1) + "px";
        }
        else if (event.target.style.cursor === "sw-resize") {

            // if((elmnt.clientHeight - pos2) < 200 && (elmnt.clientWidth - pos1) < 300)return;
            // if((elmnt.clientHeight - pos2) < 200 || (elmnt.clientWidth - pos1) < 300)return;
            // set the caught dot new position:
            event.target.style.top = (event.target.offsetTop - pos2) + "px";
            allElements[objIndex].dotTop2 = (event.target.offsetTop - pos2) + "px";

            // set the ne-resize dot new position:
            event.target.parentNode.children[4].style.left = (event.target.parentNode.children[4].offsetLeft + pos1) + "px";
            allElements[objIndex].dotTop3 = (event.target.parentNode.children[4].offsetLeft + pos1) + "px";

            // set the se-resize dot new position:
            event.target.parentNode.children[5].style.top= (event.target.parentNode.children[5].offsetTop - pos2) + "px";
            event.target.parentNode.children[5].style.left= (event.target.parentNode.children[5].offsetLeft + pos1) + "px";
            allElements[objIndex].dotTop4 = (event.target.parentNode.children[5].offsetTop - pos2) + "px";
            allElements[objIndex].dotLeft4 = (event.target.parentNode.children[5].offsetLeft + pos1) + "px";

            //set the process-time:
            event.target.parentNode.children[0].style.left = (event.target.parentNode.children[0].offsetLeft + pos1) + "px";
            //set the process-owner:
            event.target.parentNode.children[1].style.top= (event.target.parentNode.children[1].offsetTop - pos2) + "px";

            //set the main element new position:main element
            elmnt.style.height = (elmnt.clientHeight - pos2) + "px";
            elmnt.style.width = (elmnt.clientWidth + pos1) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            
            //update instance
            allElements[objIndex].height = (elmnt.clientHeight - pos2) + "px";
            allElements[objIndex].width = (elmnt.clientWidth + pos1) + "px";
            allElements[objIndex].left = (elmnt.offsetLeft - pos1) + "px";
        }
        else if (event.target.style.cursor === "ne-resize") {

            // if((elmnt.clientHeight - pos2) < 200 && (elmnt.clientWidth - pos1) < 300)return;
            // if((elmnt.clientHeight - pos2) < 200 || (elmnt.clientWidth - pos1) < 300)return;
            // set the caught dot new position:
            event.target.style.left = (event.target.offsetLeft - pos1) + "px";
            allElements[objIndex].dotLeft3 = (event.target.offsetLeft - pos1) + "px";

            // set the sw-resize dot new position:
            event.target.parentNode.children[3].style.top = (event.target.parentNode.children[3].offsetTop + pos2) + "px";
            allElements[objIndex].dotTop2 = (event.target.parentNode.children[3].offsetTop + pos2) + "px";

            // set the se-resize dot new position:
            event.target.parentNode.children[5].style.left= (event.target.parentNode.children[5].offsetLeft - pos1) + "px";
            event.target.parentNode.children[5].style.top= (event.target.parentNode.children[5].offsetTop + pos2) + "px";
            allElements[objIndex].dotLeft4 = (event.target.parentNode.children[5].offsetLeft - pos1) + "px";
            allElements[objIndex].dotTop4 = (event.target.parentNode.children[5].offsetTop + pos2) + "px";

            //set the process-time:
            event.target.parentNode.children[0].style.left = (event.target.parentNode.children[0].offsetLeft - pos1) + "px";
            //set the process-owner:
            event.target.parentNode.children[1].style.top= (event.target.parentNode.children[1].offsetTop + pos2) + "px";

            //set the main element new position:main element
            elmnt.style.height = (elmnt.clientHeight + pos2) + "px";
            elmnt.style.width = (elmnt.clientWidth - pos1) + "px";
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";

            //update instance
            allElements[objIndex].height = (elmnt.clientHeight + pos2) + "px";
            allElements[objIndex].width = (elmnt.clientWidth - pos1) + "px";
            allElements[objIndex].top = (elmnt.offsetTop - pos2) + "px";
        }
        else{

            // if((elmnt.clientHeight - pos2) < 200 && (elmnt.clientWidth - pos1) < 300)return;
            // if((elmnt.clientHeight - pos2) < 200 || (elmnt.clientWidth - pos1) < 300)return;
            // set the sw-resize dot new position:
            event.target.parentNode.children[3].style.top = (event.target.parentNode.children[3].offsetTop + pos2) + "px";
            allElements[objIndex].dotTop2 = (event.target.parentNode.children[3].offsetTop + pos2) + "px";

            // set the ne-resize dot new position:
            event.target.parentNode.children[4].style.left= (event.target.parentNode.children[4].offsetLeft + pos1) + "px";
            allElements[objIndex].dotLeft3 = (event.target.parentNode.children[4].offsetLeft + pos1) + "px";

            // set the se-resize dot new position:
            event.target.parentNode.children[5].style.left= (event.target.parentNode.children[5].offsetLeft + pos1) + "px";
            event.target.parentNode.children[5].style.top= (event.target.parentNode.children[5].offsetTop + pos2) + "px";
            allElements[objIndex].dotLeft4 = (event.target.parentNode.children[5].offsetLeft + pos1) + "px";
            allElements[objIndex].dotTop4 = (event.target.parentNode.children[5].offsetTop + pos2) + "px";

            //set the process-time:
            event.target.parentNode.children[0].style.left = (event.target.parentNode.children[0].offsetLeft + pos1) + "px";
            //set the process-owner:
            event.target.parentNode.children[1].style.top= (event.target.parentNode.children[1].offsetTop + pos2) + "px";

            //set the main element new position:main element
            elmnt.style.height = (elmnt.clientHeight + pos2) + "px";
            elmnt.style.width = (elmnt.clientWidth + pos1) + "px";
            elmnt.style.top = (elmnt.offsetTop- pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            // elmnt.children[1].style.top =  (elmnt.children[1].offsetTop - pos2) + "px";
            // console.log(`top: ${elmnt.style.top}, topO: ${elmnt.children[1].style.top}`)

            //update instance
            allElements[objIndex].height = (elmnt.clientHeight + pos2) + "px";
            allElements[objIndex].width = (elmnt.clientWidth - pos1) + "px";
            allElements[objIndex].top = (elmnt.offsetTop - pos2) + "px";
            allElements[objIndex].left = (elmnt.offsetLeft - pos1) + "px";
            // console.log(elmnt.children[1].offsetTop)
            // allElements[objIndex].topT = (elmnt.offsetTop - pos2) + "px";
            // allElements[objIndex].leftT = (elmnt.offsetLeft - pos1) + "px";
            // allElements[objIndex].topO = (elmnt.offsetTop - pos2) + "px";
            // allElements[objIndex].leftO = (elmnt.offsetLeft - pos1) + "px";
        }
    }




    function resizeOthers(){
        if(event.target.style.cursor === "se-resize") {

            // if((elmnt.clientHeight - pos2) < 200 && (elmnt.clientWidth - pos1) < 300)return;
            // if((elmnt.clientHeight - pos2) < 200 || (elmnt.clientWidth - pos1) < 300)return;
            // set the caught dot new position:
            event.target.style.top = (event.target.offsetTop - pos2) + "px";
            event.target.style.left = (event.target.offsetLeft - pos1) + "px";

            // set the ne-resize dot new position:
            event.target.parentNode.children[2].style.left = (event.target.parentNode.children[2].offsetLeft - pos1) + "px";

            // set the sw-resize dot new position:
            event.target.parentNode.children[1].style.top= (event.target.parentNode.children[1].offsetTop - pos2) + "px";

            // console.log(`clientWidth: ${elmnt.clientWidth} ,clientHeight: ${elmnt.clientHeight}`)
            // console.log(`width: ${elmnt.style.width} ,height: ${elmnt.style.height}`)

            //set the main element new position:
            elmnt.style.height = (elmnt.clientHeight - pos2) + "px";
            elmnt.style.width = (elmnt.clientWidth - pos1) + "px";
        }
        else if (event.target.style.cursor === "sw-resize") {

            // if((elmnt.clientHeight - pos2) < 200 && (elmnt.clientWidth - pos1) < 300)return;
            // if((elmnt.clientHeight - pos2) < 200 || (elmnt.clientWidth - pos1) < 300)return;
            // set the caught dot new position:
            event.target.style.top = (event.target.offsetTop - pos2) + "px";

            // set the ne-resize dot new position:
            event.target.parentNode.children[2].style.left = (event.target.parentNode.children[2].offsetLeft + pos1) + "px";

            // set the se-resize dot new position:
            event.target.parentNode.children[3].style.top= (event.target.parentNode.children[3].offsetTop - pos2) + "px";
            event.target.parentNode.children[3].style.left= (event.target.parentNode.children[3].offsetLeft + pos1) + "px";

            //set the main element new position:main element
            elmnt.style.height = (elmnt.clientHeight - pos2) + "px";
            elmnt.style.width = (elmnt.clientWidth + pos1) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
        else if (event.target.style.cursor === "ne-resize") {

            // if((elmnt.clientHeight - pos2) < 200 && (elmnt.clientWidth - pos1) < 300)return;
            // if((elmnt.clientHeight - pos2) < 200 || (elmnt.clientWidth - pos1) < 300)return;
            // set the caught dot new position:
            event.target.style.left = (event.target.offsetLeft - pos1) + "px";

            // set the sw-resize dot new position:
            event.target.parentNode.children[1].style.top = (event.target.parentNode.children[1].offsetTop + pos2) + "px";

            // set the ne-resize dot new position:
            event.target.parentNode.children[3].style.left= (event.target.parentNode.children[3].offsetLeft - pos1) + "px";
            event.target.parentNode.children[3].style.top= (event.target.parentNode.children[3].offsetTop + pos2) + "px";

            //set the main element new position:main element
            elmnt.style.height = (elmnt.clientHeight + pos2) + "px";
            elmnt.style.width = (elmnt.clientWidth - pos1) + "px";
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        }
        else{

            // if((elmnt.clientHeight - pos2) < 200 && (elmnt.clientWidth - pos1) < 300)return;
            // if((elmnt.clientHeight - pos2) < 200 || (elmnt.clientWidth - pos1) < 300)return;
            // set the sw-resize dot new position:
            event.target.parentNode.children[1].style.top = (event.target.parentNode.children[1].offsetTop + pos2) + "px";

            // set the ne-resize dot new position:
            event.target.parentNode.children[2].style.left= (event.target.parentNode.children[2].offsetLeft + pos1) + "px";

            // set the se-resize dot new position:
            event.target.parentNode.children[3].style.left= (event.target.parentNode.children[3].offsetLeft + pos1) + "px";
            event.target.parentNode.children[3].style.top= (event.target.parentNode.children[3].offsetTop + pos2) + "px";

            //set the main element new position:main element
            elmnt.style.height = (elmnt.clientHeight + pos2) + "px";
            elmnt.style.width = (elmnt.clientWidth + pos1) + "px";
            elmnt.style.top = (elmnt.offsetTop- pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
    }
}