export function generatePhysicallyFlow(id, className, object){

    function makeSVGEl(tag, attrs) {
        let el = document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (let k in attrs) {
          el.setAttribute(k, attrs[k]);
        }
        return el;
    }

    let dataset = [
        { class: object.objects[2].name, x: object.objects[2].x, y: object.objects[2].y},
        { class: object.objects[3].name, x: object.objects[3].x, y: object.objects[3].y}
    ];
    
    let svg = document.querySelector(".svg-elements");
    let g = makeSVGEl("g", { 
        id: `${id}`,
        class: className,
        onclick: "selectElement(event)",
        style: "visibility: visible; cursor: pointer;"
    });
    svg.appendChild(g);

    //choosing color arrow
    if(className === "svg-information-flow"){
        g.appendChild(makeSVGEl("path", {
            class: "line",
            d: object.getPathLine,
            stroke: "#009933",
            fill: "transparent",
        }));

        g.appendChild(makeSVGEl("path", {
            class: "arrow",
            d: object.getPathArrow,
            stroke: "#009933",
            fill: "#009933",
        }));

    }
    else if(className === "svg-sequential-flow"){
        
        // const line = makeSVGEl("path", {
        //     class: "line",
        //     d: object.getPathLine,
        //     stroke: "#00a3cc",
        //     fill: "transparent",
        // })
        // line.setAttribute("stroke-dasharray", "10")
        // g.appendChild(line)
        
        g.appendChild(makeSVGEl("path", {
            class: "line",
            d: object.getPathLine,
            stroke: "#00a3cc",
            fill: "transparent",
        }));

        g.appendChild(makeSVGEl("path", {
            class: "arrow",
            d: object.getPathArrow,
            stroke: "#00a3cc",
            fill: "#00a3cc",
        }));
    }
    else{
        g.appendChild(makeSVGEl("path", {
            class: "line",
            d: object.getPathLine,
            stroke: "rgb(0, 0, 0)",
            fill: "transparent",
        }));

        g.appendChild(makeSVGEl("path", {
            class: "arrow",
            d: object.getPathArrow,
            stroke: "rgb(0, 0, 0)",
        }));

    }



    dataset.forEach(function(coords){
        g.appendChild(makeSVGEl("circle", {
            class: coords.class,
            cx: coords.x,
            cy: coords.y,
            onmousedown: "scaleSVG(event)",
            r: 7,
            fill: "red",
            style: "visibility: hidden; cursor: ew-resize;"
        }));
    });
}