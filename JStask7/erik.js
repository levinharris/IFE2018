var pic = document.querySelector("#pic")
var s = 0
function erik(){
    s += 480
    pic.style.backgroundPosition = 0 + "px " + "-" + s + "px"
    if (s==8160){
        pic.style.backgroundPosition = 0 + "px " + 0 + "px"
        s = 0
    }
}
t = setInterval("erik()", 150)