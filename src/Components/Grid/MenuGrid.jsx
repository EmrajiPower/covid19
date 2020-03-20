import React, { useState, useEffect } from "react";

import CardIconsModel from "../model/Card/CardIconsModel";
import PieModel from "../model/Dashboards/PieModel";

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
      height: "90%"
    },
    [theme.breakpoints.up("sm")]: {
      height: "90%"
    },
    [theme.breakpoints.up("md")]: {
      height: "90%"
    },
    [theme.breakpoints.up("lg")]: {
      height: "90%"
    }
  },
  summary: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#27496d",
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
  },
  country: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#27496d",
    [theme.breakpoints.down("sm")]: {
      height: "15rem"
    },
    [theme.breakpoints.up("sm")]: {
      height: "15rem"
    },
    [theme.breakpoints.down("md")]: {
      height: "15rem"
    },
    [theme.breakpoints.up("lg")]: {
      height: "15rem"
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
      height: "16rem"
    },
    [theme.breakpoints.up("sm")]: {
      height: "16rem"
    },
    [theme.breakpoints.down("md")]: {
      height: "16rem"
    },
    [theme.breakpoints.up("lg")]: {
      height: "16rem"
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
    recovered: "",
    death: ""
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
            setStateTitles({
              ...stateTitles,
              logoText: "State of Coronavirus",
              sumaryText: "Summary Dashboards",
              countryText: "Select Country",
              cardTitle: "Api Daily",
              cardContentTitle: "Api Daily",
              cardContentText: "Here Im going to settup interesting data"
            });
            setStateDashboard({
              ...stateDashboard,
              confirmed: "Confirmed",
              recovered: "Recovered",
              death: "Deaths"
            });
            break;
          case "es":
            setStateTitles({
              ...stateTitles,
              logoText: "Estado del Coronavirus",
              sumaryText: "Resumen en Dashboards",
              countryText: "Seleccionar Ciudad",
              cardTitle: "Api Diaria",
              cardContentTitle: "Api Diaria",
              cardContentText: "Aquì voy a configurar datos interesantes"
            });
            setStateDashboard({
              ...stateDashboard,
              confirmed: "Confirmados",
              recovered: "Recuperados",
              death: "Muertos"
            });
            break;
          case "de":
            setStateTitles({
              ...stateTitles,
              logoText: "Bundesstaat Coronavirus",
              sumaryText: "Zusammenfassung Dashboards",
              countryText: "Land auswählen",
              cardTitle: "Api Daily",
              cardContentTitle: "Api Daily",
              cardContentText: "Hier werde ich interessante Daten festlegen"
            });
            setStateDashboard({
              ...stateDashboard,
              confirmed: "Bestätigt",
              recovered: "Wiederhergestellt",
              death: "Todesfälle"
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
                stateDashboard.recovered,
                stateDashboard.death
              ]}
              values={[1, 15, 12]}
              width={400}
              height={350}
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
                margin: "auto 30%",
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
                margin: "auto 30%",
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
                margin: "auto 30%",
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
                margin: "auto 30%",
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
