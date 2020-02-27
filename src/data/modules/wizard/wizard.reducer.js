import get from "lodash/get";

import {
  GET_INGREDIENTS_SUCCESS,
  GET_CATEGORIES_SUCCESS,
  GET_UNITS_SUCCESS,
  SAVE_SUPPLIER_NAME,
  SAVE_SUPPLIER_SOURCE,
  SAVE_SUPPLIER_PRIVATE_COMPANY_NAME,
  SAVE_CONTACT_EMAIL,
  SAVE_CONTACT_EXTRA_PHONE,
  SAVE_CONTACT_FAX,
  SAVE_CONTACT_FULL_NAME,
  SAVE_CONTACT_ID,
  SAVE_CONTACT_PHONE,
  SAVE_FIRST_STEP_COMPLETE,
  SAVE_SELECTED_INGREDIENTS,
  SAVE_ITEM_AMOUNT,
  SAVE_ITEM_CATEGORY,
  SAVE_ITEM_DESTINY,
  SAVE_ITEM_NAME,
  SAVE_ITEM_UNIT,
  SAVE_SECOND_STEP_COMPLETE,
  SAVE_CURRENT_STEP,
  GET_ORIGINS_SUCCESS
} from "./wizard.types";

const defaultState = {
  firstStepComplete: false,
  secondStepComplete: false,
  currentStep: 1,
  supplierName: "",
  supplierPrivateCompanyNumber: "",
  supplierSource: "",
  contactFullName: "",
  contactId: "",
  contactEmail: "",
  contactPhone: "",
  contactExtraPhone: "",
  contactFax: "",
  itemName: "",
  itemCategory: "",
  itemDestiny: "",
  itemAmount: "",
  itemUnit: "",
  ingredients: [],
  unitMeasures: [],
  categories: [],
  passages: [],
  origins: [],
  selectedIngredients: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_SUCCESS: {
      return Object.assign({}, state, {
        ingredients: get(action.payload, "data")
      });
    }
    case GET_CATEGORIES_SUCCESS: {
      return Object.assign({}, state, {
        categories: get(action.payload, "data")
      });
    }
    case GET_UNITS_SUCCESS: {
      return Object.assign({}, state, {
        unitMeasures: get(action.payload, "data")
      });
    }
    case GET_ORIGINS_SUCCESS: {
      return Object.assign({}, state, {
        origins: get(action.payload, "data")
      });
    }

    case SAVE_SUPPLIER_NAME: {
      return Object.assign({}, state, {
        supplierName: action.payload
      });
    }

    case SAVE_SUPPLIER_SOURCE: {
      return Object.assign({}, state, {
        supplierSource: action.payload
      });
    }
    case SAVE_SUPPLIER_PRIVATE_COMPANY_NAME: {
      return Object.assign({}, state, {
        supplierPrivateCompanyNumber: action.payload
      });
    }

    case SAVE_CONTACT_FULL_NAME: {
      return Object.assign({}, state, {
        contactFullName: action.payload
      });
    }
    case SAVE_CONTACT_ID: {
      return Object.assign({}, state, {
        contactId: action.payload
      });
    }
    case SAVE_CONTACT_EMAIL: {
      return Object.assign({}, state, {
        contactEmail: action.payload
      });
    }
    case SAVE_CONTACT_PHONE: {
      return Object.assign({}, state, {
        contactPhone: action.payload
      });
    }
    case SAVE_CONTACT_EXTRA_PHONE: {
      return Object.assign({}, state, {
        contactExtraPhone: action.payload
      });
    }
    case SAVE_CONTACT_FAX: {
      return Object.assign({}, state, {
        contactFax: action.payload
      });
    }
    case SAVE_FIRST_STEP_COMPLETE: {
      return Object.assign({}, state, {
        firstStepComplete: action.payload
      });
    }
    case SAVE_SECOND_STEP_COMPLETE: {
      return Object.assign({}, state, {
        secondStepComplete: action.payload
      });
    }
    case SAVE_CURRENT_STEP: {
      return Object.assign({}, state, {
        currentStep: action.payload
      });
    }
    case SAVE_SELECTED_INGREDIENTS: {
      return Object.assign({}, state, {
        selectedIngredients: action.payload
      });
    }

    case SAVE_ITEM_NAME: {
      return Object.assign({}, state, {
        itemName: action.payload
      });
    }
    case SAVE_ITEM_CATEGORY: {
      return Object.assign({}, state, {
        itemCategory: action.payload
      });
    }
    case SAVE_ITEM_DESTINY: {
      return Object.assign({}, state, {
        itemDestiny: action.payload
      });
    }
    case SAVE_ITEM_AMOUNT: {
      return Object.assign({}, state, {
        itemAmount: action.payload
      });
    }
    case SAVE_ITEM_UNIT: {
      return Object.assign({}, state, {
        itemUnit: action.payload
      });
    }

    default:
      return state;
  }
};
