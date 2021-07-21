import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://github.com/cikennedy/job-hunter">
//         Workerbee
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  }}));

function SignOut() {
  const classes = useStyles();

  async function handleSignOutSubmit(event) {
    event.preventDefault();
    const response = await fetch('/api/users/signout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
    if (response.ok) {
      console.log('Successful Sign Out')
      // If successfully signed out, return to sign in page 
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };

  return (
            <Button
              // type="submit"
              onClick={handleSignOutSubmit}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log Out
            </Button>
  );
}

export default SignOut;


