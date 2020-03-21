import React from "react";

import TypographyModel from "../Components/model/Typography/TypographyModel";
import CovidIcon from "./virus.svg";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SvgIcon from "@material-ui/core/SvgIcon";
import "../img/keyframes.css";

function AnimationLogo({ text }) {
  return (
    <React.Fragment>
      <TypographyModel
        text={text}
        variant="h4"
        styles={{
          display: "flex",
          justifyContent: "flex-end",
          paddingBottom: "2rem"
        }}
      />
      <Container className="shadowImpulse" maxWidth="sm">
        <img alt="3" width="140" className="rotate3" src={CovidIcon}></img>
      </Container>
    </React.Fragment>
  );
}

export default AnimationLogo;
