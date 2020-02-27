import React from "react";
import TovinIcon from "./images/TovinIcon.png";
import TovinIconDone from "./images/TovinIconDone.png";
import classes from "./NavBar.module.css";

const tovinelement = props => {
  const dynamicClasses = [classes.Element];
  let icon;
  switch (props.step) {
    case 1:
      {
        dynamicClasses.push(classes.CircleOff);
        icon = TovinIcon;
      }
      break;
    case 2:
      {
        dynamicClasses.push(classes.CircleOn);
        icon = TovinIcon;
      }
      break;
    case 3:
      {
        dynamicClasses.push(classes.CircleGrey);
        icon = TovinIconDone;
      }
      break;
    default:
      return;
  }
  return (
    <div className={dynamicClasses.join(" ")}>
      <img src={icon} alt="icon"></img>
      <div className={classes.ElementDiv}>
        <span className={classes.ElementSpan}>פרטי הטובין</span>
      </div>
    </div>
  );
};

export default tovinelement;
