export function removeDown (event){
    const keyName = event.key;
  
    if (keyName === 'Delete') {
      // do not alert when only Control key is pressed.
      console.log("delete")
      return;
    }
  }
  
 export function removeUp (event, referenceDiv){
    const keyName = event.key;
  
    // As the user releases the Ctrl key, the key is no longer active,
    // so event.ctrlKey is false.
    if (keyName === 'Delete') {
      referenceDiv.parentNode.removeChild(referenceDiv)
      console.log("removed divs")
    }
  }