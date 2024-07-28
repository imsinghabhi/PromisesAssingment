console.log("Program started");

const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Step 1 complete"), 3000); 
});

console.log("Promise is pending");
console.log("Program in progress...");

firstPromise
    .then((message) => {
        console.log(message); 
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("Step 2 complete"), 3000);
        });
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("Program failure=>", error);
    });
