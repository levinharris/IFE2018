var btn = document.querySelector("#submit-btn")
var inputarea = document.querySelector("#name")
btn.addEventListener("click",function(){
        console.log("text",inputarea.value)
    })
function enterbtn(e){
    document.onkeyup = function(event){
        if(window.event){
            e = window.event;//如果window.event对象存在，就以此事件对象为准
        }
        var code = e.charCode || e.keyCode;
        if (code == 13){
            console.log("text",inputarea.value)
        }
        if (code == 27){
            inputarea.value = ""
        }
    }
}
enterbtn()