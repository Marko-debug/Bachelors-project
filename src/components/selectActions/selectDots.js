export function dataForSelectDots(div, className){

    function setDots(img, attrs){
        const image = document.createElement(img);
        for(let k in attrs){
            image.setAttribute(k, attrs[k]);
        }
        image.classList.add("select-circle") 
        return image;
    }

    const processStyles = [
        {src: "./src/images/circle.png", hidden: "true", onmousedown: "dragElement(event);", style: "top: -8px; left: -8px; cursor: nw-resize"},

        {src: "./src/images/circle.png", hidden: "true", onmousedown: "dragElement(event);", style: "top: 190px; left: -8px; cursor: sw-resize"},

        {src: "./src/images/circle.png", hidden: "true", onmousedown: "dragElement(event);", style: "top: -8px; left: 286px; cursor: ne-resize"},

        {src: "./src/images/circle.png", hidden: "true", onmousedown: "dragElement(event);", style: "top: 190px; left: 290px; cursor: se-resize"},
    ]

    const eventTransitionStyles = [
        {src: "./src/images/circle.png", hidden: "true", onmousedown: "dragElement(event);", style: "top: -8px; left: -8px; cursor: nw-resize"},

        {src: "./src/images/circle.png", hidden: "true", onmousedown: "dragElement(event);", style: "top: 50px; left: -8px; cursor: sw-resize"},

        {src: "./src/images/circle.png", hidden: "true", onmousedown: "dragElement(event);", style: "top: -8px; left: 140px; cursor: ne-resize; z-index: 1;"},

        {src: "./src/images/circle.png", hidden: "true", onmousedown: "dragElement(event);", style: "top: 50px; left: 140px; cursor: se-resize"},
    ]

    if(className === "process"){
    processStyles.forEach(function(coords){
        div.appendChild(setDots( "img", {
            src: coords.src,
            hidden: coords.hidden,
            onmousedown: onmousedown,
            style: coords.style, 
        }))
    })}
    
    if(className === "event-transition"){
    eventTransitionStyles.forEach(function(coords){
        div.appendChild(setDots( "img", {
            src: coords.src,
            hidden: coords.hidden,
            onmousedown: onmousedown,
            style: coords.style, 
        }))
    })}

}