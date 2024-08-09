function fetchWithRace(urls, timeout) {
    return new Promise((resolve, reject) => {
    
        const timeoutPromise = new Promise(( rejectTimeout) => {
            setTimeout(() => {
                rejectTimeout(new Error('Request timed out'));
            }, timeout);
        });

 
        const fetchPromises = urls.map(url => 
            fetch(url).then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
        );

        Promise.race([timeoutPromise, ...fetchPromises])
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}


const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/albums'
];

fetchWithRace(urls, 5000) 
    .then(data => console.log('First successful response:', data))
    .catch(error => console.error('Error:', error));
