import React from "react";
import { Select } from "@material-ui/core";
import classes from "./AddItem.module.css";
import QuestionMarkIcon from "../../../assets/images/QuestionMarkIcon.png";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import MenuItem from "@material-ui/core/MenuItem";
import RowComponent from "../../General/RowComponent/RowComponent";
import matchSorter from "match-sorter";

const filterOptions = (options, { inputValue }) => {
  if (inputValue.length > 1) {
    return matchSorter(options, inputValue, {
      keys: [
        "molecularFormula",
        "casNumber",
        "id",
        "inventoryName",
        "inventoryNumber"
      ]
    });
  }
  return [];
};

const additem = props => (
  <div className={classes.Container}>
    <table className={classes.Table}>
      <thead>
        <tr>
          <th className={classes.BoxHeader}>פרטי הפריט</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            שם הפריט
            <img
              className={classes.QuestionMarkIcon}
              src={QuestionMarkIcon}
              alt="icon"
            />
          </th>
          <th>קטגוריה</th>
        </tr>
        <tr>
          <th>
            <input
              name="itemName"
              onChange={data => props.saveDetails(data)}
              className={classes.InputBox}
              value={props.itemName}
            />
            {!props.itemName && props.failed ? (
              <div className={classes.PleaseFill}>
                *אנא מלא את הפרטים כראוי*
              </div>
            ) : (
              ""
            )}
          </th>
          <th>
            <Select
              disableUnderline
              className={classes.SelectBox}
              name="itemCategory"
              onChange={data => props.saveDetails(data)}
              value={props.itemCategory ? props.itemCategory : ""}
            >
              {props.categories.map(element => {
                return (
                  <MenuItem key={element.id} value={element.title}>
                    {element.title}
                  </MenuItem>
                );
              })}
            </Select>
            {!props.itemCategory && props.failed ? (
              <div className={classes.PleaseFill}>
                *אנא מלא את הפרטים כראוי*
              </div>
            ) : (
              ""
            )}
          </th>
        </tr>
        <tr>
          <th>
            ייעוד הפריט
            <img
              className={classes.QuestionMarkIcon}
              src={QuestionMarkIcon}
              alt="icon"
            />
          </th>
          <th>כמות מבוקשת (ספרות בלבד)</th>
        </tr>
        <tr>
          <th>
            <input
              name="itemDestiny"
              onChange={data => props.saveDetails(data)}
              className={classes.InputBox}
              value={props.itemDestiny}
            />
            {!props.itemDestiny && props.failed ? (
              <div className={classes.PleaseFill}>
                *אנא מלא את הפרטים כראוי*
              </div>
            ) : (
              ""
            )}
          </th>
          <th>
            <input
              name="itemAmount"
              onChange={data => props.saveDetails(data)}
              className={classes.MiniInputBox}
              value={props.itemAmount}
            />

            <Select
              name="itemUnit"
              onChange={data => props.saveDetails(data)}
              disableUnderline
              className={classes.MiniSelectBox}
              value={props.itemUnit ? props.itemUnit : ""}
            >
              {props.unitMeasures.map(element => {
                return (
                  <MenuItem key={element.id} value={element.title}>
                    {element.title}
                  </MenuItem>
                );
              })}
            </Select>
            {(!props.itemUnit || !props.itemAmount) && props.failed ? (
              <div className={classes.PleaseFillFix}>
                *אנא מלא את הכמות המבוקשת ואת מידתם*
              </div>
            ) : (
              ""
            )}
          </th>
        </tr>
        <tr className={classes.EmptyTr}></tr>

        <tr className={classes.EmptyTr}></tr>
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
          <RowComponent delete={props.delete} key={comp.id} data={comp} />
        ))}
        {props.selectedIngredients.length < 1 && props.failed ? (
          <div className={classes.PleaseFillFix}>
            *אנא בחר לפחות רכיב אחד (צריך להזין לפחות 2 אותיות)*
          </div>
        ) : (
          ""
        )}
      </tbody>
    </table>
    <div className={classes.AddComponent}>
      <div>
        הוספת מרכיב לפי שם פורמולה או מספר CAS
        <img
          className={classes.QuestionMarkIcon}
          src={QuestionMarkIcon}
          alt="icon"
        />
      </div>
      <div>
        <Autocomplete
          options={props.ingredients}
          getOptionLabel={option => option.inventoryName}
          onChange={(event, value) => props.change(value)}
          id="auto-complete"
          className={classes.SearchInput}
          filterOptions={filterOptions}
          disableOpenOnFocus
          renderInput={params => (
            <TextField
              {...params}
              placeholder="הקלידו כדי לחפש ובחרו מהתוצאות המוצעות"
              margin="normal"
            />
          )}
        />
      </div>
    </div>
  </div>
);

export default additem;
