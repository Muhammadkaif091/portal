    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
    import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
    import {
        getFirestore,
        doc,
        setDoc,
      } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
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
    const db = getFirestore(app);

    let signupName = document.getElementById("signupName")
    let signupEmail = document.getElementById("signupEmail")
    let signupPassword = document.getElementById("signupPassword")

    window.SignupUser = () => {
        if (signupName.value === '' || signupEmail.value === '' || window.SignupUser = () => {
  if (username.value === '' || email.value === '' || password.value === '') {
    Swal.fire({
      title: 'Error!',
      text: 'All fields are required!',
      icon: 'error',
      confirmButtonText: 'OK'
    });
    return;
  }

  let obj = {
    username: username.value,
    email: email.value,
    password: password.value
  };

  username.value = '';
  email.value = '';
  password.value = '';

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then((res) => {
      obj.id = res.user.uid;
      obj.userType = "user";
      delete obj.password;

      const reference = doc(db, "users", obj.id);
      setDoc(reference, obj)
        .then(() => {
          const userObj = JSON.stringify(obj);
          localStorage.setItem("user", userObj);
          window.location.replace("./../../index.html");
        })
        .catch((err) => {
          Swal.fire({
            title: 'Error!',
            text: err.message,
            icon: 'error',
            confirmButtonText: 'OK'
          });
        });

      Swal.fire({
        title: 'Account Created!',
        text: 'Your account has been successfully created.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    })
    .catch((err) => {
      Swal.fire({
        title: 'Error!',
        text: err.message === 'Firebase: Error (auth/email-already-in-use).' ? 'You are already registered, please log in!' : err.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
};.value === '') {
          Swal.fire({
            title: 'Error!',
            text: 'All fields are required!',
            icon: 'error',
            confirmButtonText: 'OK'
          });
          return;
        }
      
        let obj = {
          signupName: signupName.value,
          signupEmail: signupEmail.value,
          signupPassword: signupPassword.value
        };
      
        username.value = '';
        email.value = '';
        password.value = '';
      
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
          .then((res) => {
            obj.id = res.user.uid;
            obj.userType = "user";
            delete obj.password;
      
            const reference = doc(db, "users", obj.id);
            setDoc(reference, obj)
              .then(() => {
                const userObj = JSON.stringify(obj);
                localStorage.setItem("user", userObj);
                window.location.replace("./../../index.html");
              })
              .catch((err) => {
                Swal.fire({
                  title: 'Error!',
                  text: err.message,
                  icon: 'error',
                  confirmButtonText: 'OK'
                });
              });
      
            Swal.fire({
              title: 'Account Created!',
              text: 'Your account has been successfully created.',
              icon: 'success',
              confirmButtonText: 'OK'
            });
          })
          .catch((err) => {
            Swal.fire({
              title: 'Error!',
              text: err.message === 'Firebase: Error (auth/email-already-in-use).' ? 'You are already registered, please log in!' : err.message,
              icon: 'error',
              confirmButtonText: 'OK'
            });
          });
      };