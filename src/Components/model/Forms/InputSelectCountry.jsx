import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { saveCountry } from "../../../Actions/Country";

import { compose } from "recompose";
import { connect } from "react-redux";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

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
    }
  }));

  const classes = useStyles();

  const [country, setCountry] = React.useState([]);

  const handleChange = event => {
    setCountry(event.target.value);
  };

  const handleSaveCountry = event => {
    props.saveCountry(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink style={formTitleStyle} id="mutiple-label">
          {formTitle}
        </InputLabel>
        <Select
          labelId="mutiple-label"
          id="mutiple"
          value={country}
          onChange={handleChange}
          onClick={handleSaveCountry}
          className={classes.selectStyle}
        >
          {names.map(name => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  saveCountry: data => dispatch(saveCountry(data))
});

const combine = compose(connect(mapStateToProps, mapDispatchToProps));

export default combine(InputSelect);
