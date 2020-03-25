import React, { useState, useEffect } from "react";

import MenuGrid from "../Grid/MenuGrid";
import InputSelectLanguage from "../model/Forms/InputSelectLanguage";

import { compose } from "recompose";
import { connect } from "react-redux";

import moment from "moment";

import { getSummary, getSummaryByDay } from "../../Actions/Summary";

function Home(props) {
  const [state, setState] = useState({
    language: "en"
  });

  useEffect(() => {
    props.getSummary();
    if (props.language) {
      switch (props.language) {
        case "en":
          setState({ language: props.language });
          break;
        case "es":
          setState({ language: props.language });
          break;
        case "de":
          setState({ language: props.language });
          break;
        default:
          break;
      }
    }
    props.getSummaryByDay(
      moment(new Date())
        .subtract(1, "days")
        .format("MM-DD-YYYY")
    );
  }, [props.language]);

  return (
    <React.Fragment>
      <InputSelectLanguage />
      <MenuGrid
        language={state.language ? state.language : "en"}
        summaryByDay={props.summaryByDay.length && props.summaryByDay}
      />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  summary: state.Summary.summary,
  summaryByDay: state.Summary.summaryByDay,
  language: state.Language.language
});

const mapDispatchToProps = dispatch => ({
  getSummary: () => dispatch(getSummary()),
  getSummaryByDay: date => dispatch(getSummaryByDay(date))
});

const combine = compose(connect(mapStateToProps, mapDispatchToProps));

export default combine(Home);
