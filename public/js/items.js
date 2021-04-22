const addItem = async (event) => {
    console.log(event);
    event.preventDefault();
    // Collect values from the login form
    const item = document.querySelector('.form-control').value;
    const dataId = event.target.options[event.target.selectedIndex].dataset.id;
    // if (item) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/list/', {
            method: 'POST',
            body: JSON.stringify({ item_name: item, item_id: dataId, }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    // }
};
document
    .querySelector('.form-control')
    .addEventListener('change', addItem);