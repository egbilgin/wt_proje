document.getElementById('contact-form').addEventListener('submit', function(event) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const phoneValue = phoneInput.value;
    const messageValue = messageInput.value;

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    const phoneRegex = /^\+?\d{10,15}$/;

    let isValid = true;

  
    if (nameValue.trim() === '') {
        alert('Please enter your name.');
        isValid = false;
    }

    if (!emailRegex.test(emailValue)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    if (!phoneRegex.test(phoneValue)) {
        alert('Please enter a valid phone number.');
        isValid = false;
    }

    if (messageValue.trim() === '') {
        alert('Please enter your message.');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        const queryString = `name=${encodeURIComponent(nameValue)}&email=${encodeURIComponent(emailValue)}&phone=${encodeURIComponent(phoneValue)}&message=${encodeURIComponent(messageValue)}`;
        window.location.href = `display.html?${queryString}`;
        event.preventDefault(); 
    }
});



function clearForm() {
    var formElements = document.getElementById("contact-form").elements;

    for (var i = 0; i < formElements.length; i++) {
        var element = formElements[i];
        if (element.type === "text" || element.type === "textarea" || element.type === "email" || element.type === "number" || element.type === "password") {
            element.value = "";
        }
    }
}

