import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function TypographyModel({ styles, variant, text }) {
  const useStyles = makeStyles({
    root: {
      ...styles
    }
  });

  const classes = useStyles();

  /* Tipo variant:
        h1,h2,h3,h4,h5,h6,
        subtitle1,subtitle2,
        body1,body2,
        button,caption,overline
  */

  return (
    <div className={classes.root}>
      <Typography variant={variant} gutterBottom>
        {text}
      </Typography>
    </div>
  );
}

export default TypographyModel;
