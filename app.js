
let defaultValue=0;
let currentValue=defaultValue;
let workLog=[];

function description(currentValue,result,operator){
    return `${currentValue} ${operator} ${result}`;
}

function writeToLog(operation,currentValue,result,desc){
    workLog.push({operation,currentValue,result,desc})
    console.log(workLog);
}

function addFunction(){
    let val= +input.value;
    let value=val+currentValue;
    let desc=description(currentValue,val,'+');
    writeToLog('ADD',currentValue,value,desc);
    currentValue=value;
    output(value,desc);
}
function subFunction(){
    let val= +input.value;
    let value=val>currentValue?val-currentValue:currentValue-val;
    let desc=description(currentValue,val,'-');
    writeToLog('SUB',currentValue,value,desc);
    currentValue=value;
    output(value,desc);
}

function mulFunction(){
    let val= +input.value;
    let value=val*currentValue;
    let desc=description(currentValue,val,'*');
    writeToLog('MUL',currentValue,value,desc);
    currentValue=value;
    output(value,desc);
}

function divFunction(){
    let val= +input.value;
    let value=currentValue/val;
    let desc=description(currentValue,val,'/');
    writeToLog('DIV',currentValue,value,desc);
    currentValue=value;
    output(value,desc);
}



add.addEventListener('click',addFunction);
sub.addEventListener('click',subFunction);
mul.addEventListener('click',mulFunction);
div.addEventListener('click',divFunction);


