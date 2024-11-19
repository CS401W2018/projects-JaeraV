document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const first = document.getElementById('firstInput').value;
    const last = document.getElementById('lastInput').value;
    const age = document.getElementById('age').value;
    const password = document.getElementById('passInput').value;
    const class4 = document.getElementById('class').value;
    const birthdate = document.getElementById('birthdateInput').value;
    const email = document.getElementById('emailInput').value;
    const favorites = document.getElementById('fav').value;
    const tandc = document.getElementById('termsAndCond').checked;
    const recEmail = document.getElementById('updates').checked;

    const radios = document.getElementsByName("gender");
    let selectedValue = null;

    radios.forEach((radio) => {
        if (radio.checked) {
        selectedValue = radio.value;
        return }
    });


    // validation
    if (!first || !last) {
        alert("Please provide your full name.");
        return;
    }

    if (!age || age < 18) {
        alert("You must be 18 years or older to submit this form.");
        return;
    }

    if (!email) {
        alert("Please provide an email.");
        return;
    }

    if (!password || password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    const formData = {
        firstName: first,
        lastName: last,
        age: age,
        password: password,
        class: class4,
        dateofbirth: birthdate,
        email: email,
        fave: favorites,
        gender: selectedValue,
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