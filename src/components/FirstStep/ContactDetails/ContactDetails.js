import React from "react";
import classes from "./ContactDetails.module.css";
import QuestionMarkIcon from "../../../assets/images/QuestionMarkIcon.png";

const contactdetails = props => (
  <table className={classes.Table}>
    <thead>
      <tr>
        <th className={classes.BoxHeader}>פרטי איש קשר וחברה</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>שם מלא</th>
        <th>ת״ז</th>
      </tr>
      <tr>
        <th>
          <input
            name="contactFullName"
            onChange={data => props.saveDetails(data)}
            className={classes.InputBox}
            value={props.contactFullName}
          />
          {!props.contactFullName && props.failed ? (
            <div className={classes.PleaseFill}>*אנא מלא את הפרטים כראוי*</div>
          ) : (
            ""
          )}
        </th>
        <th>
          <input
            name="contactId"
            onChange={data => props.saveDetails(data)}
            className={classes.InputBox}
            value={props.contactId}
          />
          {!props.isValidIsraeliID(props.contactId) && props.failed ? (
            <div className={classes.PleaseFill}>*אנא מלא את הפרטים כראוי*</div>
          ) : (
            ""
          )}
        </th>
      </tr>
      <tr>
        <th>
          כתובת דוא״ל
          <img
            className={classes.QuestionMarkIcon}
            alt="icon"
            src={QuestionMarkIcon}
          />
        </th>
        <th>מספר טלפון נייד</th>
      </tr>
      <tr>
        <th>
          <input
            name="contactEmail"
            onChange={data => props.saveDetails(data)}
            className={classes.InputBox}
            value={props.contactEmail}
          />
          {!props.isValidateEmail(props.contactEmail) && props.failed ? (
            <div className={classes.PleaseFill}>*אנא מלא את הפרטים כראוי*</div>
          ) : (
            ""
          )}
        </th>
        <th>
          <input
            name="contactPhone"
            onChange={data => props.saveDetails(data)}
            className={classes.InputBox}
            value={props.contactPhone}
          />
          {!props.isValidPhoneNumber(props.contactPhone) && props.failed ? (
            <div className={classes.PleaseFill}>*אנא מלא את הפרטים כראוי*</div>
          ) : (
            ""
          )}
        </th>
      </tr>
      <tr>
        <th>מספר טלפון נוסף (אופציונלי)</th>
        <th>מספר פקס (אופציונלי) </th>
      </tr>
      <tr>
        <th>
          <input
            name="contactExtraPhone"
            onChange={data => props.saveDetails(data)}
            className={classes.InputBox}
            value={props.contactExtraPhone}
          />
        </th>
        <th>
          <input
            name="contactFax"
            onChange={data => props.saveDetails(data)}
            className={classes.InputBox}
            value={props.contactFax}
          />
        </th>
      </tr>
      <tr className={classes.EmptyTr}></tr>
    </tbody>
  </table>
);

export default contactdetails;
