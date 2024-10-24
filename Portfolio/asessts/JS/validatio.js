document.getElementById('input_submit').addEventListener('click', function(event) {
    event.preventDefault();

    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || number === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    if (!email.includes('gmail')) {
        alert('Please enter a valid Gmail address.');
        return;
    }

    if (number.length !== 10 || isNaN(number)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }


    document.getElementById('fullname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
    document.getElementById('message').value = '';

    alert('Form submitted successfully!');
});
