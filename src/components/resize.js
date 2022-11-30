export function resize(event){
    event.preventDefault();
    const rect = event.target.parentNode.getBoundingClientRect();
    const minimum_size = 20;

    if(event.target.style.cursor === "se-resize") {
        const width = event.target.parentNode.getBoundingClientRect().width + (event.pageX - event.pageX);
        const height = event.target.parentNode.getBoundingClientRect().height + (event.pageY - event.pageY)
        if (width > minimum_size) {
            event.target.parentNode.style.width = width + 'px'
        }
        if (height > minimum_size) {
            event.target.parentNode.style.height = height + 'px'
        }
      }
      else if (event.target.style.cursor === "sw-resize") {
        const height = event.target.parentNode.getBoundingClientRect().height  + (event.pageY - event.pageY)
        const width = event.target.parentNode.getBoundingClientRect().width - (event.pageX - event.pageX)
        if (height > minimum_size) {
            event.target.parentNode.style.height = height + 'px'
            console.log(`height: ${event.target.parentNode.style.height}`)
        }
        if (width > minimum_size) {
            event.target.parentNode.style.width = width + 'px'
            event.target.parentNode.style.left = event.target.parentNode.getBoundingClientRect().left + (event.pageX - event.pageX) + 'px'
            console.log(`width: ${event.target.parentNode.style.width}`)
            console.log(`left: ${event.target.parentNode.style.left}`)
            console.log(`top: ${event.target.parentNode.style.top}`)
        }
      }
      else if (event.target.style.cursor === "ne-resize") {
        const width = event.target.parentNode.getBoundingClientRect().width + (event.pageX - event.pageX)
        const height = event.target.parentNode.getBoundingClientRect().height - (event.pageY - event.pageY)
        if (width > minimum_size) {
            event.target.parentNode.style.width = width + 'px'
        }
        if (height > minimum_size) {
            event.target.parentNode.style.height = height + 'px'
            event.target.parentNode.style.top = event.target.parentNode.getBoundingClientRect().top + (event.pageY - event.pageY) + 'px'
        }
      }
      else {
        const width = event.target.parentNode.getBoundingClientRect().width - (event.pageX - event.pageX)
        const height = event.target.parentNode.getBoundingClientRect().height - (event.pageY - event.pageY)
        if (width > minimum_size) {
            event.target.parentNode.style.width = width + 'px'
            event.target.parentNode.style.left = event.target.parentNode.getBoundingClientRect().left + (event.pageX - event.pageX) + 'px'
        }
        if (height > minimum_size) {
            event.target.parentNode.style.height = height + 'px'
            event.target.parentNode.style.top = event.target.parentNode.getBoundingClientRect().top + (event.pageY - event.pageY) + 'px'
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