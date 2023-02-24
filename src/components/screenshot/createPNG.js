const download = document.querySelector(".download");
download.addEventListener("click", ()=>convertToPNG())

// it is not working right now
export function convertToPNG(){

    // function svg2img(){
    //     var svg = document.querySelector('.svg');
    //     var xml = new XMLSerializer().serializeToString(svg);
    //     var svg64 = btoa(xml); //for utf8: btoa(unescape(encodeURIComponent(xml)))
    //     var b64start = 'data:image/svg+xml;base64,';
    //     var image64 = b64start + svg64;
    //     return image64;
    // };svg2img()
    console.log("download...")
}