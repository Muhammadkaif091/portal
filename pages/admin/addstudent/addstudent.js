  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

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
  const db = getFirestore(app);
  
document.getElementById('addStudentBtn').addEventListener('click', async () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const cnic = document.getElementById('cnic').value;
    const studentEmail = document.getElementById('studentEmail').value;
    const studentPassword = document.getElementById('studentPassword').value;
    
    const errorElement = document.getElementById('addStudentError');
    const successElement = document.getElementById('addStudentSuccess');
    
    // Validate form fields
    if (!firstName || !lastName || !cnic || !studentEmail || !studentPassword) {
        errorElement.textContent = "All fields are required!";
        successElement.textContent = "";
        return;
    }

    // Reset error message
    errorElement.textContent = "";

    // Add student to Firestore
    try {
        await addDoc(collection(db, "students"), {
            firstName,
            lastName,
            cnic,
            email: studentEmail,
            password: studentPassword // For security, avoid storing plain passwords like this in real apps
        });
        successElement.textContent = "Student added successfully!";
        document.getElementById('addStudentForm').reset(); // Reset form
    } catch (error) {
        errorElement.textContent = "Error adding student: " + error.message;
    }
});
