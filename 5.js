function fetchWithRetry(url,timeout){
    
}

// function fetchWithTimeout(url, timeout) {
//     return new Promise((resolve, reject) => {
//         const timeoutPromise = new Promise((_, rejectTimeout) => {
//             setTimeout(() => {
//                 rejectTimeout(new Error('Request timed out'));
//             }, timeout);
//         });

//         const fetchPromise = fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             });

      
//         Promise.race([fetchPromise, timeoutPromise])
//             .then(data => resolve(data))
//             .catch(error => reject(error));
//     });
// }

// fetchWithTimeout('https://jsonplaceholder.typicode.com/posts', 3000) 
//     .then(data => console.log('Data fetched successfully:', data))
//     .catch(error => console.error('Error:', error));


