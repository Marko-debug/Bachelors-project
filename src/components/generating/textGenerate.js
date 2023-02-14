export function textGenerate(id, className, object){

    function makeSVGEl(tag, attrs) {
        var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (var k in attrs) {
          el.setAttribute(k, attrs[k]);
        }
        return el;
    }

    var svg = document.querySelector(".svg-elements");
    var g = makeSVGEl("g", { 
        style: "visibility: visible; cursor: move;"
    });
    
    const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', "foreignObject")
    foreignObject.setAttribute("pointer-events", "none")
    foreignObject.setAttribute("width", "100%")
    foreignObject.setAttribute("height", "100%")
    foreignObject.setAttribute("style", "overflow: visible; text-align: left;")

    const positionDiv = document.createElement("div");
    positionDiv.setAttribute("style", `display: flex; padding-top: ${object.top}px; margin-left: ${object.left}px;`)

    const div = document.createElement("div");
    div.setAttribute("id", id);
    div.setAttribute("class", className);
    div.setAttribute("ondblclick", "selectElement(event)");
    div.setAttribute("onmousedown", "svgMoving(event)");
    div.setAttribute("style", `display: inline-block; color: rgb(0, 0, 0); font-size: 20px; pointer-events: all;`);
    div.innerHTML = object.content

    svg.appendChild(g);
    g.appendChild(foreignObject);
    foreignObject.appendChild(positionDiv);
    positionDiv.appendChild(div);
}