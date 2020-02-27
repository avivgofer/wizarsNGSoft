import React, { Component } from "react";
import classes from "../FirstStep/FirstStep.module.css";

import BackButton from "../../components/General/BackButton/BackButton";
import ContinueButton from "../../components/General/ContinueButton/ContinueButton";
import AddItem from "../../components/SecondStep/AddItem/AddItem";
import {
  getIngredientsAction,
  getCategoriesAction,
  getUnitsAction,
  saveSelectedIngredients,
  saveSecondStepComplete,
  saveItemAmount,
  saveItemCategory,
  saveItemDestiny,
  saveItemName,
  saveItemUnit,
  saveCurrentStep
} from "../../data/modules/wizard/wizard.actions";
import { createSelector } from "reselect";
import { wizardSelector } from "../../data/modules/wizard/wizard.selectors";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class SecondStep extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selectedIngredients: [],
    inputFaileds: false
  };

  componentWillMount() {
    let step = window.location.pathname.split("/")[1];
    this.props.saveCurrentStep(step);
    localStorage.setItem("currentStepNGSoft", step);
  }

  componentDidMount() {
    this.props.getIngredientsAction();
    this.props.getCategoriesAction();
    this.props.getUnitsAction();
    this.isSecondStepComplete();
  }

  handleChange = value => {
    let selectedIngredients = this.props.wizard.selectedIngredients;
    selectedIngredients.push(value);
    this.props.saveSelectedIngredients(selectedIngredients);
    localStorage.setItem(
      "selectedIngredientsNGSoft",
      JSON.stringify(selectedIngredients)
    );
  };

  handleDelete = id => {
    let filterselectedIngredients = this.props.wizard.selectedIngredients.filter(
      comp => comp.id !== id
    );
    this.props.saveSelectedIngredients(filterselectedIngredients);
    localStorage.setItem(
      "selectedIngredientsNGSoft",
      JSON.stringify(filterselectedIngredients)
    );
  };

  handleDetails = async data => {
    let value = data.target.value;
    switch (data.target.name) {
      case "itemName":
        {
          await this.props.saveItemName(value);
          localStorage.setItem("itemNameNGSoft", value);
        }
        break;
      case "itemDestiny":
        {
          await this.props.saveItemDestiny(value);
          localStorage.setItem("itemDestinyNGSoft", value);
        }
        break;
      case "itemCategory":
        {
          await this.props.saveItemCategory(value);
          localStorage.setItem("itemCategoryNGSoft", value);
        }
        break;
      case "itemAmount":
        {
          await this.props.saveItemAmount(value);
          localStorage.setItem("itemAmountNGSoft", value);
        }
        break;
      case "itemUnit":
        {
          await this.props.saveItemUnit(value);
          localStorage.setItem("itemUnitNGSoft", value);
        }
        break;
    }

    this.isSecondStepComplete();
  };

  isSecondStepComplete = () => {
    if (
      this.props.wizard.itemName ||
      (localStorage.getItem("itemNameNGSoft") &&
        this.props.wizard.itemCategory) ||
      (localStorage.getItem("itemCategoryNGSoft") &&
        this.props.wizard.itemDestiny) ||
      (localStorage.getItem("itemDestinyNGSoft") &&
        this.props.wizard.itemAmount) ||
      (localStorage.getItem("itemAmountNGSoft") &&
        this.props.wizard.itemUnit) ||
      localStorage.getItem("itemUnitNGSoft")
    ) {
      this.props.saveSecondStepComplete(true);
      localStorage.setItem("secondStepCompleteNGSoft", true);
    } else {
      if (this.props.wizard.SecondStepComplete) {
        this.props.saveSecondStepComplete(false);
        localStorage.setItem("secondStepCompleteNGSoft", false);
      }
    }
  };

  handleFakeContinueBtn = () => {
    this.setState({
      inputFaileds: true
    });
  };

  render() {
    let continueBtn = this.props.wizard.secondStepComplete ? (
      <Link to="/3">
        <ContinueButton />
      </Link>
    ) : (
      <ContinueButton clickFakeContinueBtn={this.handleFakeContinueBtn} />
    );
    return (
      <div className={classes.Container}>
        <div className={classes.Header}>פרטי החומרים המבוקשים</div>
        <div className={classes.Box}>
          <AddItem
            failed={this.state.inputFaileds}
            itemNumber={1}
            selectedIngredients={this.props.wizard.selectedIngredients}
            change={this.handleChange}
            autoCompleteOnChange={this.handleAutoCompleteOnChange}
            autoCompleteText={this.state.autoComoleteText}
            delete={this.handleDelete}
            ingredients={this.props.wizard.ingredients}
            categories={this.props.wizard.categories}
            unitMeasures={this.props.wizard.unitMeasures}
            saveDetails={this.handleDetails}
            itemName={this.props.wizard.itemName}
            itemCategory={this.props.wizard.itemCategory}
            itemDestiny={this.props.wizard.itemDestiny}
            itemAmount={this.props.wizard.itemAmount}
            itemUnit={this.props.wizard.itemUnit}
          />

          <Link to="/1" onClick={() => this.props.saveCurrentStep(1)}>
            <BackButton />
          </Link>

          {continueBtn}
        </div>
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
  getIngredientsAction,
  getCategoriesAction,
  getUnitsAction,
  saveSelectedIngredients,
  saveSecondStepComplete,
  saveItemAmount,
  saveItemCategory,
  saveItemDestiny,
  saveItemName,
  saveItemUnit,
  saveCurrentStep
};
export default connect(
  finalSelector,
  mapDispatchToProps
)(SecondStep);
