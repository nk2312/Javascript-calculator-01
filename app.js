
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





add.addEventListener('click',calculate.bind(this,'ADD'));
sub.addEventListener('click',calculate.bind(this,'SUB'));
mul.addEventListener('click',calculate.bind(this,'MUL'));
div.addEventListener('click',calculate.bind(this,'DIV'));


