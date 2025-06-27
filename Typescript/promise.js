var username='raja'
var password='raja2'

function promiseHandler(res, rej){
    setTimeout(()=>{
        if(username==password)
            return res("Login successful")
        else    
            return rej("Login failed")
    },5000);
}
const myPromise=new Promise((res, rej)=>{
    setTimeout(()=>{
        if(username==password)
            return res("Login successful")
        else    
            return rej("Login failed")
    },5000);
});

myPromise
.then((res)=>{
    console.log(('Response from promise is '+res));
    
})
.catch((rej)=>{
    console.log('Error from promise is '+rej);
    
});

console.log("Last line.");
