let select = [];

//there is a problem when i click on red circle of physically flow broken 
window.svgSelect = function svgSelect(e){

    // if(select.children[0].id == e.target.parentNode.id)return;

    if(select.length === 1){
        const popped = select.pop();
        console.log("hello")
        popped.children[2].style.visibility = 'hidden';
        popped.children[3].style.visibility = 'hidden';
    }
    select.push(e.target.parentNode)
    console.log(e.target.parentNode)
    e.target.parentNode.children[2].style.visibility = 'visible';
    e.target.parentNode.children[3].style.visibility = 'visible';
}