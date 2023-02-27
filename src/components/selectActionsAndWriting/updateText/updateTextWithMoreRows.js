import {edit} from '../select.js';


//when is more rows,then there create automatically divs and this function change divs to <br> 
export function updateTextWithMoreRows(popped){
    let elmnt;
    // if(event.target.className === "svg-text"){
    //     elmnt = document.getElementById(event.target.id);
    //     return;
    // }
    // else{
    //     elmnt = document.getElementById(event.target.parentNode.id);
    // }
    elmnt = document.getElementById(popped.id);

    //to get svg-elements back 
    if(edit.length === 1){
        updateText();
    }

    //to change svg-text to contentedible element
    if(elmnt.className === "svg-text" || elmnt.className === "text"){
        let text = [];
        // here, it change rows from divs to br between text when text has more than one row
        if(elmnt !== null){
            while (elmnt.firstChild) {
                text.push(elmnt.firstChild.innerText);
                elmnt.removeChild(elmnt.firstChild);
            }
            const linebreak = document.createElement("br");
            for(let i= 0; i < text.length; i++){
                elmnt.innerHTML += text[i];
                elmnt.appendChild(linebreak);
            }
        }
    }
}