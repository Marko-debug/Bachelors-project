export function generateSVG(id, className){

    function makeSVGEl(tag, attrs) {
        var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (var k in attrs) {
          el.setAttribute(k, attrs[k]);
        }
        return el;
    }

    var svg = document.querySelector(".svg-elements");
    var g = makeSVGEl("g", { 
        id: `${id}`,
        class: className,
        onclick: "selectElement(event)",
        onmousedown: "svgMoving(event)",
        transform: "translate(0.5, 0.5)",
        style: "visibility: visible; cursor: move;"
    });
    svg.appendChild(g);

    if(className === "svg-input"){      
      g.appendChild(makeSVGEl("path", {
        d: "M 500 60 L 500 110 L 650 110 L 650 140 L 700 85 L 650 30 L 650 60 L 500 60",
        stroke: "black",
        fill: "transparent",
      }));
    }
    if(className === "svg-parallel"){   
      g.appendChild(makeSVGEl("path", {
        d: "M 650 80 L 630 60 L 500 60 L 500 150 L 650 150 L 650 80 L 630 80 L 630 60",
        stroke: "black",
        fill: "transparent",
      }));
    }
    if(className === "svg-rediraction"){      
      g.appendChild(makeSVGEl("path", {
        d: "M 700 80 L 660 110 L 660 160 L 700 190 L 750 190 L 790 160 L 790 110 L 750 80 L 700 80",
        stroke: "black",
        fill: "transparent",
      }));
    }
    if(className === "svg-end-of-two-processes"){   
      g.appendChild(makeSVGEl("circle", {
        cx: 600,
        cy: 100,
        r: 50,
        stroke: "black",
        fill: "transparent",
      }));

      g.appendChild(makeSVGEl("path", {
        d: "M 580 55 L 580 145 M 620 55 L 620 145",
        stroke: "black",
        fill: "transparent",
      }));
    }
    if(className === "svg-end-of-three-processes"){   
      g.appendChild(makeSVGEl("circle", {
        cx: 600,
        cy: 100,
        r: 50,
        stroke: "black",
        fill: "transparent",
      }));

      g.appendChild(makeSVGEl("path", {
        d: "M 575 56 L 575 144 M 600 50 L 600 150 M 625 56 L 625 144",
        stroke: "black",
        fill: "transparent",
      }));
    }
}