function fn1(...arr){
    //affect the values of arr
    arr[0]=100;
}
var arr=[1,2,3,4];
fn1(arr);       //passing array by value
fn1(88,44,55);  //values directly

console.log(arr[0]);
