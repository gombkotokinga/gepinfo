const apiEndpoint = 'https://randomuser.me/api/';


fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        document.getElementById('user-image').src = user.picture.large;
    })
    .catch(error => console.error('Error fetching data:', error));