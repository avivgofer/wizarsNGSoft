import React from "react";
import classes from "./RowComponent.module.css";
import Aux from "../../../hoc/Aux/Aux";
import DeleteIcon from "../../../assets/images/DeleteIcon.png";

const rowcomponent = props => (
  <Aux>
    <tr style={{ height: "4px" }}>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <th>
        {props.delete ? (
          <img
            alt="icon"
            src={DeleteIcon}
            className={classes.DeleteImg}
            onClick={() => props.delete(props.data.id)}
          ></img>
        ) : (
          ""
        )}

        {props.data.inventoryName}
      </th>
      <th>{props.data.molecularFormula}</th>
      <th>{props.data.casNumber}</th>
      <th>{props.data.inventoryNumber}</th>
    </tr>
  </Aux>
);

export default rowcomponent;
