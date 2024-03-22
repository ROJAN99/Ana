document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    const url = 'http://localhost:8080/submit-form'; // Replace with your backend URL
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObject)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        alert('Form submitted successfully!');
        form.reset();
    })
    .catch(error => {
        console.error('There was an error!', error);
        alert('There was an error submitting the form.');
    });
});
