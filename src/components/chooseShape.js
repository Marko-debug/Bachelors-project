import { dataForSelectDots } from "./selectActions/selectDots.js";

const chooseElement = (element) => {
    // const process = document.querySelector(`.${element}`)
    // process.addEventListener("click", () => {

    const elements = document.querySelector(`.elements`)
    const svg = document.querySelector(".svg");
    if(element === "btn-process"){

        const div = document.createElement("div")
        div.setAttribute("id", Math. floor(Math. random() * 100))
        div.classList.add("process")
        elements.appendChild(div)
        div.setAttribute("onclick","selectElement(event);");
        div.setAttribute("onmousedown","dragElement(event);");
        dataForSelectDots(div);
    //     const rect = document.createElement("rect");
    //     svg.setAttribute("id", "1");
    //     svg.setAttribute("width", "3000");
    //     svg.setAttribute("height", "1500");
    //     rect.setAttribute("x", "800");
    //     rect.setAttribute("y", "60");
    //     rect.setAttribute("width", "100");
    //     rect.setAttribute("height", "100");
    //     rect.setAttribute("stroke", "black");
    //     rect.setAttribute("fill", "red");
    //     rect.setAttribute("stroke-width", "2");    
    //     elements.appendChild(svg);        
    //     svg.appendChild(rect);        
    }
    else if(element === "btn-text"){
        const div = document.createElement("div")
        div.setAttribute("id", Math. floor(Math. random() * 100))
        div.classList.add("text")
        elements.appendChild(div)
        div.setAttribute("onclick","selectElement(document.getElementById(event.target.id));");
        div.setAttribute("onmousedown","dragElement(event);");
        div.setAttribute("contenteditable", "true");
        div.innerHTML="Text";
    }
    // else if(element === "btn-physically-flow"){
    //     const newg = document.createElement("g"); 
    //     const newpath = document.createElement("path"); 
    //     newg.setAttribute("id", "5");
    //     newg.setAttribute("transform", "translate(0.5, 0.5)");
    //     newg.setAttribute("style", "visibility: visible; cursor:move");
    //     newpath.setAttribute("d", "M 500 60 L 500 110 L 650 110 L 650 140 L 700 85 L 650 30 L 650 60 L 500 60");
    //     newpath.setAttribute("stroke", "black");
    //     newpath.setAttribute("fill", "blue");
    //     newpath.setAttribute("stroke-width", "2");
    //     svg.appendChild(newg);        
    //     newg.appendChild(newpath);        
    // }
    else if(element === "btn-input"){
        const newg = document.createElement("g"); 
        const newpath = document.createElement("path"); 
        newg.setAttribute("id", "4");
        newg.setAttribute("transform", "translate(0.5, 0.5)");
        newg.setAttribute("style", "visibility: visible; cursor:move");
        newpath.setAttribute("d", "M 500 60 L 500 110 L 650 110 L 650 140 L 700 85 L 650 30 L 650 60 L 500 60");
        newpath.setAttribute("stroke", "black");
        newpath.setAttribute("fill", "blue");
        newpath.setAttribute("stroke-width", "2");
        svg.appendChild(newg);        
        newg.appendChild(newpath);        
    }
    else if(element === "btn-output"){
        const div = document.createElement("div")
        div.setAttribute("id", Math. floor(Math. random() * 100))
        div.classList.add("output")
        elements.appendChild(div)
        div.setAttribute("onclick","selectElement(event);");
        div.setAttribute("onmousedown","dragElement(event);");
        const image0 = document.createElement("img")
        image0.classList.add("select-circle");
        image0.setAttribute("src", "./src/images/btn-rotate.png")
        image0.setAttribute("hidden", "true")
        image0.setAttribute("style","top: -18px; left: 200px; z-index: 4;cursor: crosshair");
        div.appendChild(image0)
    }
    else if(element === "btn-event-transition"){
        const div = document.createElement("div")
        div.setAttribute("id", Math. floor(Math. random() * 100))
        div.classList.add("event-transition")
        elements.appendChild(div)
        div.setAttribute("onclick","selectElement(event);");
        div.setAttribute("onmousedown","dragElement(event);");
        const image0 = document.createElement("img")
        image0.classList.add("select-circle");
        image0.setAttribute("src", "./src/images/circle.png")
        image0.setAttribute("hidden", "true")
        image0.setAttribute("onmousedown","dragElement(event);");
        image0.setAttribute("style","top: -8px; left: -8px; cursor: nw-resize");
        const image1 = document.createElement("img")
        image1.classList.add("select-circle");
        image1.setAttribute("src", "./src/images/circle.png")
        image1.setAttribute("hidden", "true")
        image1.setAttribute("onmousedown","dragElement(event);");
        image1.setAttribute("style","top: 50px; left: -8px; cursor: sw-resize");
        const image2 = document.createElement("img")
        image2.classList.add("select-circle");
        image2.setAttribute("src", "./src/images/circle.png")
        image2.setAttribute("hidden", "true")
        image2.setAttribute("onmousedown","dragElement(event);");
        image2.setAttribute("style","top: -8px; left: 140px; cursor: ne-resize; z-index: 1;");
        const image3 = document.createElement("img")
        image3.classList.add("select-circle");
        image3.setAttribute("src", "./src/images/circle.png")
        image3.setAttribute("hidden", "true")
        image3.setAttribute("onmousedown","dragElement(event);");
        image3.setAttribute("style","top: 50px; left: 140px; cursor: se-resize");
        div.appendChild(image0)
        div.appendChild(image1)
        div.appendChild(image2)
        div.appendChild(image3)
    }
    else if(element === "btn-end-of-instance"){
        const div = document.createElement("div")
        div.setAttribute("id", Math. floor(Math. random() * 100))
        div.classList.add("end-of-instance")
        elements.appendChild(div)
        div.setAttribute("onclick","selectElement(event);");
        div.setAttribute("onmousedown","dragElement(event);");
    }
    else if(element === "btn-two-branches"){
        const div = document.createElement("div")
        div.setAttribute("id", Math. floor(Math. random() * 100))
        div.classList.add("two-branching")
        elements.appendChild(div)
        div.setAttribute("onclick","selectElement(event);");
        div.setAttribute("onmousedown","dragElement(event);");
    }
    else if(element === "btn-three-branches"){
        const div = document.createElement("div")
        div.setAttribute("id", Math. floor(Math. random() * 100))
        div.classList.add("three-branching")
        elements.appendChild(div)
        div.setAttribute("onclick","selectElement(event);");
        div.setAttribute("onmousedown","dragElement(event);");
    }
    else if(element === "btn-rediraction"){
        const div = document.createElement("div")
        div.setAttribute("id", Math. floor(Math. random() * 100))
        div.classList.add("rediraction")
        div.setAttribute("onclick","selectElement(event);");
        div.setAttribute("onmousedown","dragElement(event);");
        const inner = document.createElement("div")
        inner.classList.add("inner")
        elements.appendChild(div)
        div.appendChild(inner)
    }
    // else if(element === "btn-parallel"){
    //     const div = document.createElement("div")
    //     div.setAttribute("id", Math. floor(Math. random() * 100))
    //     div.classList.add("parallel")
    //     elements.appendChild(div)
    //     div.setAttribute("onclick","selectElement(document.getElementById(event.target.id));");
    //     div.setAttribute("onmousedown","dragElement(event);");
    // }
    else if(element === "btn-parallel"){
        const newg = document.createElement("g"); 
        const newpath = document.createElement("path"); 
        newg.setAttribute("id", "5");
        newg.setAttribute("transform", "translate(0.5, 0.5)");
        newg.setAttribute("style", "visibility: visible; cursor:move");
        newpath.setAttribute("d", "M 650 80 L 630 60 L 500 60 L 500 150 L 650 150 L 650 80 L 630 80 L 630 60 ");
        newpath.setAttribute("stroke", "black");
        newpath.setAttribute("fill", "blue");
        newpath.setAttribute("stroke-width", "2");
        svg.appendChild(newg);        
        newg.appendChild(newpath);   
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

// const svg = document.createElement("svg");
// const defs = document.createElement("defs");
// const marker = document.createElement("marker");
// const line = document.createElement("line");
// const polygon = document.createElement("polygon");
// svg.setAttributeNS(null ,"viewBox", "0 0 350 100");
// marker.id = "arrowhead";
// marker.setAttributeNS(null, "markerWidth", "10")
// marker.setAttributeNS(null, "markerHeight", "7")
// marker.setAttributeNS(null, "refX", "0")
// marker.setAttributeNS(null, "refY", "3.5")
// marker.setAttributeNS(null, "orient", "auto")

// polygon.setAttributeNS(null, "points", "0 0, 10 3.5, 0 7")
// line.setAttributeNS(null, "x1", "0")
// line.setAttributeNS(null, "y1", "50")
// line.setAttributeNS(null, "x2", "250")
// line.setAttributeNS(null, "y2", "50")
// line.setAttributeNS(null, "stroke", "#000")
// line.setAttributeNS(null, "stroke-width", "8")
// line.setAttributeNS(null, "style", "z-index: 1")
// line.setAttributeNS(null, "marker-end", "url(#arrowhead)")

// document.body.appendChild(svg);
// svg.appendChild(defs);
// svg.appendChild(line);
// defs.appendChild(marker); 
// marker.appendChild(polygon); 