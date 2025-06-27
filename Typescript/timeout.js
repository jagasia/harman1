function fnSum(x){
    var sum=0;
    for(var i=1; i<=x; i++){
        sum+=i;
    }
    console.log(sum);
    
    return sum;
}


function fnTimeOutFunction(){
    setTimeout((x)=>{
    var sum=0;
    for(var i=1; i<=x; i++){
        sum+=i;
    }
    console.log(sum);
    
    return sum;
}, 5000);

}

fnTimeOutFunction();
