//DONE BY MY OWN


// Part 3: Advanced Promise Chaining
// Print out "Program started" at the start of your code.
// Create a Promise that resolves after 5 seconds with the value {data: "Hello, friend!", error: null}.
// Log out the promise while it's pending.
// Print out "Program in progress..." as well.
// Create a first Promise chain using the promise above and print out the resolved value when the first promise fulfills.
// Have this first promise return another new Promise that will fulfill after 2 seconds with the message: "First promise chain complete!".
// Print out the message from the above promise after it fulfills ("First promise chain complete!").
// Create a second Promise chain using the first promise above and print out the resolved value when the second promise fulfills.
// Have this second promise return another new Promise that will fulfill after 10 seconds with the message: "Second promise chain complete!".
// Print out the message from the above promise after it fulfills ("Second promise chain complete!").


console.log("Program started");
const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve({data: "Hello, friend!", error: null}), 5000);
});
console.log("Promise is pending...");
console.log("Program in progress...");
newPromise
    .then((result) => {
        console.log(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("First promise chain complete!"), 2000);
        });
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("Program failed! :", error);
    }); 


    newPromise.then((msg)=>{
        console.log(msg);
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve("Second promise chain complete!")
            }, 5000);
        })
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err)
    })






// console.log("Program started");

// function createInitialPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve({ data: "Hello, friend!", error: null }), 5000);
//   });
// }

// function createFirstPromiseChain(data) {
//   console.log(data);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("First promise chain complete!"), 2000);
//   });
// }

// function createSecondPromiseChain(message) {
//   console.log(message);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Second promise chain complete!"), 10000);
//   });
// }

// const initialPromise = createInitialPromise();
// console.log("Promise is pending...");
// console.log("Program in progress...");

// initialPromise
//   .then(createFirstPromiseChain)
//   .then(createSecondPromiseChain)
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log("Program failure:", error);
//   });
