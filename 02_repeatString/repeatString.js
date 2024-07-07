/*function repeatString(x ='hey', y=3) {
    let result= '';
    for (let i = 0; i<y; i++ ){
        result += x;
    }
    return result;
};
*/    
    

/*
function repeatString(x ='hello', y=10) {
    let result= '';
    for (let i = 0; i<y; i++ ){
        result += x;
    }
    return result;
};
*/
/*
function repeatString(x ='hi', y=1) {
    let result= '';
    for (let i = 0; i<y; i++ ){
        result += x;
    }
    return result;
};
*/
/*
function repeatString(x ='bye', y=0) {
    let result= '';
    for (let i = 0; i<y; i++ ){
        result += x;
    }
    if(result = ''){
        return ''

    }else{
         return result;
    }
};
*/
/*
function repeatString(x ='goodbye', y=-1) {
    let result= '';
    if (y < 0 ){
        return 'ERROR';
    }else{
    for (let i = 0; i<y; i++ ){
        result += x;
    }
    return result;
    }
};
*/
/*
function repeatString(name ='Odin', number = Math.random()*90) {
    let result= '';
    for (let i = 0; i<number; i++ ){
        result += name;
    }
    return result;
};
*/
function repeatString(name ='', number = 10) {
    let result= '';
    for (let i = 0; i<number; i++ ){
        result += name;
    }
    return result;
};



//npm test repeatString.spec.js
// Do not edit below this line
module.exports = repeatString;
