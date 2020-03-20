import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

import { setLanguage } from "../../../Actions/Language";

import { compose } from "recompose";
import { connect } from "react-redux";

const StyleComponent = withStyles(theme => ({
  input: {
    borderRadius: 4,
    position: "relative",
    border: "1px solid #27496d",
    fontSize: 16,
    backgroundColor: "#27496d",
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem #27496d"
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "center",
    padding: "1rem 1rem"
  },
  inputLabel: {
    position: "inherit",
    alignSelf: "center",
    padding: "1%"
  }
}));

function InputSelectLanguage(props) {
  const classes = useStyles();

  const [language, setLanguage] = React.useState("en");

  const handleChange = event => {
    setLanguage(event.target.value);
    props.settupLanguage(event.target.value);
  };

  return (
    <div className={classes.container}>
      <FormControl>
        <InputLabel className={classes.inputLabel} id="customized-select-label">
          <span role="img" aria-label="">
            🗣️
          </span>
        </InputLabel>
        <Select
          labelId="customized-select-label"
          id="customized-select"
          value={language}
          inputProps={{
            name: "language",
            id: "age-simple"
          }}
          onChange={handleChange}
          input={<StyleComponent />}
        >
          <MenuItem value="en">
            <span role="img" aria-label="en">
              🇺🇸
            </span>
          </MenuItem>
          <MenuItem value="es">
            <span role="img" aria-label="es">
              🇪🇸
            </span>
          </MenuItem>
          <MenuItem value={"de"}>
            <span role="img" aria-label="de">
              🇩🇪
            </span>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  settupLanguage: data => dispatch(setLanguage(data))
});

const combine = compose(connect(null, mapDispatchToProps));

export default combine(InputSelectLanguage);
