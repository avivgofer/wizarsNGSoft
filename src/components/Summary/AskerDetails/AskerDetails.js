import React from "react";
import classes from "./AskerDetails.module.css";
import SummaryLine from "../../../assets/images/SummaryLine.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import get from "lodash/get";

const askerdetails = props => (
  <table className={classes.Table}>
    <thead>
      <tr>
        <th className={classes.BoxHeader}>פרטי המבקש</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>
          שם הספק:
          <span>{props.supplierName}</span>
        </th>
        <th>
          {" "}
          מספר ח״פ: <span>{props.supplierPrivateCompanyNumber}</span>
          <Link to="/1">
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
          מקור הטובין:{" "}
          <span>
            {get(props.supplierSource, "title", props.supplierSource)}
          </span>
        </th>
        <th></th>
      </tr>
      <tr className={classes.EmptyTr}>
        <th>
          <img className={classes.LineImg} src={SummaryLine} alt="line"></img>
        </th>
        <th>
          <img className={classes.LineImg} src={SummaryLine} alt="line"></img>
        </th>
      </tr>
      <tr>
        <th>
          {" "}
          שם איש קשר: <span>{props.contactFullName}</span>
        </th>
        <th>
          {" "}
          מספר תעודת זהות: <span>{props.contactId}</span>
        </th>
      </tr>
      <tr>
        <th>
          {" "}
          כתובת דוא״ל: <span>{props.contactEmail}</span>
        </th>
        <th>
          {" "}
          מספר טלפון נייד: <span>{props.contactPhone}</span>
        </th>
      </tr>
      <tr>
        <th>
          {" "}
          מספר טלפון נוסף אופציונלי: <span>{props.contactExtraPhone}</span>
        </th>
        <th>
          {" "}
          מספר פקס אופציונלי: <span>{props.contactFax}</span>
        </th>
      </tr>
      <tr className={classes.EmptyTr}></tr>
    </tbody>
  </table>
);

export default askerdetails;
