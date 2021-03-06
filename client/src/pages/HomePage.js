import React, { useState, useEffect } from 'react';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";
import { useHistory } from "react-router-dom";
import nodemailer from 'nodemailer';
// const nodemailer = require('nodemailer');

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {
    img:
      "https://i.imgur.com/WRvdAxT.jpg",
    desc: "Car Wash",
    loc: "Lakeview, Chicago"
  },
  {
    img:
      "https://i.imgur.com/2uOxjai.jpg",
    desc: "Lawn Care",
    loc: "Logan Square, Chicago"
  },
  {
    img:
      "https://i.imgur.com/H2au5ID.jpg",
    desc: "Moving Help",
    loc: "Lincoln Park, Chicago"
  }
];

export default function HomePage() {
  const classes = useStyles();
  const history = useHistory();

  const [jobs, getJobs] = useState([]);

  useEffect(() => { 
    getAllJobs();
  }, []);

  const getAllJobs = () => {
    axios.get('/api/jobs')
    .then((res) => {
      const allJobData = res.data;
      getJobs(() => allJobData);
    })
    .catch(err => console.log(err));
  }

  const handleClick = (route) => {
    history.push(route);
  }

  const imagePicker = (category) => {

    if (category === "Auto Care") {
      return "https://i.imgur.com/WRvdAxT.jpg"
    } else if(category === "Home/Lawn Care") {
      return "https://i.imgur.com/2uOxjai.jpg"
    } else if (category === "Moving Help") {
      return "https://i.imgur.com/H2au5ID.jpg"
    }

  }

  function mailer(email) {

      var data = {
          from: '"Workerbee" <workerbeeproject@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "workerbee - Someone has applied to your poster job!", // Subject line
          text: "Job Applied", // plain text body
          html: "HTML BODY MESSAGE", // html body
          }
      axios.post('/api/mailer', data).then((response)=> {
        history.push("/confirmation")
      })
    } 
  
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Workerbee
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Here are the jobs available in your area.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button 
                  onClick={() => {handleClick("/newjob")}} variant="contained" color="primary">
                  Post a Job
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {jobs.map((card) => (
              <Grid item key={card._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={imagePicker(card.category)}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h6" color="inherit">
                      {card.job_title}
                    </Typography>
                    <Typography variant="h6" color="inherit">
                      Category: {card.category}
                    </Typography>
                    <Typography variant="h6" color="inherit">
                      Address: {card.address}
                    </Typography>
                    <Typography variant="h6" color="inherit">
                      ${card.pay}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => {handleClick("/details/" + card._id)}} size="small" color="primary">
                      Details
                    </Button>
                    <Button onClick={() => {mailer(card.email)}} size="small" color="primary">
                      Apply
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

    </React.Fragment>
  );
}
