function validateForm() {
    // Get the form elements
    var name = document.getElementById("Your-Name1").value;
    var email = document.getElementById("email1").value;
    var message = document.getElementById("message").value;

    // Validate the Name field
    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    // Validate the Email field
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email == "") {
        alert("Please enter your email.");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate the Message field
    if (message == "") {
        alert("Please enter a message.");
        return false;
    }

    // If all validations pass, redirect to the "thanks.html" page
    window.location.href = 'thankyou.html';
    return false; // Prevent form submission to allow redirect
}

