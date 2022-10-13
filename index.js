function createtabledata(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
function createtable(tagname,attrname,attrvalue){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    return ele;
}
function createtd(tagname,content){
    var ele = document.createElement(tagname);
    ele.innerHTML=content;
    return ele;

}
function createtablerow(tagname){
    var ele = document.createElement(tagname);
    return ele;
}

var table = createtable("table","class","table");
var tablehead = createtable("thead","class","thead-dark");
var tablerow1= createtablerow("tr");
var tableh1 = createtabledata("th","scope","col","First");
var tableh12 = createtabledata("th","scope","col","First");
var tableh13 = createtabledata("th","scope","col","First");
var tablerow2= createtablerow("tr");
var tablebody = createtablerow("tbody");
var tableh2 = createtd("td","scope","mark");
var tableh21 = createtd("td","scope","otto");
var tableh22 = createtd("td","scope","@mdo");
table.append(tablehead);
tablehead.append(tablerow1);
tablerow1.append(tableh1);
tablerow1.append(tableh12);
tablerow1.append(tableh13);
table.append(tablebody);
tablebody.append(tablerow2);
tablerow2.append(tableh2);
tablerow2.append(tableh21);
tablerow2.append(tableh22);
document.body.append(table);