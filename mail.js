// Firebase configuration
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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the database
const contactFormDB = firebase.database().ref('ase-storage');

// Adding event listener to the form
document.getElementById('login_form').addEventListener('submit', submitForm);

// Function to handle form submission
function submitForm(e) {
    e.preventDefault();

    // Getting form values
    const first_name = getElementVal("first-name");
    const last_name = getElementVal("last-name");
    const cnp = getElementVal("cnp");
    const bdate = getElementVal("bdate");
    const email = getElementVal("email");
    const password = getElementVal("password");
    const retype_password = getElementVal("re-type_password");

    console.log(first_name, last_name, cnp, bdate, email, password, retype_password);

    // Save the data to the database
    saveMessages(first_name, last_name, cnp, bdate, email, password, retype_password);

    // Optionally, clear the form after submission
    document.getElementById('login_form').reset();
}

// Function to get form element values
const getElementVal = (id) => {
    return document.getElementById(id).value;
}

// Function to save messages to the database
const saveMessages = (first_name, last_name, cnp, bdate, email, password, retype_password) => {
    const newContactForm = contactFormDB.push();

    newContactForm.set({
        first_name: first_name,
        last_name: last_name,
        cnp: cnp,
        bdate: bdate,
        email: email,
        password: password,
        retype_password: retype_password
    });
}
