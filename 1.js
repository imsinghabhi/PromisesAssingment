// Part 1: Basic Promise Handling
// Print out "Program started" at the start of your code.
// Create a Promise that resolves after 3 seconds and rejects after 2 seconds.
// Log out the promise while it's pending.
// Print out "Program in progress..." as well.
// Print out "Program complete" if the promise fulfills.
// Print out "Program failure" if the promise rejects.
console.log('Started program');
const promise =new Promise((resolve,reject)=>{
     setTimeout(() => {
        resolve("Program Complete")
     },3000);
     setTimeout(() => {
        reject("Program failure")
     }, 2000);
     console.log("Promise is pending")

});

console.log("Program in progress")

promise.then((data)=>(
    console.log(data)
)).catch((err)=>(
    console.log(err)
))
