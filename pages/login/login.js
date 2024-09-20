    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
    import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDShdsXCA5kd3H0XJLmL9GhXV8296-jA8E",
      authDomain: "portal-23628.firebaseapp.com",
      projectId: "portal-23628",
      storageBucket: "portal-23628.appspot.com",
      messagingSenderId: "1001393245530",
      appId: "1:1001393245530:web:bc39448a698586ed893763",
      measurementId: "G-P00C3HPWSN"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);



document.getElementById('loginBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if (user.email === 'admin@portal.com') {
                window.location.href = 'admin.html';
            } else {
                window.location.href = 'student.html';
            }
        })
        .catch((error) => {
            document.getElementById('loginError').textContent = error.message;
        });
});


































































//  // Handle form submission
//  const loginForm = document.getElementById('login-form');
//  loginForm.addEventListener('submit', (event) => {
//      event.preventDefault();
//      // Here you can handle the form data and send it to the backend for authentication
//      alert('Login successful!');
//      // Redirect to the admin portal after successful login
//      window.location.href = 'admin.html';
//  });