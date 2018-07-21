var list = document.querySelectorAll("li")
var p = document.querySelector(".color-picker")
for (var i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener("click",function(event){
        t = event.target
        p.innerHTML = t.style.backgroundColor
        p.style.color = t.style.backgroundColor
    })
}