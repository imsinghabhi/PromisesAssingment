function fetchAnyWithErrors(urls) {
    return new Promise((resolve, reject) => {
      let errors = [];
      let pendingRequests = urls.length;
  
      urls.forEach((url, index) => {
        fetch(url)
          .then(response => {
            if (response.ok) {
              resolve(response);
            } else {
              return Promise.reject(new Error(`Request to ${url} failed with status ${response.status}`));
            }
          })
          .catch(error => {
            errors[index] = error.message;
            pendingRequests--;
  
            if (pendingRequests === 0) {
              reject(new Error(`All requests failed: ${errors.join(', ')}`));
            }
          });
      });
    });
  }
  

  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://invalidurl.example.com'
  ];
  
  fetchAnyWithErrors(urls)
    .then(response => response.json())
    .then(data => console.log('First successful response:', data))
    .catch(error => console.error('All requests failed:', error.message));
  