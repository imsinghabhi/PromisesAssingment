async function fetchSequentially(urls) {
    const results = [];
    for (const url of urls) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        }
        const data = await response.json();
        results.push(data);
      } catch (error) {
        console.error(`Error fetching ${url}:`, error.message);
        results.push({ error: error.message });
      }
    }
    return results;
  }
  

  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];
  
  fetchSequentially(urls)
    .then(results => console.log('Fetched results:', results))
    .catch(error => console.error('An error occurred:', error));
  