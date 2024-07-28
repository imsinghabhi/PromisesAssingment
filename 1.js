console.log("Program started");

const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject("Program failure"), 2000); 
    setTimeout(() => resolve("Program complete"), 3000); 
});

console.log("Promise is pending...");
console.log("Program in progress...");

promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
