import React, { Component } from "react";
import classes from "./Layout.module.css";
import NavBar from "../../components/NavBar/NavBar";
import { wizardSelector } from "../../data/modules/wizard/wizard.selectors";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import FirstStep from "../../containers/FirstStep/FirstStep";
import SecondStep from "../../containers/SecondStep/SecondStep";
import Summary from "../../containers/Summary/Summary";
import {
  saveSelectedIngredients,
  saveSecondStepComplete,
  saveItemAmount,
  saveItemCategory,
  saveItemDestiny,
  saveItemName,
  saveItemUnit,
  saveCurrentStep,
  saveSupplierName,
  saveSupplierSource,
  saveSupplierPrivateCompanyNumber,
  saveContactFullName,
  saveContactId,
  saveContactEmail,
  saveContactExtraPhone,
  saveContactFax,
  saveContactPhone,
  saveFirstStepComplete
} from "../../data/modules/wizard/wizard.actions";
class Layout extends Component {
  state = {};

  componentDidMount() {
    this.loadLocalStorage();
  }

  loadLocalStorage = async () => {
    if (localStorage.getItem("supplierNameNGSoft")) {
      await this.props.saveSupplierName(
        localStorage.getItem("supplierNameNGSoft")
      );
    }
    if (localStorage.getItem("supplierSourceNGSoft")) {
      await this.props.saveSupplierSource(
        localStorage.getItem("supplierSourceNGSoft")
      );
    }
    if (localStorage.getItem("supplierPrivateCompanyNumberNGSoft")) {
      await this.props.saveSupplierPrivateCompanyNumber(
        localStorage.getItem("supplierPrivateCompanyNumberNGSoft")
      );
    }
    if (localStorage.getItem("contactFullNameNGSoft")) {
      await this.props.saveContactFullName(
        localStorage.getItem("contactFullNameNGSoft")
      );
    }
    if (localStorage.getItem("contactIdNGSoft")) {
      await this.props.saveContactId(localStorage.getItem("contactIdNGSoft"));
    }
    if (localStorage.getItem("contactEmailNGSoft")) {
      await this.props.saveContactEmail(
        localStorage.getItem("contactEmailNGSoft")
      );
    }
    if (localStorage.getItem("contactPhoneNGSoft")) {
      await this.props.saveContactPhone(
        localStorage.getItem("contactPhoneNGSoft")
      );
    }
    if (localStorage.getItem("contactExtraPhoneNGSoft")) {
      await this.props.saveContactExtraPhone(
        localStorage.getItem("contactExtraPhoneNGSoft")
      );
    }
    if (localStorage.getItem("contactFaxNGSoft")) {
      await this.props.saveContactFax(localStorage.getItem("contactFaxNGSoft"));
    }
    if (localStorage.getItem("itemNameNGSoft")) {
      await this.props.saveItemName(localStorage.getItem("itemNameNGSoft"));
    }
    if (localStorage.getItem("itemCategoryNGSoft")) {
      await this.props.saveItemCategory(
        localStorage.getItem("itemCategoryNGSoft")
      );
    }
    if (localStorage.getItem("itemAmountNGSoft")) {
      await this.props.saveItemAmount(localStorage.getItem("itemAmountNGSoft"));
    }
    if (localStorage.getItem("itemDestinyNGSoft")) {
      await this.props.saveItemDestiny(
        localStorage.getItem("itemDestinyNGSoft")
      );
    }
    if (localStorage.getItem("itemUnitNGSoft")) {
      await this.props.saveItemUnit(localStorage.getItem("itemUnitNGSoft"));
    }
    if (localStorage.getItem("selectedIngredientsNGSoft")) {
      await this.props.saveSelectedIngredients(
        JSON.parse(localStorage.getItem("selectedIngredientsNGSoft"))
      );
    }
  };

  render() {
    return (
      <div className={classes.Page}>
        <h1>טופס איכות הסביבה</h1>
        <NavBar step={Number(this.props.wizard.currentStep)} />
        <main className={classes.Content}>
          <BrowserRouter>
            <Switch>
              <Route path="/1" component={FirstStep} />
              <Route
                path="/2"
                exact
                component={
                  this.props.wizard.firstStepComplete ||
                  localStorage.getItem("firstStepCompleteNGSoft")
                    ? SecondStep
                    : ""
                }
              />
              <Route
                path="/3"
                component={
                  this.props.wizard.firstStepComplete ||
                  (localStorage.getItem("firstStepCompleteNGSoft") &&
                    this.props.wizard.secondStepComplete) ||
                  localStorage.getItem("secondStepCompleteNGSoft")
                    ? Summary
                    : ""
                }
              />
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

const finalSelector = createSelector(
  wizardSelector,
  wizardSelector => {
    return {
      wizard: wizardSelector
    };
  }
);

const mapDispatchToProps = {
  saveSelectedIngredients,
  saveSecondStepComplete,
  saveItemAmount,
  saveItemCategory,
  saveItemDestiny,
  saveItemName,
  saveItemUnit,
  saveCurrentStep,
  saveSupplierName,
  saveSupplierSource,
  saveSupplierPrivateCompanyNumber,
  saveContactFullName,
  saveContactId,
  saveContactEmail,
  saveContactExtraPhone,
  saveContactFax,
  saveContactPhone,
  saveFirstStepComplete
};

export default connect(
  finalSelector,
  mapDispatchToProps
)(Layout);
