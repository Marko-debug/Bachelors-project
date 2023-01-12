export function resize(event, original_mouse_x, original_mouse_y) {
    event.preventDefault();
    const minimum_size = 20;
    let original_mouse_x = 0;
    let original_mouse_y = 0;

    if(event.target.style.cursor === "se-resize") {
        const width = event.target.parentNode.getBoundingClientRect().width + (event.pageX - original_mouse_x);
        const height = event.target.parentNode.getBoundingClientRect().height + (event.pageY - original_mouse_y)
        if (width > minimum_size) {
            event.target.parentNode.style.width = width + 'px'
        }
        if (height > minimum_size) {
            event.target.parentNode.style.height = height + 'px'
        }
      }
      else if (event.target.style.cursor === "sw-resize") {
        const height = event.target.parentNode.getBoundingClientRect().height  + (event.pageY - original_mouse_y)
        const width = event.target.parentNode.getBoundingClientRect().width - (event.pageX - original_mouse_x)
        if (height > minimum_size) {
            event.target.parentNode.style.height = height + 'px'
            // console.log(`height: ${event.target.parentNode.style.height}`)
        }
        if (width > minimum_size) {
            event.target.parentNode.style.width = width + 'px'
            event.target.parentNode.style.left = event.target.parentNode.getBoundingClientRect().left + (event.movementX) + 'px'
            // console.log(`width: ${event.target.parentNode.style.width}`)
            console.log(`left: ${event.target.parentNode.style.left}`)
            // console.log(`top: ${event.target.parentNode.style.top}`)
        }
      }
      else if (event.target.style.cursor === "ne-resize") {
        const width = event.target.parentNode.getBoundingClientRect().width + (event.pageX - original_mouse_x)
        const height = event.target.parentNode.getBoundingClientRect().height - (event.pageY - original_mouse_y)
        if (width > minimum_size) {
            event.target.parentNode.style.width = width + 'px'
        }
        if (height > minimum_size) {
            event.target.parentNode.style.height = height + 'px'
            event.target.parentNode.style.top = event.target.parentNode.getBoundingClientRect().top + (event.pageY - original_mouse_y) + 'px'
        }
      }
      else {
        const width = event.target.parentNode.getBoundingClientRect().width - (event.pageX - original_mouse_x)
        const height = event.target.parentNode.getBoundingClientRect().height - (event.pageY - original_mouse_y)
        if (width > minimum_size) {
            event.target.parentNode.style.width = width + 'px'
            event.target.parentNode.style.left = event.target.parentNode.getBoundingClientRect().left + (event.pageX - original_mouse_x) + 'px'
        }
        if (height > minimum_size) {
            event.target.parentNode.style.height = height + 'px'
            event.target.parentNode.style.top = event.target.parentNode.getBoundingClientRect().top + (event.pageY - original_mouse_y) + 'px'
        }
      }
    // console.log(event.target.style.cursor)
    // // console.log(event.target.parentNode.children)
    // if(event.target.style.cursor === "nw-resize"){
    //     console.log(event.target.parentNode)
    //     console.log(rect.top)
    //     event.target.parentNode.style.width = rect.width + "px";
    //     event.target.parentNode.style.height = rect.height + "px";
    //     event.target.parentNode.style.top = rect.top + "px";
    //     event.target.parentNode.style.left = rect.left + "px";
    // }
    // else if(event.target.style.cursor === "sw-resize"){
    //     console.log(event.target.parentNode.style.cursor)
    //     event.target.parentNode.style.width = rect.width + "px";
    //     event.target.parentNode.style.height = rect.height + "px";
    //     event.target.parentNode.style.left = rect.left + "px";
    // }
    // else if(event.target.style.cursor === "ne-resize"){
    //     console.log(event.target.parentNode.style.cursor)
    //     event.target.parentNode.style.width = rect.width + "px";
    //     event.target.parentNode.style.height = rect.height + "px";
    //     event.target.parentNode.style.top = rect.top + "px";
    // }
    // else if(event.target.style.cursor === "se-resize"){
    //     console.log(event.target.parentNode.style.cursor)
    //     event.target.parentNode.style.width = rect.width + "px";
    //     event.target.parentNode.style.height = rect.height + "px";
    // }
    // else{
    //     console.log("bad corner")
    // }
}