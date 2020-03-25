import React, { useState, useEffect } from "react";

import CardIconsModel from "../model/Card/CardIconsModel";
import PieModel from "../model/Dashboards/PieModel";
import PieLegend from "../model/Dashboards/PieLegend";
import InputSelectCountry from "../model/Forms/InputSelectCountry";
import IconAvatarModel from "../model/Buttons/AvatarIconModel";
import TypographyModel from "../model/Typography/TypographyModel";

import { compose } from "recompose";
import { connect } from "react-redux";

import IconSickeness from "../../img/sickness.svg";
import IconHealed from "../../img/healed.svg";
import AnimationLogo from "../../img/AnimationLogo";
import YoutubeSearchedForIcon from "@material-ui/icons/YoutubeSearchedFor";

import withWidth from "@material-ui/core/withWidth";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Skeleton from "@material-ui/lab/Skeleton";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import moment from "moment";

import { handleClearCountry } from "../../Actions/Country";

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
      height: "auto",
      margin: "0 5%"
    },
    [theme.breakpoints.up("sm")]: {
      height: "auto",
      margin: "0 5%"
    },
    [theme.breakpoints.down("md")]: {
      height: "auto",
      margin: "0 10%"
    },
    [theme.breakpoints.up("lg")]: {
      height: "auto",
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
  },
  skeleton: {
    textAlign: "center"
  }
}));

