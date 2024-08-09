// 1. Create a function fetchAllWithErrors 
// that takes an array of URLs and returns a
//  promise. This promise should resolve with an
//   array of results if all requests are successful 
//   or reject with the first error encountered.

function fetchAllWithErrors(urls) {
    return new Promise(async (resolve, reject) => {
        const results = [];

        for (let i = 0; i < urls.length; i++) {
            try {
                await fetch(urls[i]).then(response => {
                    if (!response.ok) {
                        throw new Error("Errorrr!!");
                    }
                    return response.json();
                })
                .then(data => resolve(data))
            } catch (error) {
                return reject(error);  //if any single request is failed then it  will throw eerror ,if not then it willl show data
            }
        }
        resolve(results);// will resolve only if all requests are succesfull
    });
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/albums'
];

fetchAllWithErrors(urls)
    .then(results => console.log('ALL DATA:', results))
    .catch(error => console.log(error));



















    // function fetchAllWithErrors(urls) {

//     const fetchPromises = urls.map(url => fetch(url).then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     }));

    
//     return Promise.all(fetchPromises);
// }


// const urls = [
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/comments',
//     'https://jsonplaceholder.typicode.com/albums'
// ];

// fetchAllWithErrors(urls)
//     .then(results => {
//         console.log('All data fetched successfully:', results);
//     })
//     .catch(error => {
//         console.error('Error encountered:', error);
//     });