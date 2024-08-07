//DONE BY MY OWN 

// Part 4: Promise Retry
// 1. Write a function fetchWithRetry that takes a URL and a number of retries. 
// The function should return a promise that resolves with the fetched data 
// or retries the request up to the specified number of times before rejecting with an error message.



const fetchWithRetry=(url,retries)=>{
    return new Promise(async(resolve,reject)=>{
        
        var i = 1;
      while(i<=retries){

      
        await fetch(url).then(response => {
                    if (!response.ok) {
                        throw new Error("Errorrr!!");
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => {
                    console.log(`Retrying... Attempts left: ${retries-i}`);
                    
                });
                i++;
        }
        
        reject(`Failed after ${retries} retries!`);

       
    })
}

fetchWithRetry('https://jsonplaceholdr.typicode.com/posts', 3)
    .then(data => console.log('Data fetched successfully:', data))
    .catch(error => console.log(error));





// const fetchWithRetry = (url, retries) => new Promise((resolve, reject) => {
//     const attemptFetch = (attemptsLeft) => {
//         fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(data => resolve(data))
//             .catch(error => {
//                 if (attemptsLeft > 0) {
//                     console.log(`Retrying... Attempts left: ${attemptsLeft}`);
//                     attemptFetch(attemptsLeft - 1);
//                 } else {
//                     reject(`Failed after ${retries} retries: ${error.message}`);
//                 }
//             });
//     };

//     attemptFetch(retries);
// });


// fetchWithRetry('https://api.example.com/data', 3)
//     .then(data => console.log('Data fetched successfully:', data))
//     .catch(error => console.error('Error:', error));