function MenuGrid(props) {
  const [stateTitles, setStateTitles] = useState({
    logoText: "",
    sumaryText: "",
    countryText: "",
    dailyContentTitle: "",
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
              countryText: "Select your Country",
              dailyContentTitle: "Daily Reports",
              cardContentText: "Report Time"
            });
            setStateDashboard({
              ...stateDashboard,
              confirmed: "Confirmed",
              confirmedCounter:
                (props.summary.length && props.summary[0].confirmed.value) ||
                "...",
              recovered: "Recovered",
              recoveredCounter:
                (props.summary.length && props.summary[0].recovered.value) ||
                "...",
              death: "Deaths",
              deathCounter:
                (props.summary.length && props.summary[0].deaths.value) || "..."
            });
            break;
          case "es":
            setStateTitles({
              ...stateTitles,
              logoText: "Estado del Coronavirus",
              sumaryText: "Resumen",
              countryText: "Seleccionar tu País",
              dailyContentTitle: "Reportes Diarios",
              cardContentText: "Hora de Reporte"
            });
            setStateDashboard({
              ...stateDashboard,
              confirmed: "Confirmados",
              confirmedCounter:
                (props.summary.length && props.summary[0].confirmed.value) ||
                "...",
              recovered: "Recuperados",
              recoveredCounter:
                (props.summary.length && props.summary[0].recovered.value) ||
                "...",
              death: "Muertos",
              deathCounter:
                (props.summary.length && props.summary[0].deaths.value) || "..."
            });
            break;
          case "de":
            setStateTitles({
              ...stateTitles,
              logoText: "Bundesstaat Coronavirus",
              sumaryText: "Zusammenfassung",
              countryText: "Land auswählen",
              dailyContentTitle: "Tägliche Berichte",
              cardContentText: "Berichtszeit"
            });
            setStateDashboard({
              ...stateDashboard,
              confirmed: "Bestätigt",
              confirmedCounter:
                (props.summary.length && props.summary[0].confirmed.value) ||
                "...",
              death: "Todesfälle",
              deathCounter:
                (props.summary.length && props.summary[0].deaths.value) ||
                "...",
              recovered: "Wiederhergestellt",
              recoveredCounter:
                (props.summary.length && props.summary[0].recovered.value) ||
                "..."
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

  const handleSearchCountry = () => {
    props.handleClearCountry();
  };

  const classes = useStyles();

  const { country } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/*Componente de Titulo y Logo */}
        <Grid item xs={grid}>
          <Paper className={classes.logo}>
            <AnimationLogo text={stateTitles.logoText} />
          </Paper>
        </Grid>
        {/*Componente de Dashboard*/}
        <Grid item xs={grid}>
          <Paper className={classes.summary}>
            <PieModel
              title={`${stateTitles.sumaryText} ${props.summary.length &&
                moment(props.summary[0].lastUpdate).format("L")}`}
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
        {/*Componente de Selección de Ciudad */}
        <Grid item xs={12}>
          <Paper className={classes.country}>
            {!country ? (
              <InputSelectCountry
                formTitle={stateTitles.countryText}
                formTitleStyle={{ color: "antiquewhite", display: "contents" }}
                selectStyle={{
                  color: "antiquewhite",
                  "&:before": {
                    borderColor: "#142850"
                  },
                  "&:after": {
                    borderColor: "orange"
                  }
                }}
                containerStyle={{
                  paddingTop: "5%",
                  minWidth: 120,
                  maxWidth: 300,
                  width: "25%",
                  textAlign: "center"
                }}
              />
            ) : (
              <React.Fragment>
                <IconButton onClick={handleSearchCountry}>
                  <Avatar style={{ backgroundColor: "#6699ff" }}>
                    <YoutubeSearchedForIcon />
                  </Avatar>
                </IconButton>
                <TypographyModel
                  text={country}
                  variant="h4"
                  styles={{ color: "antiquewhite", padding: "1rem 0" }}
                />
                <IconAvatarModel
                  confirmed={stateDashboard.confirmed}
                  confirmedCounter={
                    (props.summaryByCountry &&
                      props.summaryByCountry.length &&
                      props.summaryByCountry[0].confirmed.value) ||
                    "0"
                  }
                  deaths={stateDashboard.death}
                  deathCounter={
                    (props.summaryByCountry &&
                      props.summaryByCountry.length &&
                      props.summaryByCountry[0].deaths.value) ||
                    "0"
                  }
                  recovered={stateDashboard.recovered}
                  recoveredCounter={
                    (props.summaryByCountry &&
                      props.summaryByCountry.length &&
                      props.summaryByCountry[0].recovered.value) ||
                    "0"
                  }
                />
              </React.Fragment>
            )}
          </Paper>
        </Grid>
        {/*Componente de Noticias Diarias */}
        <Grid item xs={12}>
          <Paper className={classes.daily}>
            <TypographyModel
              text={stateTitles.dailyContentTitle}
              variant="h4"
              styles={{ color: "antiquewhite", padding: "1rem 0" }}
            />
            {props.summaryByDay ? (
              props.summaryByDay.slice(0, 100).map(data => {
                return (
                  <CardIconsModel
                    stylesContainer={{
                      margin: "1rem 10%",
                      height: "auto"
                    }}
                    cardMediaStyles={{ height: "100%" }}
                    cardContentTittle={data.combinedKey}
                    cardContentText={`${stateTitles.cardContentText} ${moment(
                      data.lastUpdate
                    ).format("HH:mm:ss")}`}
                    confirmed={data.confirmed}
                    deaths={data.deaths}
                    recovered={data.recovered}
                    cardActionsStyle={{
                      backgroundColor: "#0c7b93",
                      paddingBottom: "1%",
                      color: "antiquewhite"
                    }}
                    iconA={IconSickeness}
                    iconB={IconHealed}
                    {...props}
                  />
                );
              })
            ) : (
              <React.Fragment>
                <Skeleton height={140} />
                <Skeleton height={140} />
              </React.Fragment>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  country: state.Country.country,
  summary: state.Summary.summary,
  summaryByCountry: state.Country.summaryByCountry
});
const mapDispatchToProps = dispatch => ({
  handleClearCountry: () => dispatch(handleClearCountry())
});

const combine = compose(connect(mapStateToProps, mapDispatchToProps));

export default withWidth({ initialWidth: "lg" })(combine(MenuGrid));
