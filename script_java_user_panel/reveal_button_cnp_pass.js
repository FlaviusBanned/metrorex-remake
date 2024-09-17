document.getElementById('reveal-btn').addEventListener('click', function() {
    var cnpField = document.getElementById('cnp');
    var passwordField = document.getElementById('password');
    var revealBtn = document.getElementById('reveal-btn');

    if (cnpField.type === 'password') {
        cnpField.type = 'text'; // Reveal CNP
        passwordField.type = 'text'; // Reveal Password
        revealBtn.innerHTML = 'Hide CNP and Password'; // Change button text
    } else {
        cnpField.type = 'password'; // Hide CNP
        passwordField.type = 'password'; // Hide Password
        revealBtn.innerHTML = 'Reveal CNP and Password'; // Change button text
    }
});
