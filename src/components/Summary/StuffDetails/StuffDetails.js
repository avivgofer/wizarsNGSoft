import React from "react";
import classes from "./StuffDetails.module.css";
import RowComponent from "../../General/RowComponent/RowComponent";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const stuffdetails = props => (
  <div className={classes.Container}>
    <table className={classes.Table}>
      <thead>
        <tr>
          <th className={classes.BoxHeader}>פרטי החומרים</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            שם הפריט:
            <span>{props.itemName}</span>
          </th>
          <th>
            {" "}
            קטגוריה: <span>{props.itemCategory}</span>
            <Link to="/2">
              {" "}
              <Button
                className={classes.EditBtn}
                variant="outlined"
                color="primary"
              >
                עריכה
              </Button>
            </Link>
          </th>
        </tr>
        <tr>
          <th>
            {" "}
            ייעוד הפריט: <span>{props.itemDestiny}</span>
          </th>
          <th>
            {" "}
            כמות מבוקשת: <span>{props.itemAmount + " " + props.itemUnit}</span>
          </th>
        </tr>
      </tbody>
    </table>
    <table className={classes.Table}>
      <thead>
        <tr>
          <th className={classes.BoxHeader}>רשימת מרכיבים</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th style={{ width: "40%" }}>שם המרכיב</th>
          <th>פורמולה</th>
          <th>מספר CAS</th>
          <th>מספר ממציא</th>
        </tr>
        {props.selectedIngredients.map(comp => (
          <RowComponent key={comp.id} data={comp} />
        ))}
      </tbody>
    </table>
  </div>
);

export default stuffdetails;
