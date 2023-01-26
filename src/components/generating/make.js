export function make(className){

    function makeSVGEl(tag, attrs) {
        var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (var k in attrs) {
          el.setAttribute(k, attrs[k]);
        }
        return el;
    }

    var dataset = [
        { class: "dot1", x: 790, y: 180},
        { class: "dot2", x: 500, y: 180}
      ];
    
    var svg = document.querySelector(".svg-elements");
    var g = makeSVGEl("g", { 
        id: `${Math. floor(Math. random() * 100)}`,
        class: className,
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
            r: 7,
            fill: "red",
            style: "visibility: visible; cursor: move;"
        }));
    });
}