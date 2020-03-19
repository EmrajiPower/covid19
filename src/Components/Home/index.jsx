import React, { useState, useEffect } from "react";

import MenuGrid from "../Grid/MenuGrid";
import InputSelectLanguage from "../model/Forms/InputSelectLanguage";

import { compose } from "recompose";
import { connect } from "react-redux";

import { getSummary } from "../../Actions/Summary";

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
  }, [props.language]);

  return (
    <React.Fragment>
      <InputSelectLanguage />
      <MenuGrid language={state.language ? state.language : "en"} />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  summary: state.Summary.summary,
  language: state.Language.language
});

const mapDispatchToProps = dispatch => ({
  getSummary: () => dispatch(getSummary())
});

const combine = compose(connect(mapStateToProps, mapDispatchToProps));

export default combine(Home);
