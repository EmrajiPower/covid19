import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";

import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

function ButtonModel({ theme, containerStyle, styles, text, variant, color }) {
  const useStyles = makeStyles(theme => ({
    root: { ...styles }
  }));

  const classes = useStyles();

  return (
    <div style={containerStyle}>
      <Button variant={variant} color={color} className={classes.root}>
        {text}
      </Button>
    </div>
  );
}

ButtonModel.propTypes = {
  theme: PropTypes.object,
  styles: PropTypes.object,
  text: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string
};

export default ButtonModel;
