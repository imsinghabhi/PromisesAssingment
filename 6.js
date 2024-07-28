function fetchAllWithErrors(urls) {

    const fetchPromises = urls.map(url => fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    }));

    
    return Promise.all(fetchPromises);
}


const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/albums'
];

fetchAllWithErrors(urls)
    .then(results => {
        console.log('All data fetched successfully:', results);
    })
    .catch(error => {
        console.error('Error encountered:', error);
    });
