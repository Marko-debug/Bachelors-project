window.showDots = function showDots(e) {
    e.preventDefault();
    console.log(e.target.parentNode.children);
    e.target.parentNode.children[2].hidden = true;
    e.target.parentNode.children[3].hidden = true;
}