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
            var h = 0
            for(i=0;i<probox.length;i++){
                if(probox[i].checked){
                    h = h + 1
                    if(h==3){
                        proall.checked = true
                    }
                    else if(h<3){
                        proall.checked = false
                    }
                    proval.push(probox[i].value)
                }
            }
            clearTableData()
            checktd()
            // var table = document.querySelector("table")
            // var sn = 0
            // for (ss = 0; ss < regbox.length; ss++) {
            //     if (regbox[ss].checked) {
            //         sn = sn + 1
            //     }
            // }
            // if (h == 1) { 
            //     if (sn == 0) {
            //         table.children[1].children[0].setAttribute("rowspan", "3")
            //         table.children[2].removeChild(table.children[2].children[0])
            //         table.children[3].removeChild(table.children[3].children[0])
            //     }
            //     // if (sn = 2) {
            //     //     table.children[1].children[0].setAttribute("rowspan", "2")
            //     //     table.children[2].removeChild(table.children[2].children[0])
            //     // }
            // }
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
            var u=0
            for(i=0;i<regbox.length;i++){
                if(regbox[i].checked){
                    u=u+1
                    if(u==3){
                        regall.checked = true
                    }
                    else if(u<3){
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
    console.log(tempdata)
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
    var pronum = 0
    var regnum = 0
    for (s1 = 0; s1 < probox.length; s1++){
        if (probox[s1].checked) {
            pronum = pronum +1
        }
    }
    for (s2 = 0; s2 < probox.length; s2++){
        if (regbox[s2].checked) {
            regnum = regnum +1
        }
    }
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

    // 这里需求暂时用了土办法,先交作业.回头再修改
    if (pronum == 1) {
        if (regnum == 0) {
            table.children[1].children[0].setAttribute("rowspan", "3")
            table.children[2].removeChild(table.children[2].children[0])
            table.children[3].removeChild(table.children[3].children[0])
        }
        if (regnum == 2) { 
            table.children[1].children[0].setAttribute("rowspan", "2")
            table.children[2].removeChild(table.children[2].children[0])
        }
        if (regnum == 3) { 
            table.children[1].children[0].setAttribute("rowspan", "3")
            table.children[2].removeChild(table.children[2].children[0])
            table.children[3].removeChild(table.children[3].children[0])
        }
    }
    if (regnum == 1) {
        table.children[0].children[0].innerHTML = "地区"
        table.children[0].children[1].innerHTML = "商品"
        if (pronum == 0) {
            var tempregtxt = table.children[1].children[1].innerHTML
            var temprotxt = table.children[1].children[0].innerHTML
            table.children[1].children[0].innerHTML = tempregtxt
            table.children[1].children[1].innerHTML = temprotxt
            table.children[2].children[1].innerHTML = table.children[2].children[0].innerHTML
            table.children[3].children[1].innerHTML = table.children[3].children[0].innerHTML
            table.children[1].children[0].setAttribute("rowspan", "3")
            table.children[2].removeChild(table.children[2].children[0])
            table.children[3].removeChild(table.children[3].children[0])
        }
        if (pronum == 2) { 
            var tempregtxt = table.children[1].children[1].innerHTML
            var temprotxt = table.children[1].children[0].innerHTML
            table.children[1].children[0].innerHTML = tempregtxt
            table.children[1].children[1].innerHTML = temprotxt
            table.children[2].children[1].innerHTML = table.children[2].children[0].innerHTML
            table.children[1].children[0].setAttribute("rowspan", "2")
            table.children[2].removeChild(table.children[2].children[0])
        }
        if (pronum == 3) { 
            var tempregtxt = table.children[1].children[1].innerHTML
            var temprotxt = table.children[1].children[0].innerHTML
            table.children[1].children[0].innerHTML = tempregtxt
            table.children[1].children[1].innerHTML = temprotxt
            table.children[2].children[1].innerHTML = table.children[2].children[0].innerHTML
            table.children[3].children[1].innerHTML = table.children[3].children[0].innerHTML
            table.children[1].children[0].setAttribute("rowspan", "3")
            table.children[2].removeChild(table.children[2].children[0])
            table.children[3].removeChild(table.children[3].children[0])
        }
    }
}



checkselect()