console.log("Program started");

const initialPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve({data: "Hello, friend!", error: null}), 5000); 
});

console.log("Promise is pending...");
console.log("Program in progress...");

initialPromise
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
        console.log("Program failure:", error); 
    });

initialPromise
    .then((result) => {
        console.log(result); 
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("Second promise chain complete!"), 10000); 
        });
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("Program failure:", error); 
    });
