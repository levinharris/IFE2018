var region = document.querySelector("#region-select")
var product = document.querySelector("#product-select")
var twrapper = document.querySelector("#table-wrapper")

function getData(){
    var reindex = region.selectedIndex
    var retxt = region.options[reindex].text
    var proindex = product.selectedIndex
    var protxt = product.options[proindex].text
    var selectedData = []
    for(i=0;i<sourceData.length;i++){
        if(sourceData[i].region == retxt && sourceData[i].product == protxt){
            selectedData.push(sourceData[i])
        }
    }
    return selectedData
}


function th1(){
    var tr1 = document.createElement("tr")
    var item1 = document.createTextNode("商品")
    var item2 = document.createTextNode("地区")
    var item3 = document.createTextNode("1月")
    var item4 = document.createTextNode("2月")
    var item5 = document.createTextNode("3月")
    var item6 = document.createTextNode("4月")
    var item7 = document.createTextNode("5月")
    var item8 = document.createTextNode("6月")
    var item9 = document.createTextNode("7月")
    var item10 = document.createTextNode("8月")
    var item11 = document.createTextNode("9月")
    var item12 = document.createTextNode("10月")
    var item13 = document.createTextNode("11月")
    var item14 = document.createTextNode("12月")
    var item = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14]
    for(i=0;i<14;i++){
        var th = document.createElement("th")
        th.appendChild(item[i])
        tr1.appendChild(th)
    }
    return tr1
}

function createTable(){
    var tab = document.createElement("table")
    twrapper.appendChild(tab)
    var table = document.querySelector("table")
    var thtemp = th1()
    table.appendChild(thtemp)
}


function clearTableData(){
    var table = document.querySelector("table")
    for(var i = table.children.length - 1; i > 0; i--) { 
        table.removeChild(table.children[i]); 
    }
}

function td(){
    var tempdata = getData()
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


createTable()
region[0].selected = "selected"
product[0].selected = "selected"
td()


var selects = document.querySelectorAll("select")
for(i=0;i<selects.length;i++){
    selects[i].onchange = function(){
        clearTableData()
        td()
    }
}