const getBtnOfShapes = document.querySelector(".btn-process")
const getBtnText = document.querySelector(".btn-text")

const getBtnPhys = document.querySelector(".btn-physically")
const getBtnPhysFlow = document.querySelector(".btn-physically-flow")
const getBtnPhysFlowBroken = document.querySelector(".btn-physically-flow-broken")

const getBtnInfo = document.querySelector(".btn-information")
const getBtnInfoFlow = document.querySelector(".btn-information-flow")
const getBtnInfoFlowBroken = document.querySelector(".btn-information-flow-broken")

const getBtnSeque = document.querySelector(".btn-sequential")
const getBtnSequeFlow = document.querySelector(".btn-sequential-flow")
const getBtnSequeFlowBroken = document.querySelector(".btn-sequential-flow-broken")

const getBtnInput = document.querySelector(".btn-input")
const getBtnInputRight = document.querySelector(".btn-input-right")
const getBtnInputLeft = document.querySelector(".btn-input-left")

const getBtnOutput = document.querySelector(".btn-output")
const getBtnOutputRight = document.querySelector(".btn-output-right")
const getBtnOutputLeft = document.querySelector(".btn-output-left")

const getBtnEnd = document.querySelector(".btn-end-of-instance")
const getBtnEventTrans = document.querySelector(".btn-event-transition")
const getBtnTwoBranch = document.querySelector(".btn-two-branches")
const getBtnThreeBranch = document.querySelector(".btn-three-branches")
const getBtnSplitBranch = document.querySelector(".btn-split-branches")
const getBtnParallel = document.querySelector(".btn-parallel")
const getBtnRediraction = document.querySelector(".btn-rediraction")
const getBtnEndOfTwoProcess = document.querySelector(".btn-end-of-two-processes")
const getBtnEndOfThreeProcess = document.querySelector(".btn-end-of-three-processes")

const getButtons = [
    {ref: getBtnOfShapes, shape: "btn-process", short: "pr"}, 
    {ref: getBtnText, shape: "btn-text", short: "te"},
    {ref: getBtnPhys, shape: "btn-physically", short: "wrapper-flows"}, 
    {ref: getBtnPhysFlow, shape: "btn-physically-flow", short: "pf"}, 
    {ref: getBtnPhysFlowBroken, shape: "btn-physically-flow-broken", short: "pfb"}, 
    {ref: getBtnInfo, shape: "btn-information", short: "wrapper-information"}, 
    {ref: getBtnInfoFlow, shape: "btn-information-flow", short: 'if'}, 
    {ref: getBtnInfoFlowBroken, shape: "btn-information-flow-broken", short: 'ifb'}, 
    {ref: getBtnSeque, shape: "btn-sequential", short: "wrapper-sequential"}, 
    {ref: getBtnSequeFlow, shape: "btn-sequential-flow", short: "sf"}, 
    {ref: getBtnSequeFlowBroken, shape: "btn-sequential-flow-broken", short: "sfb"}, 
    {ref: getBtnInput, shape: "btn-input", short: "wrapper-inputs"}, 
    {ref: getBtnInputRight, shape: "btn-input-right", short: "inr"}, 
    {ref: getBtnInputLeft, shape: "btn-input-left", short: "inl"}, 
    {ref: getBtnOutput, shape: "btn-output", short: "wrapper-outputs"}, 
    {ref: getBtnOutputRight, shape: "btn-output-right", short: "our"}, 
    {ref: getBtnOutputLeft, shape: "btn-output-left", short: "oul"}, 
    {ref: getBtnEnd, shape: "btn-end-of-instance", short: "ei"}, 
    {ref: getBtnEventTrans, shape: "btn-event-transition", short: "et"}, 
    {ref: getBtnTwoBranch, shape: "btn-two-branches", short: "wb"}, 
    {ref: getBtnThreeBranch, shape: "btn-three-branches", short: "hb"},
    {ref: getBtnSplitBranch, shape: "btn-split-branches", short: "sb"},
    {ref: getBtnParallel, shape: "btn-parallel", short: "pa"},
    {ref: getBtnRediraction, shape: "btn-rediraction", short: "re"},
    {ref: getBtnEndOfTwoProcess, shape: "btn-end-of-two-processes", short: "ep"},
    {ref: getBtnEndOfThreeProcess, shape: "btn-end-of-three-processes", short: "eh"},
]

const ShowUp = (getButton) => {
    const getShowing = document.querySelector(`.${getButton.short}`);
    getShowing.hidden = false;
}

const CloseShow = (getButton) => {
    const getShowing = document.querySelector(`.${getButton.short}`);
    getShowing.hidden = true;
}

// getBtnPhys.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short  === "wrapper-flows")))
// getBtnPhys.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "wrapper-flows")))

getBtnOfShapes.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short === "pr")))
getBtnOfShapes.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "pr")))

getBtnText.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short  === "te")))
getBtnText.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "te")))

getBtnPhysFlow.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short  === "pf")))
getBtnPhysFlow.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "pf")))

getBtnPhysFlowBroken.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short  === "pfb")))
getBtnPhysFlowBroken.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "pfb")))

getBtnInfoFlow.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short  === "if")))
getBtnInfoFlow.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "if")))

getBtnInfoFlowBroken.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short  === "ifb")))
getBtnInfoFlowBroken.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "ifb")))

getBtnSequeFlow.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short  === "sf")))
getBtnSequeFlow.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "sf")))

getBtnSequeFlowBroken .addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short  === "sfb")))
getBtnSequeFlowBroken .addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "sfb")))

getBtnInputRight.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short === "inr")))
getBtnInputRight.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "inr")))

getBtnInputLeft.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short === "inl")))
getBtnInputLeft.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "inl")))

getBtnOutputRight.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short  === "our")))
getBtnOutputRight.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "our")))

getBtnOutputLeft.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short  === "oul")))
getBtnOutputLeft.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "oul")))

getBtnEnd.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short  === "ei")))
getBtnEnd.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "ei")))

getBtnEventTrans.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short === "et")))
getBtnEventTrans.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "et")))

getBtnTwoBranch.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short  === "wb")))
getBtnTwoBranch.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "wb")))

getBtnThreeBranch.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short  === "hb")))
getBtnThreeBranch.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "hb")))

getBtnSplitBranch.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short  === "sb")))
getBtnSplitBranch.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "sb")))

getBtnParallel.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short  === "pa")))
getBtnParallel.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "pa")))

getBtnRediraction.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short  === "re")))
getBtnRediraction.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "re")))

getBtnEndOfTwoProcess.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short  === "ep")))
getBtnEndOfTwoProcess.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "ep")))

getBtnEndOfThreeProcess.addEventListener("mouseover", () => ShowUp(getButtons.find(getButton => getButton.short  === "eh")))
getBtnEndOfThreeProcess.addEventListener("mouseout", () => CloseShow(getButtons.find(getButton => getButton.short  === "eh")))
export {getButtons}