import React, { useState, useEffect } from "react";

import CardIconsModel from "../model/Card/CardIconsModel";
import PieModel from "../model/Dashboards/PieModel";
import PieLegend from "../model/Dashboards/PieLegend";

import IconSickeness from "../../img/sickness.svg";
import IconHealed from "../../img/healed.svg";
import AnimationLogo from "../../img/AnimationLogo";

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
    backgroundColor: "#27496d",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
      height: "91%"
    },
    [theme.breakpoints.up("sm")]: {
      height: "91%",
      marginLeft: "0%"
    },
    [theme.breakpoints.up("md")]: {
      height: "91%",
      marginLeft: "10%"
    },
    [theme.breakpoints.up("lg")]: {
      height: "91%",
      marginLeft: "10%"
    }
  },
  summary: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#27496d",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0%",
      height: "auto"
    },
    [theme.breakpoints.up("sm")]: {
      height: "auto",
      marginRight: "0%"
    },
    [theme.breakpoints.down("md")]: {
      height: "auto",
      marginRight: "0%"
    },
    [theme.breakpoints.up("lg")]: {
      height: "auto",
      marginRight: "10%"
    }
  },
  summaryWidth: {
    width: 350,
    [theme.breakpoints.down("sm")]: {
      width: 300
    },
    [theme.breakpoints.up("sm")]: {
      width: 350
    },
    [theme.breakpoints.down("md")]: {
      width: 350
    },
    [theme.breakpoints.up("lg")]: {
      width: 350
    }
  },
  summaryHeight: {
    height: 300,
    [theme.breakpoints.down("sm")]: {
      height: 80
    },
    [theme.breakpoints.up("sm")]: {
      height: 100
    },
    [theme.breakpoints.down("md")]: {
      height: 150
    },
    [theme.breakpoints.up("lg")]: {
      height: 200
    }
  },
  country: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#27496d",
    [theme.breakpoints.down("sm")]: {
      height: "16rem",
      margin: "0 5%"
    },
    [theme.breakpoints.up("sm")]: {
      height: "16rem",
      margin: "0 5%"
    },
    [theme.breakpoints.down("md")]: {
      height: "16rem",
      margin: "0 10%"
    },
    [theme.breakpoints.up("lg")]: {
      height: "16rem",
      margin: "0 10%"
    }
  },
  daily: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#27496d",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none"
    },
    [theme.breakpoints.down("sm")]: {
      height: "16rem",
      margin: "0 5%"
    },
    [theme.breakpoints.up("sm")]: {
      height: "16rem",
      margin: "0 5%"
    },
    [theme.breakpoints.down("md")]: {
      height: "16rem",
      margin: "0 10%"
    },
    [theme.breakpoints.up("lg")]: {
      height: "16rem",
      margin: "0 10%"
    }
  }
}));

