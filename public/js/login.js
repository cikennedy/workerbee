// async function loginFormHandler(event) {
//     // Stop the browser from submitting the form so we can do so with JavaScript
//     event.preventDefault();
  
//     // Gather the data from the form elements on the page
//     const email = document.querySelector('#email-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();
  
//     if (email && password) {
//       // Send the email and password to the server
//       const response = await fetch('/api/users/login', {
//         method: 'post',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       // Sends user to the dashboard if the login succeeds
//       if (response.ok) {
//         document.location.replace('/dashboard');
//       } else {
//         // alert(response.statusText);
//         alert("Ooops, chcek your Email / Password and try again!");
  
//       }
//     }
//   };
  
//   document.querySelector('.login-form').addEventListener('submit', loginFormHandler);