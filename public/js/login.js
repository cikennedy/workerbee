async function loginFormHandler(event) {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const email = document.querySelector('#signinemail').value.trim();
    const password = document.querySelector('#signinlogin').value.trim();
  
    if (email && password) {
      // Send the email and password to the server
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      // Sends user to the dashboard if the login succeeds
      if (response.ok) {
        document.location.replace('/home');
      } else {
        // alert(response.statusText);
        alert("Check your Email and Password and try again!");
  
      }
    }
  };
  
  document.querySelector('.signinform').addEventListener('submit', loginFormHandler);