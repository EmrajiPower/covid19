import React from "react";

import TypographyModel from "../Components/model/Typography/TypographyModel";
import CovidIcon from "./Covid19.svg";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "../img/keyframes.css";

function AnimationLogo({ text }) {
  return (
    <React.Fragment>
      <TypographyModel
        text={text}
        variant="h4"
        styles={{ display: "flex", justifyContent: "flex-end" }}
      />
      <Container className="shadowImpulse" maxWidth="sm">
        <img alt="1" width="120" className="rotate1" src={CovidIcon}></img>
        <img alt="2" width="100" className="rotate2" src={CovidIcon}></img>
        <img alt="3" width="140" className="rotate3" src={CovidIcon}></img>
      </Container>
    </React.Fragment>
  );
}

export default AnimationLogo;
