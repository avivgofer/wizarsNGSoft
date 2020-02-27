import React, { Component } from "react";
import classes from "./Summary.module.css";
import BackButton from "../../components/General/BackButton/BackButton";
import ContinueButton from "../../components/General/ContinueButton/ContinueButton";
import AskerDetails from "../../components/Summary/AskerDetails/AskerDetails";
import StuffDetails from "../../components/Summary//StuffDetails/StuffDetails";
import { wizardSelector } from "../../data/modules/wizard/wizard.selectors";
import { saveCurrentStep } from "../../data/modules/wizard/wizard.actions";

import { createSelector } from "reselect";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Summary extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  componentWillMount() {
    this.props.saveCurrentStep(window.location.pathname.split("/")[1]);
  }

  componentDidMount() {}

  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.Box}>
          <AskerDetails
            supplierName={this.props.wizard.supplierName}
            supplierPrivateCompanyNumber={
              this.props.wizard.supplierPrivateCompanyNumber
            }
            supplierSource={this.props.wizard.supplierSource}
            contactId={this.props.wizard.contactId}
            contactEmail={this.props.wizard.contactEmail}
            contactPhone={this.props.wizard.contactPhone}
            contactExtraPhone={this.props.wizard.contactExtraPhone}
            contactFax={this.props.wizard.contactFax}
            contactFullName={this.props.wizard.contactFullName}
          />
          <StuffDetails
            itemName={this.props.wizard.itemName}
            itemCategory={this.props.wizard.itemCategory}
            itemDestiny={this.props.wizard.itemDestiny}
            itemAmount={this.props.wizard.itemAmount}
            itemUnit={this.props.wizard.itemUnit}
            selectedIngredients={this.props.wizard.selectedIngredients}
          />
          <Link to="/2">
            <BackButton />
          </Link>

          <ContinueButton text={"סיום"} />
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

const mapDispatchToProps = { saveCurrentStep };
export default connect(
  finalSelector,
  mapDispatchToProps
)(Summary);
