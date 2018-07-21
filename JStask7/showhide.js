var school = document.querySelector("#school")
var company = document.querySelector("#company")
var ss = document.querySelector("#school-select")
var cs = document.querySelector("#company-select")
school.addEventListener("click",function(){
    ss.style.display="initial"
    cs.style.display="none"
})
company.addEventListener("click",function(){
    cs.style.display="initial"
    ss.style.display="none"
})