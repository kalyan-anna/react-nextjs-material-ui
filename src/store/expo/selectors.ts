import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

const selectExpoState = (state: RootState) => state.expo;

const establishments = createSelector(selectExpoState, (state) =>
  Object.values(state.establishments)
);

const establishmentById = (id: string) =>
  createSelector(selectExpoState, (state) => state.establishments[id]);

const isLoaded = createSelector(
  selectExpoState,
  (state) => state.isAlreadyLoaded
);

export const expoSelectors = {
  establishments,
  establishmentById,
  isLoaded,
};
