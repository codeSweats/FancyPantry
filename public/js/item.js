// Ask Rachel




const item = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const item = document.querySelector('#item_name').value.trim();
    const description = document.querySelector('des')
  
    if (item ) {
      // Send a POST request to the API endpoint                
      const response = await fetch('/api/', {                   // what endpoint is it going to?
        method: 'POST',
        body: JSON.stringify({ item}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.item-form')
    .addEventListener('keyup', item);
  
