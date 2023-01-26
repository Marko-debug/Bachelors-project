  export function removeElement(event, select){
    console.log(select)
    const elmnt = select[0];
    if(!elmnt.parentNode)return;
    if(event.key === 'Delete' && elmnt){
      console.log(elmnt)
      console.log(elmnt.parentNode) // i dont understand, why elmnt does not have a parentNode when I press 2 times Delete 
      elmnt.parentNode.removeChild(elmnt)
      console.log("removed object")
    }
  }