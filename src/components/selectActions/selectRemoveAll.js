export function removeSelect(event, select){
    if(event.target.className === "elements"){
        const popped = select.pop()
        if(popped.childElementCount === 1){
            popped.children[0].hidden = true;
        }
        if(popped.className !== "select-circle" && popped.childElementCount === 4){
            popped.children[0].hidden = true;
            popped.children[1].hidden = true;
            popped.children[2].hidden = true;
            popped.children[3].hidden = true;
        }
    }
}