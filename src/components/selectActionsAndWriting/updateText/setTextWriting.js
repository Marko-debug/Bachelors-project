import {edit} from '../select.js'

//set text attributes to change content Text
export function setTextWriting(elmnt){
    elmnt.removeAttribute("onmousedown")
    elmnt.setAttribute("contenteditable", "true");
    elmnt.parentNode.parentNode.parentNode.setAttribute("style", "visibility: visible; cursor: text")
    edit.push(elmnt)
    console.log("writing...");
}