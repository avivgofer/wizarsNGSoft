import React from "react";
import { Select } from "@material-ui/core";
import classes from "./SupplierDetails.module.css";
import MenuItem from "@material-ui/core/MenuItem";

const supplierdetails = props => (
  <table className={classes.Table}>
    <thead>
      <tr>
        <th className={classes.BoxHeader}>פרטי הספק</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>שם הספק</th>
        <th>מקור הטובין</th>
      </tr>
      <tr>
        <th>
          <input
            required
            name="supplierName"
            onChange={data => props.saveDetails(data)}
            className={classes.InputBox}
            value={props.supplierName}
          />
          {!props.supplierName && props.failed ? (
            <div className={classes.PleaseFill}>*אנא מלא את הפרטים כראוי*</div>
          ) : (
            ""
          )}
        </th>
        <th>
          <Select
            required
            name="supplierSource"
            onChange={data => props.saveDetails(data)}
            disableUnderline
            className={classes.SelectBox}
            value={props.supplierSource ? props.supplierSource : ""}
          >
            {props.origins.map(element => {
              return (
                <MenuItem value={element.title} key={element.id}>
                  {element.title}
                </MenuItem>
              );
            })}
          </Select>
          {!props.supplierSource && props.failed ? (
            <div className={classes.PleaseFill}>*אנא מלא את הפרטים כראוי*</div>
          ) : (
            ""
          )}
        </th>
      </tr>
      <tr>
        <th>מספר הח״פ</th>
      </tr>
      <tr>
        <th>
          <input
            required
            name="supplierPrivateCompanyNumber"
            onChange={data => props.saveDetails(data)}
            className={classes.InputBox}
            value={props.supplierPrivateCompanyNumber}
          />
          {!props.supplierPrivateCompanyNumber && props.failed ? (
            <div className={classes.PleaseFill}>*אנא מלא את הפרטים כראוי*</div>
          ) : (
            ""
          )}
        </th>
      </tr>
      <tr className={classes.EmptyTr}></tr>
    </tbody>
  </table>
);

export default supplierdetails;
