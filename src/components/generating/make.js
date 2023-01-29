export function make(id, className){

    function makeSVGEl(tag, attrs) {
        let el = document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (let k in attrs) {
          el.setAttribute(k, attrs[k]);
        }
        return el;
    }

    let dataset = [
        { class: "dot1", x: 790, y: 180},
        { class: "dot2", x: 500, y: 180}
    ];
    
    let svg = document.querySelector(".svg-elements");
    let g = makeSVGEl("g", { 
        id: `${id}`,
        class: className,
        onmousedown: "svgMoving(event)",
        style: "visibility: visible; cursor: pointer;"
    });
    svg.appendChild(g);
    
    g.appendChild(makeSVGEl("path", {
    class: "line",
    d: "M 500 180 L 790 180" ,
    stroke: "rgb(0, 0, 0)",
    fill: "transparent",
    }));

    g.appendChild(makeSVGEl("path", {
        class: "arrow",
        d: "M 790 180 L 783 183 L 785 180 L 783 176 Z",
        stroke: "rgb(0, 0, 0)",
        fill: "transparent",
    }));

    dataset.forEach(function(coords){
        g.appendChild(makeSVGEl("circle", {
            class: coords.class,
            cx: coords.x,
            cy: coords.y,
            onmousedown: "scaleSVG(event)",
            r: 7,
            fill: "red",
            style: "visibility: visible; cursor: ew-resize;"
        }));
    });
}