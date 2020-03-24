import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import {
  saveCountry,
  handleSummmaryByCountry,
  handleLoadCountries
} from "../../../Actions/Country";

import { compose } from "recompose";
import { connect } from "react-redux";

function InputSelect({
  formTitle,
  formTitleStyle,
  value,
  containerStyle,
  selectStyle,
  ...props
}) {
  const useStyles = makeStyles(theme => ({
    formControl: {
      ...containerStyle
    },
    selectStyle: {
      ...selectStyle
    },
    menu: {
      height: 300,
      textAlign: "center"
    }
  }));

  const classes = useStyles();

  useEffect(() => {
    props.handleLoadCountries();
  }, []);

  const [country, setCountry] = React.useState([]);

  const handleChange = event => {
    setCountry(event.target.value);
  };

  const handleSaveCountry = async event => {
    await props.saveCountry(event.target.value);
    await props.handleSummmaryByCountry(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink style={formTitleStyle} id="mutiple-label">
          {formTitle}
        </InputLabel>
        <Select
          MenuProps={{ className: classes.menu }}
          labelId="mutiple-label"
          id="mutiple"
          value={country}
          onChange={handleChange}
          onClick={handleSaveCountry}
          className={classes.selectStyle}
        >
          {props.countryNames.length &&
            props.countryNames[0].countries.map((name, i) => (
              <MenuItem key={i} value={name.name}>
                {name.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}

const mapStateToProps = state => ({
  countryNames: state.Country.countryNames
});

const mapDispatchToProps = dispatch => ({
  saveCountry: data => dispatch(saveCountry(data)),
  handleLoadCountries: () => dispatch(handleLoadCountries()),
  handleSummmaryByCountry: data => dispatch(handleSummmaryByCountry(data))
});

const combine = compose(connect(mapStateToProps, mapDispatchToProps));

export default combine(InputSelect);
