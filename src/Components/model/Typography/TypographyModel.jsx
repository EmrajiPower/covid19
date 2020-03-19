import React from "react";

import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

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

TypographyModel.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string
};

export default TypographyModel;
