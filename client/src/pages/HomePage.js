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
import Link from '@material-ui/core/Link';
import AllJobs from "../components/Jobs"
import API from "../utils/API";
import axios from "axios";
const nodemailer = require('nodemailer');


// const useStyles = makeStyles(theme => ({
//   offset: theme.mixins.toolbar,
// }))



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

  const [jobs, getJobs] = useState([]);

  useEffect(() => { 
    getAllJobs();
  }, []);

  const getAllJobs = () => {
    axios.get('/api/jobs')
    .then((res) => {
      const allJobData = res.data;
      console.log('Hello'
      );
      console.log(allJobData);
      getJobs(() => allJobData);
    })
    .catch(err => console.log(err));
  }


  // useEffect(() => {
  //   axios.get('/api/jobs')
  //   .then(res => {
  //     setJobs([...jobs, res.data]);
  //     console.log(jobs);
  //   })
  // })
  // useEffect(() => {
  //   API.getBooks()
  // })
  


  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
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
                  <Button href="/Newjob" variant="contained" color="primary">
                  Post a Job
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Sort by
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
                  {/* <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title="Car Wash"
                  /> */}
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.job_title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Category: {card.category}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Address: {card.address}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      ${card.pay}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href={"/details/" + card._id} size="small" color="primary">
                      Details
                    </Button>
                    <Button href={"/confirmation/" + card._id} size="small" color="primary">
                      Apply
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
