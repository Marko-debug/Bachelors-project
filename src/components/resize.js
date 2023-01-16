export function resizeElement(event, pos1, pos2) {
    event.preventDefault();

    const elmnt = document.getElementById(event.target.parentNode.id);

    if(event.target.style.cursor === "se-resize") {
        // set the caught dot new position:
        event.target.style.top = (event.target.offsetTop - pos2) + "px";
        event.target.style.left = (event.target.offsetLeft - pos1) + "px";

        // set the ne-resize dot new position:
        event.target.parentNode.children[2].style.left = (event.target.parentNode.children[2].offsetLeft - pos1) + "px";

        // set the sw-resize dot new position:
        event.target.parentNode.children[1].style.top= (event.target.parentNode.children[1].offsetTop - pos2) + "px";

        //set the main element new position:

        // console.log(`clientWidth: ${elmnt.clientWidth} ,clientHeight: ${elmnt.clientHeight}`)
        // console.log(`width: ${elmnt.style.width} ,height: ${elmnt.style.height}`)
        elmnt.style.height = (elmnt.clientHeight - pos2) + "px";
        elmnt.style.width = (elmnt.clientWidth - pos1) + "px";
    }
    else if (event.target.style.cursor === "sw-resize") {
        // set the caught dot new position:
        event.target.style.top = (event.target.offsetTop - pos2) + "px";

        // set the ne-resize dot new position:
        event.target.parentNode.children[2].style.left = (event.target.parentNode.children[2].offsetLeft + pos1) + "px";

        // set the se-resize dot new position:
        event.target.parentNode.children[3].style.top= (event.target.parentNode.children[3].offsetTop - pos2) + "px";
        event.target.parentNode.children[3].style.left= (event.target.parentNode.children[3].offsetLeft + pos1) + "px";

        //set the main element new position:main element
        elmnt.style.height = (elmnt.clientHeight - pos2) + "px";
        elmnt.style.width = (elmnt.clientWidth + pos1) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    else if (event.target.style.cursor === "ne-resize") {
        // set the caught dot new position:
        event.target.style.left = (event.target.offsetLeft - pos1) + "px";

        // set the sw-resize dot new position:
        event.target.parentNode.children[1].style.top = (event.target.parentNode.children[1].offsetTop + pos2) + "px";

        // set the ne-resize dot new position:
        event.target.parentNode.children[3].style.left= (event.target.parentNode.children[3].offsetLeft - pos1) + "px";
        event.target.parentNode.children[3].style.top= (event.target.parentNode.children[3].offsetTop + pos2) + "px";

        //set the main element new position:main element
        elmnt.style.height = (elmnt.clientHeight + pos2) + "px";
        elmnt.style.width = (elmnt.clientWidth - pos1) + "px";
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    }
    else{
        // set the sw-resize dot new position:
        event.target.parentNode.children[1].style.top = (event.target.parentNode.children[1].offsetTop + pos2) + "px";

        // set the ne-resize dot new position:
        event.target.parentNode.children[2].style.left= (event.target.parentNode.children[2].offsetLeft + pos1) + "px";

        // set the se-resize dot new position:
        event.target.parentNode.children[3].style.left= (event.target.parentNode.children[3].offsetLeft + pos1) + "px";
        event.target.parentNode.children[3].style.top= (event.target.parentNode.children[3].offsetTop + pos2) + "px";

        //set the main element new position:main element
        elmnt.style.height = (elmnt.clientHeight + pos2) + "px";
        elmnt.style.width = (elmnt.clientWidth + pos1) + "px";
        elmnt.style.top = (elmnt.offsetTop- pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
}