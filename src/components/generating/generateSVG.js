export function generateSVG(className){

    function makeSVGEl(tag, attrs) {
        var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (var k in attrs) {
          el.setAttribute(k, attrs[k]);
        }
        return el;
    }
    
    var dataset = [
      { d: "M 650 80 L 630 60 L 500 60 L 500 150 L 650 150 L 650 80 L 630 80 L 630 60",},
    ];
    
    var svg = document.querySelector(".svg-elements");
    var g = makeSVGEl("g", { 
        id: `${Math. floor(Math. random() * 100)}`,
        class: className,
        onclick: "selectElement(event)",
        onmousedown: "dragElement(event)",
        transform: "translate(0.5, 0.5)",
        style: "visibility: visible; cursor: move;"
    });
    svg.appendChild(g);
    
    dataset.forEach(function(coords){
      g.appendChild(makeSVGEl("path", {
        d: coords.d,
        stroke: "black",
        fill: "transparent",
      }));
    });
}