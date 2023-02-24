// import { dataForSelectDots } from "../selectActions/selectDots.js";


// it is not working right now
export function generateElements(elements, name, object){
    
    if(name === "text"){
        const div = document.createElement("div")
        div.setAttribute("id", object.getId)
        div.classList.add("text")
        elements.appendChild(div)
        div.setAttribute("onmousedown","dragElement(event);");
        div.setAttribute("style", object.getStyle);
        div.setAttribute("contenteditable", "true");
        div.innerHTML="Text";
        return;
    }

    elements.appendChild(generate( "div", {
        id: object.getId,
        onclick: "selectElement(event)",
        onmousedown: "dragElement(event);",
        style: object.getStyle, 
    }))

    
    function generate(div, attrs){
        const elementDiv = document.createElement(div);
        for(let k in attrs){
            elementDiv.setAttribute(k, attrs[k]);
        }
        elementDiv.classList.add(name)
        if(name === "process")addProcessParts(elementDiv);
        if(name === "event-transition")addEventTransitionParts(elementDiv);
        if(name === "output")addOutputParts(elementDiv);
        return elementDiv;
    }

    function addProcessParts(div){
        const timer = document.createElement("div")
        const owner = document.createElement("div")
        timer.classList.add("process-time")
        timer.setAttribute("style" ,object.getTimerStyle) 
        timer.setAttribute("contenteditable", "true") 
        timer.innerHTML = "Timer";
        owner.classList.add("process-owner") 
        owner.setAttribute("style" ,object.getOwnerStyle) 
        owner.setAttribute("contenteditable", "true") 
        owner.innerHTML = "Owner";
        div.appendChild(timer)
        div.appendChild(owner)
        dataForSelectDots(div, "process");
    }

    function addEventTransitionParts(div){
        dataForSelectDots(div, "event-transition");
    }

    function addOutputParts(div){
        const image0 = document.createElement("img")
        image0.classList.add("select-circle");
        image0.setAttribute("src", "./src/images/btn-rotate.png")
        image0.setAttribute("hidden", "true")
        image0.setAttribute("style","top: -18px; left: 200px; z-index: 4;cursor: crosshair");
        div.appendChild(image0)
    }
}