var btn = document.querySelector("#fade-btn")
var obj = document.querySelector("#fade-obj")
obj.style.opacity = 1
function fadeout(){
    obj.style.opacity -= 0.01
    btn.disabled = true
    btn.innerHTML = "淡入"
    if(obj.style.opacity==0){
        clearInterval(t)
        btn.disabled = false
    }
}
function fadein(){
    obj.style.opacity =parseFloat(obj.style.opacity)+0.01
    btn.disabled = true
    btn.innerHTML = "淡出"
    if(obj.style.opacity==1){
        clearInterval(t)
        btn.disabled = false
    }
}
btn.addEventListener("click",function(){
    if(btn.innerHTML == '淡出'){
        t = setInterval("fadeout()",20)
    }
})
btn.addEventListener("click",function(){
    if(btn.innerHTML == '淡入'){
        t = setInterval("fadein()",20)
    }
})