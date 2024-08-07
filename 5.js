//by my own 
// Part 5: Promise Timeout
// 1. Write a function fetchWithTimeout that takes a URL and a 
// timeout value in milliseconds. The function should return a 
// promise that resolves with the fetched data or rejects with a 
// timeout error if the request takes longer than the specified timeout.







function fetchWithTimeout(url, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(async() => {

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('ERRRROR');
                }
                const data = await response.json();
                resolve(data);
            } catch (error) {
                reject(error);
            }


            reject(new Error('timed out'));
        }, timeout);

       
    });
}

fetchWithTimeout('https://jsonplaceholdertypicode.com/posts', 5000)
    .then(data => console.log('Data fetched successfully:', data))
    .catch(error => console.log(error));


    
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


