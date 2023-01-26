export function removeSelect(event, select){
    if(event.target.className.baseVal === "svg"){
        
        if(select.length === 0)return;
        else{
            const popped = select.pop()
            if(popped.childElementCount === 1){
                popped.children[0].hidden = true;
            }
            if(popped.className === "process" && popped.childElementCount === 6){
                popped.children[2].hidden = true;
                popped.children[3].hidden = true;
                popped.children[4].hidden = true;
                popped.children[5].hidden = true;
            }
            if(popped.className !== "select-circle" && popped.childElementCount === 4){
                popped.children[0].hidden = true;
                popped.children[1].hidden = true;
                popped.children[2].hidden = true;
                popped.children[3].hidden = true;
            }
        }
    }
}