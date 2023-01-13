  export function removeElement(event, select){
    const elmnt = select.pop();
    if(event.key === 'd' && elmnt){
      elmnt.parentNode.removeChild(elmnt)
      console.log("removed object")
    }
    else(
      console.log('make a click on element again')
    )
  }