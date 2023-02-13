// const elements = document.querySelector(".elements")
// let edit = [];

// window.editText = function editText(e){
//     e.preventDefault();
//     const top = e.target.style.top;
//     const left = e.target.style.left;
//     e.target.hidden = true;

//     const div = document.createElement("div");
//     // div.setAttribute("style", `top: 100px; left: 400px`);
//     div.setAttribute("style", `top: ${top}; left: ${left}`);
//     div.setAttribute("contenteditable", "true");
//     div.classList.add("edit-text")
//     div.innerHTML = e.target.textContent;
//     elements.appendChild(div);
// }

// window.rewrite = function rewrite(){
//     const text = document.querySelector(".edit-text");
//     if(text == null)return;
//     const popped = edit.pop();
//     popped.innerHTML = text.textContent;
//     popped.hidden = false;
//     elements.removeChild(text)
// }