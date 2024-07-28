async function conditionalChaining(initialUrl, secondaryUrl1, secondaryUrl2) {
    try {
      const initialResponse = await fetch(initialUrl);
      if (!initialResponse.ok) {
        throw new Error(`Failed to fetch ${initialUrl}: ${initialResponse.statusText}`);
      }
      
      const initialData = await initialResponse.json();
  
      let secondaryUrl;
      if (initialData.condition) {c
        secondaryUrl = secondaryUrl1;
      } else {
        secondaryUrl = secondaryUrl2;
      }
  
      const secondaryResponse = await fetch(secondaryUrl);
      if (!secondaryResponse.ok) {
        throw new Error(`Failed to fetch ${secondaryUrl}: ${secondaryResponse.statusText}`);
      }
      
      const secondaryData = await secondaryResponse.json();
  

      return {
        initialData,
        secondaryData
      };
  
    } catch (error) {
      console.error('Error:', error.message);
      throw error; 
    }
  }
  

  const initialUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  const secondaryUrl1 = 'https://jsonplaceholder.typicode.com/posts/2';
  const secondaryUrl2 = 'https://jsonplaceholder.typicode.com/posts/3';
  
  conditionalChaining(initialUrl, secondaryUrl1, secondaryUrl2)
    .then(result => console.log('Fetched data:', result))
    .catch(error => console.error('An error occurred:', error));
  