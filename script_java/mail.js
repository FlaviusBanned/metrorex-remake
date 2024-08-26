// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyATXUMzO8wLrOCWkz4zon3Xi0jxST9HFmE",
    authDomain: "metrorex-f19cb.firebaseapp.com",
    databaseURL: "https://metrorex-f19cb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "metrorex-f19cb",
    storageBucket: "metrorex-f19cb.appspot.com",
    messagingSenderId: "835380487217",
    appId: "1:835380487217:web:1a0abe68cc610626e6a110",
    measurementId: "G-DGH3MNPMNL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Handle form submission
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const cnp = document.getElementById('cnp').value;
    const birthdate = document.getElementById('bdate').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const retypePassword = document.getElementById('re-type_password').value;

    // Basic validation
    if (password !== retypePassword) {
        alert('Passwords do not match!');
        return;
    }

    // Save user to Realtime Database
    const newUserRef = database.ref('users').push();
    newUserRef.set({
        first_name: firstName,
        last_name: lastName,
        cnp: cnp,
        birthdate: birthdate,
        email: email
    })
    .then(() => {
        alert('User registered successfully!');
        // Clear form
        document.getElementById('register-form').reset();
    })
    .catch((error) => {
        console.error('Error adding user: ', error);
        alert('Error registering user.');
    });
});
