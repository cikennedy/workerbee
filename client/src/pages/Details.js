import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
// import AllJobs from "../components/Jobs"
// import MainFeaturedPost from '../components/MainFeaturedPost';
// import Main from '../components/Main';
// import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import API from "../utils/API";
import axios from "axios";


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
  mainGrid: {
    marginTop: theme.spacing(3),
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

export default function Details(props) {
  const classes = useStyles();

  const [job, setJob] = useState({});

  // useEffect(() => { 
  //   getDetails();
  // }, []);

  // const getDetails = () => {
  //   API.getJob()
  //   .then((res) => {
  //     const allJobData = res.data;
  //     console.log('Hello'
  //     );
  //     console.log(allJobData);
  //     getJobDetails(() => allJobData);
  //   })
  //   .catch(err => console.error(`Error:`));
  // }

  const {id} = useParams()
  useEffect(() => {
    // API.getJob()
    axios.get("/api/jobs/" + id)
      .then((res) => {
        const singleJobData = res.data;
        setJob(() => singleJobData);
      })
      .catch(err => console.log(err));
    }, []);
  //       const singleJobData = res.data;
  //       setJob(() => singleJobData))
  //     })
  //     .catch(err => console.log(err));
  // }, [])
  

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
      <Container maxWidth="lg">
        {/* <Header title="Blog" sections={sections} /> */}
        <main>
          {/* <MainFeaturedPost> */}
            <Typography gutterBottom variant="h5" component="h2">
                      {job.job_title}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="h2">
                      {job.category}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="h2">
                      {job.description}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="h2">
                      {job.address}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="h2">
                      {job.phone}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="h2">
                      {job.email}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="h2">
                      {job.duration}
                    </Typography>
                    
                    <Typography gutterBottom variant="h5" component="h2">
                      {job.pay}
                    </Typography>
                    <Button href={"/Confirmation/" + job._id} size="small" color="primary">
                      Apply
                    </Button>

          {/* </MainFeaturedPost> */}
          {/* <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* <Main title="About the job" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
          </Grid>
        </main>
      </Container>
      <Footer title="Workerbee" /*description="Something here to give the footer a purpose!"*/ />
    </React.Fragment>
  );
}