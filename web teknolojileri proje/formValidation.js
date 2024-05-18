document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Email ve Number inputlarını al
    const emailInput = document.getElementById('email');
    const numberInput = document.getElementById('number');

    // Email ve Number değerlerini al
    const emailValue = emailInput.value;
    const numberValue = numberInput.value;

    // Email formatını kontrol eden regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Number formatını kontrol eden regex (sadece sayılar)
    const numberRegex = /^\d+$/;

    let isValid = true;

    // Email formatını kontrol et
    if (!emailRegex.test(emailValue)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    // Number formatını kontrol et
    if (!numberRegex.test(numberValue)) {
        alert('Please enter a valid number.');
        isValid = false;
    }

    // Eğer formatlar geçerli değilse form gönderimini engelle
    if (!isValid) {
        event.preventDefault();
    }
});
