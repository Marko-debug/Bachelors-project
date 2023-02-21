const navbar = document.querySelector(".btn-navbar");
const navbarInner = document.querySelector(".navbar-inner");
navbar.addEventListener("click", ()=>{
    if(navbarInner.hidden === false){
        document.querySelector(".navbar").style.width = "60px";
        document.querySelector(".navbar").style.height = "60px";
        navbarInner.hidden = true;
    }else{        
        document.querySelector(".navbar").style.width = "400px";
        document.querySelector(".navbar").style.height = "750px";
        navbarInner.hidden = false;
    }
})

// for physically-flow
const btnPhysicallyFlow = document.querySelector(".btn-physically");
const wrapperFlows = document.querySelector(".wrapper-flows");

btnPhysicallyFlow.addEventListener("mouseover", ()=> wrapperFlows.hidden=false)
btnPhysicallyFlow.addEventListener("mouseout", ()=> wrapperFlows.hidden=true)

wrapperFlows.addEventListener("mouseover", ()=> wrapperFlows.hidden=false)
wrapperFlows.addEventListener("mouseout", ()=> wrapperFlows.hidden=true)

//for information
const btnInformation = document.querySelector(".btn-information");
const wrapperInformation = document.querySelector(".wrapper-information");

btnInformation.addEventListener("mouseover", ()=> wrapperInformation.hidden=false)
btnInformation.addEventListener("mouseout", ()=> wrapperInformation.hidden=true)

wrapperInformation.addEventListener("mouseover", ()=> wrapperInformation.hidden=false)
wrapperInformation.addEventListener("mouseout", ()=> wrapperInformation.hidden=true)

//for sequential
const btnSequential = document.querySelector(".btn-sequential");
const wrapperSequential = document.querySelector(".wrapper-sequential");

btnSequential.addEventListener("mouseover", ()=> wrapperSequential.hidden=false)
btnSequential.addEventListener("mouseout", ()=> wrapperSequential.hidden=true)

wrapperSequential.addEventListener("mouseover", ()=> wrapperSequential.hidden=false)
wrapperSequential.addEventListener("mouseout", ()=> wrapperSequential.hidden=true)

//for inputs
const btnInput = document.querySelector(".btn-input");
const wrapperInputs = document.querySelector(".wrapper-inputs");

btnInput.addEventListener("mouseover", ()=> wrapperInputs.hidden=false)
btnInput.addEventListener("mouseout", ()=> wrapperInputs.hidden=true)

wrapperInputs.addEventListener("mouseover", ()=> wrapperInputs.hidden=false)
wrapperInputs.addEventListener("mouseout", ()=> wrapperInputs.hidden=true)

//for outputs
const btnOutput = document.querySelector(".btn-output");
const wrapperOutputs = document.querySelector(".wrapper-outputs");

btnOutput.addEventListener("mouseover", ()=> wrapperOutputs.hidden=false)
btnOutput.addEventListener("mouseout", ()=> wrapperOutputs.hidden=true)

wrapperOutputs.addEventListener("mouseover", ()=> wrapperOutputs.hidden=false)
wrapperOutputs.addEventListener("mouseout", ()=> wrapperOutputs.hidden=true)

var element = document.getElementById('btnLoad');

element.addEventListener('click', function(e) {
    e.preventDefault();
    element.classList.toggle('active');
});