function MenuGrid(props) {
  const [stateTitles, setStateTitles] = useState({
    logoText: "",
    sumaryText: "",
    countryText: "",
    cardTitle: "",
    cardContentTitle: "",
    cardContentText: ""
  });

  const [stateDashboard, setStateDashboard] = useState({
    confirmed: "",
    confirmedCounter: null,
    recovered: "",
    recoveredCounter: null,
    death: "",
    deathCounter: null
  });

  const [grid, setGrid] = useState(6);
  const [summaryWidth, setSummaryWidth] = useState(450);
  const [summaryHeight, setSummaryHeight] = useState(300);

  useEffect(() => {
    const listenWidth = () => {
      if (props.width) {
        switch (props.width) {
          case "xs":
            setGrid(12);
            setSummaryWidth(250);
            setSummaryHeight(300);
            break;
          case "sm":
            setGrid(12);
            setSummaryWidth(250);
            setSummaryHeight(290);
            break;
          case "md":
            setGrid(6);
            setSummaryWidth(400);
            setSummaryHeight(300);
            break;
          case "lg":
            setGrid(6);
            setSummaryWidth(450);
            setSummaryHeight(300);
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
            setStateTitles({
              ...stateTitles,
              logoText: "State of Coronavirus",
              sumaryText: "Summary",
              countryText: "Select Country",
              cardTitle: "confirmedApi Daily",
              cardContentTitle: "Api Daily",
              cardContentText: "Here Im going to settup interesting data"
            });
            setStateDashboard({
              ...stateDashboard,
              confirmed: "Confirmed",
              confirmedCounter: 25,
              recovered: "Recovered",
              recoveredCounter: 20,
              death: "Deaths",
              deathCounter: 2
            });
            break;
          case "es":
            setStateTitles({
              ...stateTitles,
              logoText: "Estado del Coronavirus",
              sumaryText: "Resumen",
              countryText: "Seleccionar Ciudad",
              cardTitle: "Api Diaria",
              cardContentTitle: "Api Diaria",
              cardContentText: "Aquì voy a configurar datos interesantes"
            });
            setStateDashboard({
              ...stateDashboard,
              confirmed: "Confirmados",
              confirmedCounter: 25,
              recovered: "Recuperados",
              recoveredCounter: 20,
              death: "Muertos",
              deathCounter: 2
            });
            break;
          case "de":
            setStateTitles({
              ...stateTitles,
              logoText: "Bundesstaat Coronavirus",
              sumaryText: "Zusammenfassung",
              countryText: "Land auswählen",
              cardTitle: "Api Daily",
              cardContentTitle: "Api Daily",
              cardContentText: "Hier werde ich interessante Daten festlegen"
            });
            setStateDashboard({
              ...stateDashboard,
              confirmed: "Bestätigt",
              confirmedCounter: 25,
              death: "Todesfälle",
              deathCounter: 2,
              recovered: "Wiederhergestellt",
              recoveredCounter: 20
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
          <Paper className={classes.logo}>
            <AnimationLogo text={stateTitles.logoText} />
          </Paper>
        </Grid>
        <Grid item xs={grid}>
          <Paper className={classes.summary}>
            <PieModel
              title={stateTitles.sumaryText}
              labels={[
                stateDashboard.confirmed,
                stateDashboard.death,
                stateDashboard.recovered
              ]}
              values={[
                stateDashboard.confirmedCounter,
                stateDashboard.deathCounter,
                stateDashboard.recoveredCounter
              ]}
              width={summaryWidth}
              height={summaryHeight}
            />
            <PieLegend
              confirmed={stateDashboard.confirmed}
              confirmedCounter={stateDashboard.confirmedCounter}
              deaths={stateDashboard.death}
              deathCounter={stateDashboard.deathCounter}
              recovered={stateDashboard.recovered}
              recoveredCounter={stateDashboard.recoveredCounter}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.country}>{stateTitles.countryText}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.daily}>
            <CardIconsModel
              stylesContainer={{
                margin: "1rem 10%",
                height: "auto"
              }}
              cardMediaTitle={stateTitles.cardTitle}
              cardMediaStyles={{ height: "100%" }}
              cardContentTittle={stateTitles.cardContentTitle}
              cardContentText={stateTitles.cardContentText}
              cardActionsStyle={{ backgroundColor: "#0c7b93" }}
              iconA={IconSickeness}
              {...props}
            />
            <CardIconsModel
              stylesContainer={{
                margin: "1rem 10%",
                height: "auto"
              }}
              cardMediaTitle={stateTitles.cardTitle}
              cardMediaStyles={{ height: "100%" }}
              cardContentTittle={stateTitles.cardContentTitle}
              cardContentText={stateTitles.cardContentText}
              cardActionsStyle={{ backgroundColor: "#00a8cc" }}
              iconB={IconHealed}
              {...props}
            />
            <CardIconsModel
              stylesContainer={{
                margin: "1rem 10%",
                height: "auto"
              }}
              cardMediaTitle={stateTitles.cardTitle}
              cardMediaStyles={{ height: "100%" }}
              cardContentTittle={stateTitles.cardContentTitle}
              cardContentText={stateTitles.cardContentText}
              cardActionsStyle={{ backgroundColor: "#0c7b93" }}
              iconA={IconSickeness}
              {...props}
            />
            <CardIconsModel
              stylesContainer={{
                margin: "1rem 10%",
                height: "auto"
              }}
              cardMediaTitle={stateTitles.cardTitle}
              cardMediaStyles={{ height: "100%" }}
              cardContentTittle={stateTitles.cardContentTitle}
              cardContentText={stateTitles.cardContentText}
              cardActionsStyle={{ backgroundColor: "#00a8cc" }}
              iconB={IconHealed}
              {...props}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withWidth()(MenuGrid);
