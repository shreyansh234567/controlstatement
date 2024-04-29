//Function Currying
function add(a,b,c){
    return a + b + c;
}
function curryAdd(a){
    return function(b){
        return function(c){
            return a + b + c;
        };
        };
}
const curriedAdd=curryAdd(2)(3)(4);

//Callback Hell
setTimeout(function() {
    console.log("First step...");
    
    setTimeout(function() {
        console.log("Second step...");

        setTimeout(function() {
            console.log("Third step...");
        },1000);
        },1000);
        },1000);
    

    //Promises
    fetch('https://icanhazdadjoke.com/',{
        header:{
            'Accept':'application/json'
        }
    }) 
    .then(response=>{
        return response.json();
    })
    .then(data =>{
        console.log('Random dad joke :',data.joked);
    })
    .catch(error =>{
        console.log(error);
    });
    

    async function fetchDadjoke(){
        try{
            const response=await
            fetch('https://icanhazdadjoke.com/',{
                header:{
                    'Accept':'application/json'
                }
            });
            const data=await  response.json();
            console.log('Random dad joke:',data.joke);
        } catch (error){
            console.log(error);
        }
    }  

    fetchDadjoke();