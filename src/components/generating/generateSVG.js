import { textGenerateInside } from "./textGenerate.js";

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
        // onclick: "selectElement(event)",
        transform: "translate(0.5, 0.5)",
        style: "visibility: visible; cursor: move;"
    });
    svg.appendChild(g);

    if(className === "svg-input-right" || className === "svg-input-left"){      
      g.appendChild(makeSVGEl("path", {
        onmousedown: "svgMoving(event)",
        d: object.getPath,
        stroke: "black",
        fill: "transparent",
      }));
      textGenerateInside(object.idText, object.contentText, object.topText, object.leftText, object);
    }
    if(className === "svg-output-right" || className === "svg-output-left"){      
      g.appendChild(makeSVGEl("path", {
        onmousedown: "svgMoving(event)",
        d: object.getPath,
        fill: "black",
      }));
      textGenerateInside(object.idText, object.contentText, object.topText, object.leftText, object);
    }
    if(className === "svg-end-of-instance"){   
      g.appendChild(makeSVGEl("circle", {
        onmousedown: "svgMoving(event)",
        cx: object.getCX,
        cy: object.getCY,
        r: 50,
        stroke: "black",
        fill: "transparent",
      }));

      const text = makeSVGEl("text", {
        x: object.x,
        y: object.y,
        style: "font-size: 50px"
      });
      text.textContent = "E";
      g.appendChild(text);
    }
    if(className === "svg-two-branching" || className === "svg-three-branching" ){      
      g.appendChild(makeSVGEl("rect", {
        onmousedown: "svgMoving(event)",
        x: `${object.x}`,
        y: `${object.y}`,
        width: `${object.width}`,
        height: `${object.height}`,
        rx: "15",
        stroke: "black",
        fill: "transparent",
      }));
      textGenerateInside(object.idText, object.contentText, object.topText, object.leftText, object);
    }
    if(className === "svg-parallel"){   
      g.appendChild(makeSVGEl("path", {
        onmousedown: "svgMoving(event)",
        d: object.getPath,
        stroke: "black",
        fill: "transparent",
      }));
      textGenerateInside(object.idText, object.contentText, object.topText, object.leftText, object);
    }
    if(className === "svg-rediraction"){      
      g.appendChild(makeSVGEl("path", {
        onmousedown: "svgMoving(event)",
        d: object.getPath,
        stroke: "black",
        fill: "transparent",
      }));
      textGenerateInside(object.idText, object.contentText, object.topText, object.leftText, object);
    }
    if(className === "svg-end-of-two-processes"){   
      g.appendChild(makeSVGEl("circle", {
        onmousedown: "svgMoving(event)",
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
        onmousedown: "svgMoving(event)",
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