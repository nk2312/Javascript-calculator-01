
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

function calculate(operatorType){
    let val= +input.value;
    if(!val ){
        return
    }
    let value;
    let desc;
    if(operatorType==='ADD'){
        value=val+currentValue;
        desc=description(currentValue,val,'+');
    }
    else if(operatorType==='SUB'){
        value=val>currentValue?val-currentValue:currentValue-val;
        desc=description(currentValue,val,'-');
    }
    else if(operatorType==='MUL'){
        value=val*currentValue;
        desc=description(currentValue,val,'*');
    }
    else if(operatorType==='DIV'){
        value=currentValue/val;
        desc=description(currentValue,val,'/');
    }
    writeToLog(operatorType,currentValue,value,desc);
    currentValue=value;
    output(value,desc);
}

function addFunction(){
    calculate('ADD');
}
function subFunction(){
    calculate('SUB');
}

function mulFunction(){
    calculate('MUL');
}

function divFunction(){
    calculate('DIV');
}



add.addEventListener('click',addFunction);
sub.addEventListener('click',subFunction);
mul.addEventListener('click',mulFunction);
div.addEventListener('click',divFunction);


