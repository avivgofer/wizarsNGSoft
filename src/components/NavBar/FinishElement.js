import React from "react";
import classes from "./NavBar.module.css";
import FinishIcon from "./images/FinishIcon.png";

const finishelement = props => {
  const dynamicClasses = [classes.Element];
  switch (props.step) {
    case 1:
      {
        dynamicClasses.push(classes.CircleOff);
      }
      break;
    case 2:
      {
        dynamicClasses.push(classes.CircleOff);
      }
      break;
    case 3:
      {
        dynamicClasses.push(classes.CircleOn);
      }
      break;
    default:
      return;
  }
  return (
    <div className={dynamicClasses.join(" ")}>
      <img src={FinishIcon} alt="finishIcon"></img>
      <div className={classes.ElementDiv}>
        <span className={classes.ElementSpan}>אישור וסיום</span>
      </div>
    </div>
  );
};

export default finishelement;
