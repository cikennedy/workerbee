// Signup form that is similar to login, but includes email information
async function signupFormHandler(event) {
      // Stop the browser from submitting the form so we can do so with JavaScript
      event.preventDefault();
    
      // Gather the data from the form elements on the page
      const username = document.querySelector('#username').value.trim();
      const email = document.querySelector('#email').value.trim();
      const password = document.querySelector('#password').value.trim();
    
      if (username && email && password) {
        // Send the username, email, and password to the server
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({
            username,
            email,
            password
          }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        // Sends user to the home page if the login succeeds
        if (response.ok) {
          console.log('Account Generated.')
          document.location.replace('/home');
        } else {
          alert(response.statusText);
        }
      }
    };
  
    document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);