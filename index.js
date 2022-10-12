//Assignemt 01: Create a HTML Form Using DOM
//1.firstname,2.Middlename,3.lastname,4.Phone number
//Deploy it in Netlify
function createlabel(tagname,attriname,attrivalue,content){
var label = document.createElement(tagname);
label.setAttribute(attriname,attrivalue);
label.innerHTML=content;
return label;
}
function createinput(tagname,attriname,attrivalue,content){
var label = document.createElement(tagname);
label.setAttribute(attriname,attrivalue);
label.innerHTML=content;
return label;
}

function linebr(tagname){
var label = document.createElement(tagname);
return label;
}

let label1 = createlabel("label","for","firstname","Firstname");
let br1 = linebr("br");
let input1 = createinput("input","id","firstname");
let br2 = linebr("br");
let label2 = createlabel("label","for","middlename","Middlename");
let br3 = linebr("br");
let input2 = createinput("input","id","middlename");
let br4 = linebr("br");
let label3 = createlabel("label","for","lastname","Lastname");
let br5 = linebr("br");
let input3 = createinput("input","id","lastname");
let br6 = linebr("br");
let label4 = createlabel("label","for","phonenumber","Phonenumber");
let br7 = linebr("br");
let input4 = createinput("input","id","phonenumber");


document.body.append(label1,br1,input1,br2,label2,br3,input2,br4,label3,br5,input3,br6,label4,br7,input4);