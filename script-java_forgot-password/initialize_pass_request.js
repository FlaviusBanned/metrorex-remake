import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, sendPasswordResetEmail, fetchSignInMethodsForEmail } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

// Your web app's Firebase configuration
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

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

function showPopup(message) {
  const popup = document.getElementById('message-popup');
  const popupMessage = document.getElementById('popup-message');
  popupMessage.textContent = message; // Set message
  popup.classList.add('show'); // Show popup

  // Hide popup after 3 seconds
  setTimeout(() => {
     popup.classList.remove('show');
  }, 3000); // 3000 milliseconds = 3 seconds
}

// Replace alert with showPopup in the form submission
document.getElementById('forgot-password-form').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent form submission from reloading the page
  const email = document.getElementById('email').value; // Get user input email

  try {
     // Check if the email is associated with any sign-in methods
     const signInMethods = await fetchSignInMethodsForEmail(auth, email);

     if (signInMethods.length === 0) {
        // No sign-in methods found for this email
        showPopup('❌ | No user found with this email address. Please check and try again. | ❌');
     } else {
        // Email exists, send the password reset email
        await sendPasswordResetEmail(auth, email);
        showPopup('✅ | If this email is registered, a password reset email has been sent. Please check your inbox. | ✅');
     }
  } catch (error) {
     // Handle error using the popup
     handleError(error);
  }
});

// Function to handle errors and show them in a popup
function handleError(error) {
  let message = 'An error occurred.';

  switch (error.code) {
     case 'auth/invalid-email':
        message = 'Invalid email format. Please check the email address you entered.';
        break;
     case 'auth/network-request-failed':
        message = 'Network error. Please check your internet connection and try again.';
        break;
     default:
        message = 'Error: ' + error.message; // Generic error message
        break;
  }

  showPopup(message); // Use popup to show error
}
