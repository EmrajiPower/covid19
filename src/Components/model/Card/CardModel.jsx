import React from "react";

import ButtonComponent from "../Buttons/ButtonModel";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

function CardModel({
  stylesContainer,
  cardMediaStyles,
  cardMediaTitle,
  cardMediaSrc,
  cardContentStyles,
  cardContentTittle,
  cardContentText,
  cardActionsStyle
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
    <Card className={classes.root}>
      <CardActionArea>
        {!!cardMediaTitle && (
          <CardMedia
            component="img"
            alt={cardMediaTitle}
            className={classes.cardStyles}
            image={cardMediaSrc}
            title={cardMediaTitle}
          />
        )}
        <CardContent className={classes.cardContentStyles}>
          {!!cardContentTittle && (
            <Typography gutterBottom variant="h5" component="h2">
              {cardContentTittle}
            </Typography>
          )}
          <Typography variant="body2" color="textSecondary" component="p">
            {cardContentText}
          </Typography>
          <CardActions className={classes.cardActions}>
            <ButtonComponent text={"B1"} />
            <ButtonComponent text={"B2"} />
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardModel;
