import {
  getIngredients,
  getCategories,
  getUnits,
  getOrigins
} from "./wizard.service";
import {
  GET_INGREDIENTS_START,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
  GET_CATEGORIES_START,
  GET_ORIGINS_FAILED,
  GET_ORIGINS_START,
  GET_ORIGINS_SUCCESS,
  GET_UNITS_FAILED,
  GET_UNITS_START,
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
  SAVE_CURRENT_STEP
} from "./wizard.types";

export const getIngredientsAction = () => dispatch => {
  const promise = getIngredients();
  dispatch({
    type: [
      GET_INGREDIENTS_START,
      GET_INGREDIENTS_SUCCESS,
      GET_INGREDIENTS_FAILED
    ],
    payload: promise
  });
  return promise;
};

export const getCategoriesAction = () => dispatch => {
  const promise = getCategories();
  dispatch({
    type: [GET_CATEGORIES_START, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILED],
    payload: promise
  });
  return promise;
};

export const getUnitsAction = () => dispatch => {
  const promise = getUnits();
  dispatch({
    type: [GET_UNITS_START, GET_UNITS_SUCCESS, GET_UNITS_FAILED],
    payload: promise
  });
  return promise;
};

export const getOriginsAction = () => dispatch => {
  const promise = getOrigins();
  dispatch({
    type: [GET_ORIGINS_START, GET_ORIGINS_SUCCESS, GET_ORIGINS_FAILED],
    payload: promise
  });
  return promise;
};

export const saveFirstStepComplete = firstStepComplete => dispatch => {
  dispatch({
    type: SAVE_FIRST_STEP_COMPLETE,
    payload: firstStepComplete
  });
};
export const saveSecondStepComplete = secondStepComplete => dispatch => {
  dispatch({
    type: SAVE_SECOND_STEP_COMPLETE,
    payload: secondStepComplete
  });
};
export const saveCurrentStep = currentStep => dispatch => {
  dispatch({
    type: SAVE_CURRENT_STEP,
    payload: currentStep
  });
};
export const saveSupplierName = supplierName => dispatch => {
  dispatch({
    type: SAVE_SUPPLIER_NAME,
    payload: supplierName
  });
};

export const saveSupplierSource = supplierSource => dispatch => {
  dispatch({
    type: SAVE_SUPPLIER_SOURCE,
    payload: supplierSource
  });
};
export const saveSupplierPrivateCompanyNumber = supplierPrivateCompanyNumber => dispatch => {
  dispatch({
    type: SAVE_SUPPLIER_PRIVATE_COMPANY_NAME,
    payload: supplierPrivateCompanyNumber
  });
};

export const saveContactId = contactId => dispatch => {
  dispatch({
    type: SAVE_CONTACT_ID,
    payload: contactId
  });
};
export const saveContactFullName = contactFullName => dispatch => {
  dispatch({
    type: SAVE_CONTACT_FULL_NAME,
    payload: contactFullName
  });
};
export const saveContactEmail = contactEmail => dispatch => {
  dispatch({
    type: SAVE_CONTACT_EMAIL,
    payload: contactEmail
  });
};
export const saveContactPhone = contactPhone => dispatch => {
  dispatch({
    type: SAVE_CONTACT_PHONE,
    payload: contactPhone
  });
};

export const saveContactExtraPhone = contactExtraPhone => dispatch => {
  dispatch({
    type: SAVE_CONTACT_EXTRA_PHONE,
    payload: contactExtraPhone
  });
};
export const saveContactFax = contactFax => dispatch => {
  dispatch({
    type: SAVE_CONTACT_FAX,
    payload: contactFax
  });
};
export const saveSelectedIngredients = selectedIngredients => dispatch => {
  dispatch({
    type: SAVE_SELECTED_INGREDIENTS,
    payload: selectedIngredients
  });
};
export const saveItemName = itemName => dispatch => {
  dispatch({
    type: SAVE_ITEM_NAME,
    payload: itemName
  });
};
export const saveItemCategory = itemCategory => dispatch => {
  dispatch({
    type: SAVE_ITEM_CATEGORY,
    payload: itemCategory
  });
};
export const saveItemDestiny = itemDestiny => dispatch => {
  dispatch({
    type: SAVE_ITEM_DESTINY,
    payload: itemDestiny
  });
};
export const saveItemAmount = itemAmount => dispatch => {
  dispatch({
    type: SAVE_ITEM_AMOUNT,
    payload: itemAmount
  });
};
export const saveItemUnit = itemUnit => dispatch => {
  dispatch({
    type: SAVE_ITEM_UNIT,
    payload: itemUnit
  });
};
