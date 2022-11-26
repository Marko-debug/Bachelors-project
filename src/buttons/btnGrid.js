const getBtnGrid = document.querySelector(".grid")

const ShowUp = () => {
    const getGrid = document.querySelector(".grid-canvas")
    if (getGrid.hidden === true){
        getGrid.hidden = false;
    }
    else{
        getGrid.hidden = true;
    }
}

getBtnGrid.addEventListener("click", () => ShowUp())
