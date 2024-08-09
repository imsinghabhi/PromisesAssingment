// Part 2: Chaining Promises
// Print out "Program started" at the start of your code.
// Create a Promise that resolves after 3 seconds.
// Log out the promise while it's pending.
// Print out "Program in progress..." as well.
// Print out "Step 1 complete" when the first promise fulfills.
// Have the first promise return another new Promise that will fulfill after 3 seconds with the message: "Step 2 Complete".
// Print out the message from the second promise after it fulfills ("Step 2 Complete").



console.log("Program Started");

const promise=new Promise((resolve,reject)=>{
   try{
    setTimeout(() => {
        resolve("Step 1 complete");
    }, 3000);
    console.log("Promise is pending")
   }catch(err){
    reject(new Error("Custom error: Something went wrong"));
   }
});

console.log("Program in progress");


promise.then((msg)=>{
    console.log(msg);
    return new Promise((resolve)=>{
       setTimeout(() => {
        resolve("Step 2 complete");
       }, 3000);
    })
}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})








// console.log("Program started");

// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Step 1 complete"), 3000); 
//     console.log("Promise is pending");
// });


// console.log("Program in progress...");

// firstPromise
//     .then((message) => {
//         console.log(message); 
//         return new Promise((resolve, reject) => {
//             setTimeout(() => resolve("Step 2 complete"), 3000);
//         });
//     })
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log("Program failure=>", error);
//     });
