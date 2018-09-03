var probox = document.querySelectorAll(".product")
var proall = document.querySelector("#proall")
var regbox = document.querySelectorAll(".region")
var regall = document.querySelector("#regall")
var table = document.querySelector("table")
var proval = new Array()
var regval = new Array()


function checkselect(){
    for(k=0;k<probox.length;k++){
        probox[k].addEventListener("change",function(){
            proval = []
            for(ki=0;ki<probox.length;ki++){
                if (probox[ki].checked) {
                    proval.push(probox[ki].value)
                    if(proval.length==3){
                        proall.checked = true
                    }
                    else if(proval.length<3){
                        proall.checked = false
                    }
                }
            }
            clearTableData()
            checkprotd()
        })
    }

    proall.addEventListener("change",function(){
        if(proall.checked){
            proval = []
            for(pi=0;pi<probox.length;pi++){
                probox[pi].checked = true
                proval.push(probox[pi].value)
            }
        }
        else{
            for(ip=0;ip<probox.length;ip++){
                probox[ip].checked = false
                proval = []
            }
        }
        clearTableData()
        checkprotd()
    })

    for(m=0;m<regbox.length;m++){
        regbox[m].addEventListener("change",function(){
            regval = []
            for(im=0;im<regbox.length;im++){
                if (regbox[im].checked) {
                    regval.push(regbox[im].value)
                    if(regval.length==3){
                        regall.checked = true
                    }
                    else if(regval.length<3){
                        regall.checked = false
                    }
                    
                }
            }
            clearTableData()
            checkregtd()
        })
    }

    regall.addEventListener("change",function(){
        if(regall.checked){
            regval = []
            for(ri=0;ri<regbox.length;ri++){
                regbox[ri].checked = true
                regval.push(regbox[ri].value)
            }
        }
        else{
            for(ir=0;ir<regbox.length;ir++){
                regbox[ir].checked = false
                regval = []
            }
        }
        clearTableData()
        checkregtd()
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

function checkprotd() {
    var tempdata = getcheckData()
    console.log(tempdata)
    var tempnum = 0
    var regnum = 0
    for (sr = 0; sr < regbox.length; sr++) {
        if (regbox[sr].checked) {
            regnum++
        }
    }
    for (m = 0; m < proval.length; m++){
        for (i = 0; i < tempdata.length; i++) {
            var temppro = document.createTextNode(tempdata[i].product)
            var tempreg = document.createTextNode(tempdata[i].region)
            var th = table.firstElementChild.childNodes
            if (proval[m] == tempdata[i].product) {
                if (tempnum == m) {
                    var tr = document.createElement("tr")
                    for (j = 0; j < th.length; j++) {
                        var td = document.createElement("td")
                        tr.appendChild(td)
                    }
                    var tdtemp = tr.querySelectorAll("td")
                    var td0 = tdtemp[0]
                    var td1 = tdtemp[1]
                    td0.appendChild(temppro)
                    td1.appendChild(tempreg)
                    for (l = 2; l < 14; l++) {
                        var s = l - 2
                        var tempsale = document.createTextNode(tempdata[i].sale[s])
                        tdtemp[l].appendChild(tempsale)
                    }
                    if (regnum == 0 || regnum > 2) {
                        if (i == 0) {
                            td0.setAttribute("rowspan", probox.length)
                        }
                        else {
                            tr.removeChild(tr.children[0])
                        }
                    }
                    else {
                        if (i == 0) {
                            td0.setAttribute("rowspan", regnum)
                        }
                        else {
                            tr.removeChild(tr.children[0])
                        }
                    }
                    table.appendChild(tr)
                }
                else { 
                    var tr = document.createElement("tr")
                    for (j = 0; j < th.length; j++) {
                        var td = document.createElement("td")
                        tr.appendChild(td)
                    }
                    var tdtemp = tr.querySelectorAll("td")
                    var td0 = tdtemp[0]
                    var td1 = tdtemp[1]
                    td0.appendChild(temppro)
                    td1.appendChild(tempreg)
                    for (l = 2; l < 14; l++) {
                        var s = l - 2
                        var tempsale = document.createTextNode(tempdata[i].sale[s])
                        tdtemp[l].appendChild(tempsale)
                    }
                    if (regnum == 0 || regnum > 2) {
                        td0.setAttribute("rowspan", probox.length)
                    }
                    else { 
                        td0.setAttribute("rowspan", regnum)
                    }
                    table.appendChild(tr)
                    tempnum = m
                }   
            }
        }    
    }   
}


function checkregtd() {
    var tempdata = getcheckData()
    console.log(tempdata)
    var tempnum = 0
    var pronum = 0
    var regnum = 0
    for (sp = 0; sp < probox.length; sp++){
        if (probox[sp].checked) {
            pronum++
        }
    }
    for (sr = 0; sr < regbox.length; sr++) {
        if (regbox[sr].checked) {
            regnum++
        }
    }
    if (pronum>1) {
        var ths = table.querySelectorAll("th")
        var ths1 = ths[1].innerText
        if (ths1 == "地区") {
            ths[1].innerText = ths[0].innerText
            ths[0].innerText = ths1
        }
    }
    for (m = 0; m < regval.length; m++){
        for (i = 0; i < tempdata.length; i++) {
            var temppro = document.createTextNode(tempdata[i].product)
            var tempreg = document.createTextNode(tempdata[i].region)
            var th = table.firstElementChild.childNodes
            if (regval[m] == tempdata[i].region) {
                if (tempnum == m) {
                    var tr = document.createElement("tr")
                    for (j = 0; j < th.length; j++) {
                        var td = document.createElement("td")
                        tr.appendChild(td)
                    }
                    var tdtemp = tr.querySelectorAll("td")
                    var td0 = tdtemp[0]
                    var td1 = tdtemp[1]
                    td1.appendChild(temppro)
                    td0.appendChild(tempreg)
                    for (l = 2; l < 14; l++) {
                        var s = l - 2
                        var tempsale = document.createTextNode(tempdata[i].sale[s])
                        tdtemp[l].appendChild(tempsale)
                    }
                    if (pronum == 1) {
                        checkprotd()
                        return
                    }
                    else if (pronum == 0 || pronum > 2) {
                        if (i == 0) {
                            td0.setAttribute("rowspan", regbox.length)
                        }
                        else {
                            tr.removeChild(tr.children[0])
                        }
                    }
                    else {
                        if (regnum == 1) {
                            if (i == 0) {
                                td0.setAttribute("rowspan", pronum)
                            }
                            else {
                                tr.removeChild(tr.children[0])
                            }
                        }
                        else { 
                            if (m == i) {
                                if (i == 0) {
                                    td0.setAttribute("rowspan", pronum)
                                }
                                else {
                                    tr.removeChild(tr.children[0])
                                }
                            }
                            else { 
                                if (i == 1 && m == 0) {
                                    td0.setAttribute("rowspan", pronum)
                                }
                                else {
                                    tr.removeChild(tr.children[0])
                                }
                            }
                        }
                    }                        
                    table.appendChild(tr)
                }
                else { 
                    var tr = document.createElement("tr")
                    for (j = 0; j < th.length; j++) {
                        var td = document.createElement("td")
                        tr.appendChild(td)
                    }
                    var tdtemp = tr.querySelectorAll("td")
                    var td0 = tdtemp[0]
                    var td1 = tdtemp[1]
                    td1.appendChild(temppro)
                    td0.appendChild(tempreg)
                    for (l = 2; l < 14; l++) {
                        var s = l - 2
                        var tempsale = document.createTextNode(tempdata[i].sale[s])
                        tdtemp[l].appendChild(tempsale)
                    }
                    if (pronum == 0 || pronum > 2) {
                        td0.setAttribute("rowspan", regbox.length)
                    }
                    else { 
                        td0.setAttribute("rowspan", pronum)
                    }
                    table.appendChild(tr)
                    tempnum = m
                }   
            }
        }    
    } 
}




checkselect()