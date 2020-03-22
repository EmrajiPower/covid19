import React from "react";

import TypographyModel from "../Typography/TypographyModel";

import { makeStyles } from "@material-ui/core/styles";
import { green, red, orange } from "@material-ui/core/colors";

import Avatar from "@material-ui/core/Avatar";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function IconAvatars({
  confirmed,
  deaths,
  recovered,
  confirmedCounter,
  deathCounter,
  recoveredCounter
}) {
  const useStyles = makeStyles(theme => ({
    root: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 20%"
      },
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      },
      [theme.breakpoints.up("md")]: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      },
      [theme.breakpoints.up("lg")]: {
        display: "flex",
        flexDirection: "row"
      }
    },
    orange: {
      backgroundColor: orange[500],
      height: 30,
      width: 30
    },
    red: {
      backgroundColor: red[500],
      height: 30,
      width: 30
    },
    green: {
      backgroundColor: "green",
      height: 30,
      width: 30
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.orange}>
        <ErrorOutlineIcon />
      </Avatar>
      <TypographyModel
        text={`${confirmedCounter} ${confirmed}`}
        variant="subtitle2"
        styles={{ color: "orange", margin: "1% 1%" }}
      />
      <Avatar className={classes.red}>
        <HighlightOffIcon />
      </Avatar>
      <TypographyModel
        text={`${deathCounter} ${deaths}`}
        variant="subtitle2"
        styles={{ color: "red", margin: "1% 1%" }}
      />
      <Avatar className={classes.green}>
        <CheckCircleOutlineIcon />
      </Avatar>
      <TypographyModel
        text={`${recoveredCounter} ${recovered}`}
        variant="subtitle2"
        styles={{ color: "green", margin: "1% 1%" }}
      />
    </div>
  );
}

export default IconAvatars;
