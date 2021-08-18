import { createSlice } from "@reduxjs/toolkit";
import { loadEstablishments } from "./actions";

export interface Establishment {
  id: string;
  name: string;
  image: string;
  stallNumber: string;
  detail: string;
}

export interface ExpoState {
  isAlreadyLoaded: boolean;
  establishments: {
    [id: string]: Establishment;
  };
}

const initialState: ExpoState = {
  isAlreadyLoaded: false,
  establishments: {},
};

const expoSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: {
    [loadEstablishments.fulfilled.type]: (state, { payload }) => {
      state.establishments = payload.establishments;
      state.isAlreadyLoaded = true;
    },
  },
});

export const expoReducer = expoSlice.reducer;
