import { textGenerateInside } from "./textGenerate.js";

export function processGenerate(id, className, object){

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
        transform: "translate(0.5, 0.5)",
        style: "visibility: visible; cursor: move;"
    });
    svg.appendChild(g);

    if(className === "svg-process"){  
      //main shape    
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
      //timer shape
      g.appendChild(makeSVGEl("rect", {
        class: "timer",
        x: `${object.xT}`,
        y: `${object.yT}`,
        width: `${object.widthT}`,
        height: `${object.heightT}`,
        rx: "15",
        stroke: "black",
        fill: "transparent",
      }));
      //owner shape
      g.appendChild(makeSVGEl("rect", {
        class: "owner",
        x: `${object.xO}`,
        y: `${object.yO}`,
        width: `${object.widthO}`,
        height: `${object.heightO}`,
        rx: "15",
        stroke: "black",
        fill: "transparent",
      }));
      //timer text
      textGenerateInside(object.idTimer, object.contentTimer, object.topTimer, object.leftTimer, object);
      //owner text
      textGenerateInside(object.idOwner, object.contentOwner, object.topOwner, object.leftOwner, object);
      //process text
      textGenerateInside(object.idProcess, object.contentProcess, object.topProcess, object.leftProcess, object);

      //dot1 (left-up)
      g.appendChild(makeSVGEl("circle", {
        class: "dot1",
        onmousedown: "resize1(event)",
        cx: `${object.cx1}`,
        cy: `${object.cy1}`,
        r: "7",
        fill: "red",
        style: "visibility: hidden; cursor: nw-resize"
      }));
      //dot2 (right-up)
      g.appendChild(makeSVGEl("circle", {
          class: "dot2",
          onmousedown: "resize2(event)",
        cx: `${object.cx2}`,
        cy: `${object.cy2}`,
        r: "7",
        fill: "red",
        style: "visibility: hidden; cursor: sw-resize"
      }));
      //dot3 (left-down)
      g.appendChild(makeSVGEl("circle", {
          class: "dot3",
          onmousedown: "resize3(event)",
        cx: `${object.cx3}`,
        cy: `${object.cy3}`,
        r: "7",
        fill: "red",
        style: "visibility: hidden; cursor: ne-resize"
      }));
      //dot4 (right-down)
      g.appendChild(makeSVGEl("circle", {
          class: "dot4",
          onmousedown: "resize4(event)",
        cx: `${object.cx4}`,
        cy: `${object.cy4}`,
        r: "7",
        fill: "red",
        style: "visibility: hidden; cursor: se-resize"
      }));
    }


    if(className === "svg-event-transition"){  
      //main shape    
      g.appendChild(makeSVGEl("rect", {
        onmousedown: "svgMoving(event)",
        x: `${object.x}`,
        y: `${object.y}`,
        width: `${object.width}`,
        height: `${object.height}`,
        rx: "40",
        stroke: "black",
        fill: "transparent",
      }));

      textGenerateInside(object.idText, object.contentText, object.topText, object.leftText, object);

      //dot1 (left-up)
      g.appendChild(makeSVGEl("circle", {
        class: "dot1",
        onmousedown: "resize1(event)",
        cx: `${object.cx1}`,
        cy: `${object.cy1}`,
        r: "7",
        fill: "red",
        style: "visibility: hidden; cursor: nw-resize"
      }));
      //dot2 (right-up)
      g.appendChild(makeSVGEl("circle", {
          class: "dot2",
          onmousedown: "resize2(event)",
        cx: `${object.cx2}`,
        cy: `${object.cy2}`,
        r: "7",
        fill: "red",
        style: "visibility: hidden; cursor: sw-resize"
      }));
      //dot3 (left-down)
      g.appendChild(makeSVGEl("circle", {
          class: "dot3",
          onmousedown: "resize3(event)",
        cx: `${object.cx3}`,
        cy: `${object.cy3}`,
        r: "7",
        fill: "red",
        style: "visibility: hidden; cursor: ne-resize"
      }));
      //dot4 (right-down)
      g.appendChild(makeSVGEl("circle", {
          class: "dot4",
          onmousedown: "resize4(event)",
        cx: `${object.cx4}`,
        cy: `${object.cy4}`,
        r: "7",
        fill: "red",
        style: "visibility: hidden; cursor: se-resize"
      }));
    }
}