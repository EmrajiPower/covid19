import React from "react";

import ButtonComponent from "../Buttons/ButtonModel";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

function CardIconsModel({
  stylesContainer,
  cardMediaStyles,
  cardContentStyles,
  cardContentTittle,
  cardContentText,
  cardActionsStyle,
  confirmed,
  deaths,
  recovered,
  iconA,
  iconB
}) {
  const useStyles = makeStyles({
    root: {
      ...stylesContainer
    },
    cardStyles: {
      ...cardMediaStyles
    },
    cardContent: {
      ...cardContentStyles
    },
    cardActions: {
      ...cardActionsStyle
    },
    yellow: {
      backgroundColor: "yellow"
    },
    red: {
      backgroundColor: "red"
    },
    green: {
      backgroundColor: "green"
    }
  });

  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea className={classes.cardActions}>
          {!!iconA && (
            <img src={iconA} width={40} height={40} alt={iconA}></img>
          )}
          {!!iconB && (
            <img src={iconB} width={40} height={40} alt={iconA}></img>
          )}
          <CardContent className={classes.cardContentStyles}>
            {!!cardContentTittle && (
              <Typography variant="h5">{cardContentTittle}</Typography>
            )}
            <Typography variant="body2" color="gray" component="p">
              {cardContentText}
            </Typography>
          </CardContent>
          <Container fixed>
            <Chip
              variant="outlined"
              size="small"
              avatar={<Avatar className={classes.yellow}>C</Avatar>}
              label={confirmed}
            />
            <Chip
              variant="outlined"
              size="small"
              avatar={<Avatar className={classes.red}>D</Avatar>}
              label={deaths}
            />
            <Chip
              variant="outlined"
              size="small"
              avatar={<Avatar className={classes.green}>R</Avatar>}
              label={recovered}
            />
          </Container>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
}

CardIconsModel.propTypes = {
  stylesContainer: PropTypes.object,
  cardMediaStyles: PropTypes.object,
  cardMediaTitle: PropTypes.string,
  cardMediaSrc: PropTypes.string,
  cardContentStyles: PropTypes.object,
  cardContentTittle: PropTypes.string,
  cardContentText: PropTypes.string,
  cardActionsStyle: PropTypes.object
};

export default CardIconsModel;
