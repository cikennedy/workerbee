import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
// import MapContainer from "../components/MapContainer"
import nodemailer from "nodemailer";
import { green } from "@material-ui/core/colors";

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
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
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
  homeBtn: {
    marginLeft: theme.spacing(3),
  },
}));

export default function Details(props) {
  const classes = useStyles();
  const history = useHistory();

  const [job, setJob] = useState({});

  const { id } = useParams();
  useEffect(() => {
    // API.getJob()
    axios
      .get("/api/jobs/" + id)
      .then((res) => {
        const singleJobData = res.data;
        setJob(() => singleJobData);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (route) => {
    history.push(route);
  };

  function mailer(email) {
    var data = {
      from: '"Workerbee" <workerbeeproject@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "workerbee - Someone has applied to your poster job!", // Subject line
      text: "Job Applied", // plain text body
      html: "HTML BODY MESSAGE", // html body
    };
    axios.post("/api/mailer", data).then((response) => {
      history.push("/confirmation");
    });
  }

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Header title="Blog" sections={sections} /> */}
        <main>
          {/* <div
            style={{
              paddingTop: "50px",
            }}
          >
            <MapContainer />
          </div> */}
          {/* <MainFeaturedPost> */}
          <Typography
            className={classes.heroContent}
            gutterBottom
            variant="h2"
            component="h2"
          >
            {" "}
            Job Details
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            <strong>Job Title:</strong> {job.job_title}
          </Typography>

          <Typography gutterBottom variant="h5" component="h2">
            <strong>Category:</strong> {job.category}
          </Typography>

          <Typography gutterBottom variant="h5" component="h2">
            <strong>Description:</strong> {job.description}
          </Typography>

          <Typography gutterBottom variant="h5" component="h2">
            <strong>Address:</strong> {job.address}
          </Typography>

          <Typography gutterBottom variant="h5" component="h2">
            <strong>Phone#:</strong> {job.phone}
          </Typography>

          <Typography gutterBottom variant="h5" component="h2">
            <strong>Email:</strong> {job.email}
          </Typography>

          <Typography gutterBottom variant="h5" component="h2">
            <strong>Est. Duration:</strong> {job.duration}
          </Typography>

          <Typography gutterBottom variant="h5" component="h2">
            <strong>Pay:</strong> ${job.pay}
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              mailer(job.email);
            }}
            size="large"
            color="primary"
          >
            Apply
          </Button>
          <Button
            className={classes.homeBtn}
            onClick={() => {
              handleClick("/home");
            }}
            variant="contained"
            size="large"
            color="default"
            margin-left="25px"
          >
            Return to Home
          </Button>

          <Grid container spacing={5} className={classes.mainGrid}></Grid>
        </main>
      </Container>
      <Footer title="Workerbee" />
    </div>
  );
}
