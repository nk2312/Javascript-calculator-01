const add=document.getElementById("add");
const sub=document.getElementById("sub");
const mul=document.getElementById("mul");
const div=document.getElementById("div");
const input=document.getElementById("input");
const result=document.getElementById("result");
const desc=document.getElementById("input-desc");
const section=document.getElementById("section");



function output(enteredValue,description)
{
    if(input.value){
        section.style.display="flex";
    }
    result.innerHTML=enteredValue;
    desc.innerHTML=description;
}





