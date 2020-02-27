import React from "react";
import classes from "./ContinueButton.module.css";

const continuebutton = props => (
  <button className={classes.ContinueButton}>
    {props.text ? (
      <span className={classes.ContinueButtonSpan}>{props.text}</span>
    ) : (
      <span
        className={classes.ContinueButtonSpan}
        onClick={props.clickFakeContinueBtn}
      >
        המשך
      </span>
    )}
  </button>
);

export default continuebutton;
