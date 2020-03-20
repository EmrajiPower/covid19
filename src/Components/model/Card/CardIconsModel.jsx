import React from "react";

import ButtonComponent from "../Buttons/ButtonModel";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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
          <Container fixed></Container>
          <CardContent className={classes.cardContentStyles}>
            {!!cardContentTittle && (
              <Typography gutterBottom variant="h5" component="h2">
                {cardContentTittle}
              </Typography>
            )}
            <Typography variant="body2" color="textSecondary" component="p">
              {cardContentText}
            </Typography>
          </CardContent>
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
