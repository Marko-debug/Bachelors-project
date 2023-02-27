import { select } from './select.js';

//show manipulable dots
export function showManipulableDots(event, name){
    //to show manipulable dots for specifically elements
    if(name == "svg-process" ){
        event.target.parentNode.children[6].style.visibility = 'visible';
        event.target.parentNode.children[7].style.visibility = 'visible';
        event.target.parentNode.children[8].style.visibility = 'visible';
        event.target.parentNode.children[9].style.visibility = 'visible';
    }
    if(name == "svg-event-transition"){
        event.target.parentNode.children[2].style.visibility = 'visible';
        event.target.parentNode.children[3].style.visibility = 'visible';
        event.target.parentNode.children[4].style.visibility = 'visible';
        event.target.parentNode.children[5].style.visibility = 'visible';
    }
    if(name == "svg-physically-flow" || name == "svg-physically-flow-broken"){
        event.target.parentNode.children[2].style.visibility = 'visible';
        event.target.parentNode.children[3].style.visibility = 'visible';
    }
    if(name == "svg-information-flow" || name == "svg-information-flow-broken"){
        event.target.parentNode.children[2].style.visibility = 'visible';
        event.target.parentNode.children[3].style.visibility = 'visible';
    }
    if(name == "svg-sequential-flow" || name == "svg-sequential-flow-broken"){
        event.target.parentNode.children[2].style.visibility = 'visible';
        event.target.parentNode.children[3].style.visibility = 'visible';
    }
    if(name == "svg-split-branches"){
        event.target.parentNode.children[2].style.visibility = 'visible';
        event.target.parentNode.children[3].style.visibility = 'visible';
    }
}

//hide manipulable dots
export function hideManipulableDots(){
    const popped = select.pop();
    const poppedName = popped.className.baseVal;

    // to hide manipulable dots for specifically elements  
    if(poppedName == "svg-process"){
        popped.children[6].style.visibility = 'hidden';
        popped.children[7].style.visibility = 'hidden';
        popped.children[8].style.visibility = 'hidden';
        popped.children[9].style.visibility = 'hidden';
    }
    if(poppedName == "svg-event-transition"){
        popped.children[2].style.visibility = 'hidden';
        popped.children[3].style.visibility = 'hidden';
        popped.children[4].style.visibility = 'hidden';
        popped.children[5].style.visibility = 'hidden';
    }
    if(poppedName == "svg-physically-flow" || poppedName == "svg-physically-flow-broken"){
        popped.children[2].style.visibility = 'hidden';
        popped.children[3].style.visibility = 'hidden';
    }
    if(poppedName == "svg-information-flow" || poppedName == "svg-information-flow-broken"){
        popped.children[2].style.visibility = 'hidden';
        popped.children[3].style.visibility = 'hidden';
    }
    if(poppedName == "svg-sequential-flow" || poppedName == "svg-sequential-flow-broken"){
        popped.children[2].style.visibility = 'hidden';
        popped.children[3].style.visibility = 'hidden';
    }
    if(poppedName == "svg-split-branches"){
        popped.children[2].style.visibility = 'hidden';
        popped.children[3].style.visibility = 'hidden';
    }
}