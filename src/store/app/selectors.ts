import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

const selectAppState = (state: RootState) => state.app;

const isObject = (obj: any) => obj && obj !== null && typeof obj === "object";

const isAppBusy = createSelector(
  selectAppState,
  (state) => state.asyncCount > 0
);
const apiError = createSelector(selectAppState, (state) => {
  if (isObject(state.apiError) && state.apiError.message) {
    return state.apiError.message;
  }
  return state.apiError;
});

const accessDeniedError = createSelector(
  selectAppState,
  (state) => state.accessDeniedError
);

export const appSelector = {
  isAppBusy,
  apiError,
  accessDeniedError,
};
