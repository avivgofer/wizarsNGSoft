import React from "react";
import FinishElement from "./FinishElement";
import UserElement from "./UserElement";
import TovinElement from "./TovinElement";
import classes from "./NavBar.module.css";

const navbar = props => (
  <div className={classes.NavBar}>
    <FinishElement step={props.step} />
    <TovinElement step={props.step} />
    <UserElement step={props.step} />
  </div>
);

export default navbar;
