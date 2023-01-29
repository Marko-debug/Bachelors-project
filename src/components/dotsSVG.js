window.showDots = function showDots(e) {
    e.preventDefault();
    console.log(e);
    if(e.target.parentNode.children[2].style.visibility === 'hidden'){
        e.target.parentNode.children[2].style.visibility = 'visible';
        e.target.parentNode.children[3].style.visibility = 'visible';
    }
    else{
        e.target.parentNode.children[2].style.visibility = 'hidden';
        e.target.parentNode.children[3].style.visibility = 'hidden';
    }
}