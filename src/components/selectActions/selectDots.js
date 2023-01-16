export function dataForSelectDots(div){

    function setDots(img, attrs){
        const image = document.createElement(img);
        for(let k in attrs){
            image.setAttribute(k, attrs[k]);
        }
        image.classList.add("select-circle") 
        return image;
    }

    const styles = [
        {src: "./src/images/circle.png", hidden: "true", onmousedown: "dragElement(event);", style: "top: -8px; left: -8px; cursor: nw-resize"},

        {src: "./src/images/circle.png", hidden: "true", onmousedown: "dragElement(event);", style: "top: 190px; left: -8px; cursor: sw-resize"},

        {src: "./src/images/circle.png", hidden: "true", onmousedown: "dragElement(event);", style: "top: -8px; left: 286px; cursor: ne-resize"},

        {src: "./src/images/circle.png", hidden: "true", onmousedown: "dragElement(event);", style: "top: 190px; left: 290px; cursor: se-resize"},
    ]

    styles.forEach(function(coords){
        div.appendChild(setDots( "img", {
            src: coords.src,
            hidden: coords.hidden,
            onmousedown: onmousedown,
            style: coords.style, 
        }))
    })

}