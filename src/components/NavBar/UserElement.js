import React from "react";
import UserIcon from "./images/UserIcon.png";
import UserIconDone from "./images/UserIconDone.png";
import classes from "./NavBar.module.css";

const userelement = props => {
  const dynamicClasses = [classes.Element];
  let icon;
  switch (props.step) {
    case 1:
      {
        dynamicClasses.push(classes.CircleOn);
        icon = UserIcon;
      }
      break;
    case 2:
      {
        dynamicClasses.push(classes.CircleDone);
        icon = UserIconDone;
      }

      break;
    case 3:
      {
        dynamicClasses.push(classes.CircleGrey);
        icon = UserIconDone;
      }
      break;
    default:
      return;
  }
  return (
    <div className={dynamicClasses.join(" ")}>
      <img src={icon} alt="icon"></img>
      <div className={classes.ElementDiv}>
        <span className={classes.ElementSpan}>פרטי המבקש</span>
      </div>
    </div>
  );
};

export default userelement;
