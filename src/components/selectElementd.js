export function selectElement(elmnt, select){

    if(select.length === 1){

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
    
    select.push(elmnt)
    if(elmnt.childElementCount === 1){
        elmnt.children[0].hidden = false;
    }
    if(elmnt.className !== "select-circle" && elmnt.childElementCount === 4){
        elmnt.children[0].hidden = false;
        elmnt.children[1].hidden = false;
        elmnt.children[2].hidden = false;
        elmnt.children[3].hidden = false;
    }

        // document.addEventListener('keydown', () => removeDown(elmnt), false);
        // const referenceDiv = document.getElementById(`.${elmnt.id}`)
        // document.addEventListener('keyup', (event) => removeUp(event, referenceDiv), false);       
}

export function removeSelect(event){
    if(event.target.className === "elements"){
      for(let i = 0; i < event.target.childElementCount; i++){}
      console.log(event.target)    
    }
}