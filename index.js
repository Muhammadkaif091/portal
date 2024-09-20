    // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
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



















  
   // Mobile menu functionality
    const btn = document.querySelector(".mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });