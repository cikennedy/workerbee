async function signOut() {
    // Make a POST request to destroy the session on the back end
    const response = await fetch('/api/users/signout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // If successfully logged out, redirect to the homepage 
      document.location.replace('/');
    } else {
      alert('signout.');
    }
  };
  
  document.querySelector('#signout').addEventListener('click', signOut);