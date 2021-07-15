import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/cikennedy/job-hunter">
      Workerbee
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function NewJob() {
  const [formObject, setFormObject] = useState({})
  const classes = useStyles();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  async function handleFormSubmit(event) {
    event.preventDefault();
    const job_title = formObject.job_title;
    const category = formObject.category;
    const description = formObject.description;
    const address = formObject.address;
    const phone = formObject.phone;
    const email = formObject.email;
    const duration = formObject.duration;
    const pay = formObject.pay;

    if ( job_title && category && description && address && phone && email
      && duration && pay ) {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        body: JSON.stringify({
          job_title,
          category,
          description,
          address,
          phone,
          email,
          duration,
          pay,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
    if (response.ok) {
      console.log('Job Posted.')
      document.location.replace(`/home`);
      // Replace the above code with below once the route is working
      // document.location.replace(`/jobs/${job_id}`);
    } else {
      alert(response.statusText);
    }
  }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Post a New Job
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="job_title"
                label="Job Title"
                name="job_title"
                autoComplete="Job Title"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="category"
                label="Category"
                name="category"
                autoComplete="category"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="phone"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="duration"
                label="Duration (Minutes)"
                name="duration"
                autoComplete="duration"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="pay"
                label="Pay"
                type="pay"
                id="pay"
                autoComplete="pay"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="date"
                label="Date"
                type="date"
                id="date"
                autoComplete="date"
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Button
            // type="submit"
            onClick={handleFormSubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Post Job
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default NewJob;