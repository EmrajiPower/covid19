import React, { useState, useEffect } from "react";

import ButtonComponent from "../model/Buttons/ButtonModel";

import { compose } from "recompose";
import { connect } from "react-redux";

import { getSummary } from "../../Actions/Summary";

function Home(props) {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    props.getSummary();
  }, []);

  return (
    <React.Fragment>
      <ButtonComponent
        text="Building 👷‍♂️🛠"
        containerStyle={{ textAlign: "center", paddingTop: "5%" }}
        styles={{
          backgroundColor: "yellow",
          "&:hover": {
            backgroundColor: "orange"
          },
          "&:active": {
            backgroundColor: "yellow"
          },
          "&:focus": {
            boxShadow: "0 0 0 0.2rem yellow"
          }
        }}
      />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  summary: state.Summary.summary
});

const mapDispatchToProps = dispatch => ({
  getSummary: () => dispatch(getSummary())
});

const combine = compose(connect(mapStateToProps, mapDispatchToProps));

export default combine(Home);
