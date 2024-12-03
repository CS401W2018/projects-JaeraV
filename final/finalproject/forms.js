document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const first = document.getElementById('firstInput').value;
    const last = document.getElementById('lastInput').value;
    const email = document.getElementById('emailInput').value;
    const message = document.getElementById('yourMessage').value;
    const tandc = document.getElementById('termsAndCond').checked;
    const recEmail = document.getElementById('updates').checked;


    // validation
    if (!first || !last) {
        alert("Please provide your full name.");
        return;
    }

    if (!email) {
        alert("Please provide an email.");
        return;
    }

    const formData = {
        firstName: first,
        lastName: last,
        email: email,
        message: message,
        termsandconditions: tandc,
        emailupdates: recEmail
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myForm').innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));

    console.log(formData);

})