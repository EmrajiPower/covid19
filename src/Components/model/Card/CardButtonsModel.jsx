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

function CardButtonsModel({
  stylesContainer,
  cardMediaStyles,
  cardMediaTitle,
  cardMediaSrc,
  cardContentStyles,
  cardContentTittle,
  cardContentText,
  cardActionsStyle,
  textButtonA,
  textButtonB
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
            <ButtonComponent text={textButtonA} />
            <ButtonComponent text={textButtonB} />
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CardButtonsModel.propTypes = {
  stylesContainer: PropTypes.object,
  cardMediaStyles: PropTypes.object,
  cardMediaTitle: PropTypes.string,
  cardMediaSrc: PropTypes.string,
  cardContentStyles: PropTypes.object,
  cardContentTittle: PropTypes.string,
  cardContentText: PropTypes.string,
  cardActionsStyle: PropTypes.object
};

export default CardButtonsModel;
