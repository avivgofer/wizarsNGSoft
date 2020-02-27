import React from "react";
import classes from "./BackButton.module.css";
import BackArrow from "../../../assets/images/BackArrow.png";

const backbutton = props => (
  <button className={classes.BackButton}>
    <img className={classes.BackButtonImg} src={BackArrow} alt="arrow"></img>
    <span className={classes.BackButtonSpan}>חזרה</span>
  </button>
);

export default backbutton;
