import { createSelector } from "reselect";

const baseWizardSelector = state => state.wizard;

const wizardSelector = createSelector(
  baseWizardSelector,
  wizard => {
    return wizard;
  }
);

export { wizardSelector };
