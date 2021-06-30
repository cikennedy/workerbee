// async function logout() {
//     // Make a POST request to destroy the session on the back end
//     const response = await fetch('/api/users/logout', {
//       method: 'post',
//       headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (response.ok) {
//       // If successfully logged out, redirect to the homepage 
//       document.location.replace('/');
//     } else {
//       alert('Failed to log out.');
//     }
//   };
  
//   document.querySelector('#logout').addEventListener('click', logout);