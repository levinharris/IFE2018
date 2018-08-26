var probox = document.querySelectorAll(".product")
var proall = document.querySelector("#proall")
var regbox = document.querySelectorAll(".region")
var regall = document.querySelector("#regall")
var proval = new Array()
var regval = new Array()


function checkselect(){
    for(k=0;k<probox.length;k++){
        probox[k].addEventListener("change",function(){
            proval = []
            var j=0
            for (i = 0; i < probox.length; i++){
                if(probox[i].checked){
                    j = j + 1
                    console.log("2",j)
                    if (j == 3) {
                        proall.checked = true
                    }
                    else if(j<3){
                        proall.checked = false
                    }
                    proval.push(probox[i].value)
                }
            }
            clearTableData()
            checktd()
        })
    }

    proall.addEventListener("change",function(){
        if(proall.checked){
            proval = []
            for(i=0;i<probox.length;i++){
                probox[i].checked = true
                proval.push(probox[i].value)
            }
        }
        else{
            for(i=0;i<probox.length;i++){
                probox[i].checked = false
                proval = []
            }
        }
        clearTableData()
        checktd()
    })

    for(m=0;m<regbox.length;m++){
        regbox[m].addEventListener("change",function(){
            regval = []
            var j=0
            for(i=0;i<regbox.length;i++){
                if(regbox[i].checked){
                    j=j+1
                    if(j==3){
                        regall.checked = true
                    }
                    else if(j<3){
                        regall.checked = false
                    }
                    regval.push(regbox[i].value)
                }
            }
            clearTableData()
            checktd()
        })
    }

    regall.addEventListener("change",function(){
        if(regall.checked){
            regval = []
            for(i=0;i<regbox.length;i++){
                regbox[i].checked = true
                regval.push(regbox[i].value)
            }
        }
        else{
            for(i=0;i<regbox.length;i++){
                regbox[i].checked = false
                regval = []
            }
        }
        clearTableData()
        checktd()
    })
}


function getcheckData(){
    var selectedData = []
    if(proval.length>0 && regval.length>0){
        for(i=0;i<sourceData.length;i++){
            for(j=0;j<proval.length;j++){
                for(k=0;k<regval.length;k++){
                    if(sourceData[i].product == proval[j] && sourceData[i].region == regval[k]){
                        selectedData.push(sourceData[i])
                    }
                }
            }
        }
    }
    if(proval.length > 0 && regval.length == 0){
        for(i=0;i<sourceData.length;i++){
            for(j=0;j<proval.length;j++){
                if(sourceData[i].product == proval[j]){
                    selectedData.push(sourceData[i])
                }
            }
        }
    }
    if(regval.length > 0 && proval.length == 0){
        for(i=0;i<sourceData.length;i++){
            for(j=0;j<regval.length;j++){
                if(sourceData[i].region == regval[j]){
                    selectedData.push(sourceData[i])
                }
            }
        }
    }
    return selectedData
}

function checktd(){
    var tempdata = getcheckData()
    for(i=0;i<tempdata.length;i++){
        var tr = document.createElement("tr")
        var th = document.querySelector("table").firstElementChild.childNodes
        for(j=0;j<th.length;j++){
            var td = document.createElement("td")
            tr.appendChild(td)
        }
        var table = document.querySelector("table")
        table.appendChild(tr)
    }
    var trtemp = document.querySelectorAll("tr")
    for(k=0;k<tempdata.length;k++){
        var temppro = document.createTextNode(tempdata[k].product)
        var tempreg = document.createTextNode(tempdata[k].region)
        var tdtemp = trtemp[k+1].querySelectorAll("td")
        var td0 = tdtemp[0]
        var td1 = tdtemp[1]
        td0.appendChild(temppro)
        td1.appendChild(tempreg)
        for(l=2;l<14;l++){
            var s = l-2
            var tempsale = document.createTextNode(tempdata[k].sale[s])
            tdtemp[l].appendChild(tempsale)
        }
    }
}

checkselect()