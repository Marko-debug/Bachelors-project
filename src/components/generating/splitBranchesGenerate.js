export function splitBranchesGenerate(id, className, object){

    function makeSVGEl(tag, attrs) {
        let el = document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (let k in attrs) {
          el.setAttribute(k, attrs[k]);
        }
        return el;
    }

    let dataset = [
        { class: object.objects[8].name, x: object.objects[8].x, y: object.objects[8].y},
        { class: object.objects[9].name, x: object.objects[9].x, y: object.objects[9].y}
    ];
    
    let svg = document.querySelector(".svg-elements");
    let g = makeSVGEl("g", { 
        id: `${id}`,
        class: className,
        style: "visibility: visible; cursor: pointer;"
    });
    svg.appendChild(g);
    
    //main part
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

    //straight part
    g.appendChild(makeSVGEl("path", {
        class: "lineS",
        d: object.getPathLineS,
        stroke: "rgb(0, 0, 0)",
        fill: "transparent",
    }));

    g.appendChild(makeSVGEl("path", {
        class: "arrowS",
        d: object.getPathArrowS,
        stroke: "rgb(0, 0, 0)",
    }));

    //right part
    g.appendChild(makeSVGEl("path", {
        class: "lineR",
        d: object.getPathLineR,
        stroke: "rgb(0, 0, 0)",
        fill: "transparent",
    }));

    g.appendChild(makeSVGEl("path", {
        class: "arrowR",
        d: object.getPathArrowR,
        stroke: "rgb(0, 0, 0)",
    }));

    //left part
    g.appendChild(makeSVGEl("path", {
        class: "lineL",
        d: object.getPathLineL,
        stroke: "rgb(0, 0, 0)",
        fill: "transparent",
    }));

    g.appendChild(makeSVGEl("path", {
        class: "arrowL",
        d: object.getPathArrowL,
        stroke: "rgb(0, 0, 0)",
    }));

    dataset.forEach(function(coords){
        g.appendChild(makeSVGEl("circle", {
            class: coords.class,
            cx: coords.x,
            cy: coords.y,
            onmousedown: "scaleSVG(event)",
            r: 7,
            fill: "red",
            style: "visibility: hidden; cursor: ns-resize;"
        }));
    });
}