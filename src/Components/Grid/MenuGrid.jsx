import React, { useState, useEffect } from "react";

import CardModel from "../model/Card/CardModel";

import withWidth from "@material-ui/core/withWidth";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down("md")]: {
      display: "flex"
    }
  },
  logo: {
    padding: theme.spacing(2),
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      height: "12rem"
    },
    [theme.breakpoints.up("sm")]: {
      height: "12rem"
    },
    [theme.breakpoints.up("md")]: {
      height: "12rem"
    },
    [theme.breakpoints.up("lg")]: {
      height: "12rem"
    }
  },
  summary: {
    padding: theme.spacing(2),
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      height: "12rem"
    },
    [theme.breakpoints.up("sm")]: {
      height: "12rem"
    },
    [theme.breakpoints.down("md")]: {
      height: "12rem"
    },
    [theme.breakpoints.up("lg")]: {
      height: "12rem"
    }
  },
  country: {
    padding: theme.spacing(2),
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      height: "12rem"
    },
    [theme.breakpoints.up("sm")]: {
      height: "12rem"
    },
    [theme.breakpoints.down("md")]: {
      height: "12rem"
    },
    [theme.breakpoints.up("lg")]: {
      height: "12rem"
    }
  },
  daily: {
    padding: theme.spacing(2),
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      height: "auto"
    },
    [theme.breakpoints.up("sm")]: {
      height: "auto"
    },
    [theme.breakpoints.down("md")]: {
      height: "auto"
    },
    [theme.breakpoints.up("lg")]: {
      height: "auto"
    }
  }
}));

function MenuGrid(props) {
  const [state, setState] = useState({
    logoText: "",
    sumaryText: "",
    countryText: "",
    cardTitle: "",
    cardContentTitle: "",
    cardContentText: ""
  });
  const [grid, setGrid] = useState(6);

  useEffect(() => {
    const listenWidth = () => {
      if (props.width) {
        switch (props.width) {
          case "xs":
            setGrid(12);
            break;
          case "sm":
            setGrid(12);
            break;
          case "md":
            setGrid(6);
            break;
          case "lg":
            setGrid(6);
            break;
          default:
            break;
        }
      }
    };
    const listenLanguage = () => {
      if (props.language) {
        switch (props.language) {
          case "en":
            setState({
              ...state,
              logoText: "The Logo",
              sumaryText: "Summary Dashboards",
              countryText: "Select Country",
              cardTitle: "Api Daily",
              cardContentTitle: "Api Daily",
              cardContentText: "Here Im going to settup interesting data"
            });
            break;
          case "es":
            setState({
              ...state,
              logoText: "El Logo",
              sumaryText: "Resumen en Dashboards",
              countryText: "Seleccionar Ciudad",
              cardTitle: "Api Diaria",
              cardContentTitle: "Api Diaria",
              cardContentText: "Aquì voy a configurar datos interesantes"
            });
            break;
          case "de":
            setState({
              ...state,
              logoText: "Das Logo",
              sumaryText: "Zusammenfassung Dashboards",
              countryText: "Land auswählen",
              cardTitle: "Api Daily",
              cardContentTitle: "Api Daily",
              cardContentText: "Hier werde ich interessante Daten festlegen"
            });
            break;
          default:
            break;
        }
      }
    };
    listenWidth();
    listenLanguage();
  }, [props]);

  //[Classes]//
  const classes = useStyles();
  //[Classes]//
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={grid}>
          <Paper className={classes.logo}>{state.logoText}</Paper>
        </Grid>
        <Grid item xs={grid}>
          <Paper className={classes.summary}>{state.sumaryText}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.country}>{state.countryText}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.daily}>
            <CardModel
              stylesContainer={{
                border: "2px solid black",
                margin: "auto 30%",
                height: "auto"
              }}
              cardMediaTitle={state.cardTitle}
              cardMediaSrc={
                "https://lh3.googleusercontent.com/proxy/WKp74ZahD5WY2UZoXdw3JcXQpcnE2l4cAMMnEMr1DqAj7PZ3ZAKMEKG9qnmml_62oM0nm2zWGb9jUOGFdIMi6KuRWo_9czECTQTGF61baz5Yy3wLPRj49_lLSlyQwU8wJXWt9e-ie3W2cRsN95z2UkRSgFscF4i0bnPvxNJatc24jaVyD3goTHdutKgr7ledGXWbZcOF8RaY5CdKdmJWdByw_CDJ"
              }
              cardMediaStyles={{ height: "100%" }}
              cardContentTittle={state.cardContentTitle}
              cardContentText={state.cardContentText}
              cardActionsStyle={{ display: "flex" }}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withWidth()(MenuGrid);
