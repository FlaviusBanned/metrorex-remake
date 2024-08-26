import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB6LGyoosFP5HwgzqdoJVh797Qhwv8Fzlg",
    authDomain: "ase-storage.firebaseapp.com",
    databaseURL: "https://ase-storage-default-rtdb.firebaseio.com",
    projectId: "ase-storage",
    storageBucket: "ase-storage.appspot.com",
    messagingSenderId: "56574862198",
    appId: "1:56574862198:web:f9063396b80ede2eca5057",
    measurementId: "G-51J6SN1SWR"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

function register() {
    // Get form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const cnp = document.getElementById('cnp').value;
    const bdate = document.getElementById('bdate').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const retypePassword = document.getElementById('re-type_password').value;

    // Check if passwords match
    if (password !== retypePassword) {
        alert("Passwords do not match!");
        return;
    }

    // Validate input fields
    if (!validateEmail(email) || !validatePassword(password) || !validateField(firstName) || !validateField(lastName) || !validateField(cnp) || !validateField(bdate)) {
        alert('One or more fields are invalid!');
        return;
    }

    // Create user with Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User registered successfully
            const user = userCredential.user;

            // Save additional information in Realtime Database
            set(ref(database, 'users/' + user.uid), {
                first_name: firstName,
                last_name: lastName,
                cnp: cnp,
                bdate: bdate,
                email: email
            }).then(() => {
                alert("User registered successfully!");
                window.location.href = "./user-panel/user.html";
            }).catch((error) => {
                console.error("Error saving data:", error);
                alert("Failed to save user data: " + error.message);
            });

        })
        .catch((error) => {
            // Handle errors
            console.error("Error registering user:", error);
            alert("Registration failed: " + error.message);
        });
}

function validateEmail(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
}

function validatePassword(password) {
    return password.length >= 7;
}

function validateField(field) {
    return field && field.length > 0;
}

// Event listener for the form
document.getElementById('register-form').addEventListener('submit', (event) => {
    event.preventDefault();
    register();
});
