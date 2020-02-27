import React, { Component } from "react";
import classes from "./FirstStep.module.css";
import SupplierDetails from "../../components/FirstStep/SupplierDetails/SupplierDetails";
import ContactDetails from "../../components/FirstStep/ContactDetails/ContactDetails";
import ContinueButton from "../../components/General/ContinueButton/ContinueButton";
import { wizardSelector } from "../../data/modules/wizard/wizard.selectors";
import {
  getIngredientsAction,
  getOriginsAction,
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
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class FirstStep extends Component {
  constructor(props) {
    super(props);
  }
  state = { inputFaileds: false };

  componentDidMount() {
    this.props.getOriginsAction();
    this.isFirstStepComplete();
  }

  handleDetails = async data => {
    let value = data.target.value;
    switch (data.target.name) {
      case "supplierName":
        {
          await this.props.saveSupplierName(value);
          localStorage.setItem("supplierNameNGSoft", value);
        }
        break;
      case "supplierSource":
        {
          await this.props.saveSupplierSource(value);
          localStorage.setItem("supplierSourceNGSoft", value);
        }
        break;
      case "supplierPrivateCompanyNumber":
        {
          await this.props.saveSupplierPrivateCompanyNumber(value);
          localStorage.setItem("supplierPrivateCompanyNumberNGSoft", value);
        }
        break;
      case "contactFullName":
        {
          await this.props.saveContactFullName(value);
          localStorage.setItem("contactFullNameNGSoft", value);
        }
        break;
      case "contactId":
        {
          await this.props.saveContactId(value);
          localStorage.setItem("contactIdNGSoft", value);
        }
        break;
      case "contactEmail":
        {
          await this.props.saveContactEmail(value);

          localStorage.setItem("contactEmailNGSoft", value);
        }
        break;
      case "contactPhone":
        {
          await this.props.saveContactPhone(value);
          localStorage.setItem("contactPhoneNGSoft", value);
        }
        break;
      case "contactExtraPhone":
        {
          await this.props.saveContactExtraPhone(value);
          localStorage.setItem("contactExtraPhoneNGSoft", value);
        }
        break;
      case "contactFax":
        {
          await this.props.saveContactFax(value);
          localStorage.setItem("contactFaxNGSoft", value);
        }
        break;
      default:
        return;
    }

    this.isFirstStepComplete();
  };

  isValidateEmail = mail => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };

  isValidIsraeliID(id) {
    let idx = String(id).trim();
    if (idx.length > 9 || idx.length < 5 || isNaN(idx)) return false;

    // Pad string with zeros up to 9 digits
    idx = idx.length < 9 ? ("00000000" + idx).slice(-9) : idx;

    return (
      Array.from(idx, Number).reduce((counter, digit, i) => {
        const step = digit * ((i % 2) + 1);
        return counter + (step > 9 ? step - 9 : step);
      }) %
        10 ===
      0
    );
  }

  isValidPhoneNumber = phoneNumber => {
    if (!!phoneNumber) {
      var phoneno = /^\d{10}$/;
      if (phoneNumber.match(phoneno)) {
        return true;
      } else {
        return false;
      }
    }
  };

  isFirstStepComplete = async () => {
    if (
      this.props.wizard.supplierName ||
      (localStorage.getItem("supplierNameNGSoft") &&
        this.props.wizard.supplierSource) ||
      (localStorage.getItem("supplierSourceNGSoft") &&
        this.props.wizard.supplierPrivateCompanyNumber) ||
      (localStorage.getItem("supplierPrivateCompanyNumberNGSoft") &&
        this.props.wizard.contactFullName) ||
      (localStorage.getItem("contactFullNameNGSoft") &&
        this.isValidIsraeliID(this.props.wizard.contactId)) ||
      (this.isValidIsraeliID(localStorage.getItem("contactIdNGSoft")) &&
        this.isValidateEmail(this.props.wizard.contactEmail)) ||
      (this.isValidateEmail(localStorage.getItem("contactEmailNGSoft")) &&
        this.isValidPhoneNumber(this.props.wizard.contactPhone)) ||
      this.isValidPhoneNumber(localStorage.getItem("contactPhoneNGSoft"))
    ) {
      this.props.saveFirstStepComplete(true);
      localStorage.setItem("firstStepCompleteNGSoft", true);
    } else {
      if (this.props.wizard.firstStepComplete) {
        this.props.saveFirstStepComplete(false);
        localStorage.setItem("firstStepCompleteNGSoft", false);
      }
    }
  };
  handleFakeContinueBtn = () => {
    this.setState({
      inputFaileds: true
    });
  };

  render() {
    let continueBtn = this.props.wizard.firstStepComplete ? (
      <Link to="/2">
        <ContinueButton />
      </Link>
    ) : (
      <ContinueButton clickFakeContinueBtn={this.handleFakeContinueBtn} />
    );
    return (
      <div className={classes.Container}>
        <div className={classes.Header}>פרטי המבקש</div>
        <div className={classes.Box}>
          <SupplierDetails
            failed={this.state.inputFaileds}
            saveDetails={this.handleDetails}
            origins={this.props.wizard.origins}
            supplierName={this.props.wizard.supplierName}
            supplierSource={this.props.wizard.supplierSource}
            supplierPrivateCompanyNumber={
              this.props.wizard.supplierPrivateCompanyNumber
            }
          />
          <ContactDetails
            failed={this.state.inputFaileds}
            isValidPhoneNumber={this.isValidPhoneNumber}
            isValidateEmail={this.isValidateEmail}
            isValidIsraeliID={this.isValidIsraeliID}
            saveDetails={this.handleDetails}
            contactEmail={this.props.wizard.contactEmail}
            contactFax={this.props.wizard.contactFax}
            contactFullName={this.props.wizard.contactFullName}
            contactId={this.props.wizard.contactId}
            contactPhone={this.props.wizard.contactPhone}
            contactExtraPhone={this.props.wizard.contactExtraPhone}
          />
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
  saveSupplierName,
  saveFirstStepComplete,
  saveSupplierSource,
  saveSupplierPrivateCompanyNumber,
  saveContactEmail,
  saveContactFullName,
  saveContactId,
  saveContactPhone,
  saveContactExtraPhone,
  saveContactFax,
  getOriginsAction
};
export default connect(
  finalSelector,
  mapDispatchToProps
)(FirstStep);
