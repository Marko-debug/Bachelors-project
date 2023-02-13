export function generateSVG(id, className, object){

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
        d: object.getPath,
        stroke: "black",
        fill: "transparent",
      }));
    }
    if(className === "svg-parallel"){   
      g.appendChild(makeSVGEl("path", {
        d: object.getPath,
        stroke: "black",
        fill: "transparent",
      }));
    }
    if(className === "svg-rediraction"){      
      g.appendChild(makeSVGEl("path", {
        d: object.getPath,
        stroke: "black",
        fill: "transparent",
      }));
    }
    if(className === "svg-end-of-two-processes"){   
      g.appendChild(makeSVGEl("circle", {
        cx: object.getCX,
        cy: object.getCY,
        r: 50,
        stroke: "black",
        fill: "transparent",
      }));

      g.appendChild(makeSVGEl("path", {
        d: object.getPath,
        stroke: "black",
        fill: "transparent",
      }));
    }
    if(className === "svg-end-of-three-processes"){   
      g.appendChild(makeSVGEl("circle", {
        cx: object.getCX,
        cy: object.getCY,
        r: 50,
        stroke: "black",
        fill: "transparent",
      }));

      g.appendChild(makeSVGEl("path", {
        d: object.getPath,
        stroke: "black",
        fill: "transparent",
      }));
    }
}