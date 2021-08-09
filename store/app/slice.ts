import {
  AnyAction,
  createSlice,
  isAsyncThunkAction,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";

export interface AppState {
  asyncCount: number;
  apiError: string | any;
  accessDeniedError: string | any;
}

const initialState: AppState = {
  asyncCount: 0,
  apiError: "",
  accessDeniedError: "",
};

const isPendingAction = (action: AnyAction) =>
  isAsyncThunkAction(action) && isPending(action);
const isFulfilledAction = (action: AnyAction) =>
  isAsyncThunkAction(action) && isFulfilled(action);
const isRejectedAction = (action: AnyAction) =>
  isAsyncThunkAction(action) && isRejected(action);

const handleError = (state: AppState, error: any) => {
  if (error.statusCode === 401 || error.statusCode === 403) {
    state.accessDeniedError = error;
    return;
  }
  if (!error.statusCode || error.statusCode !== 400) {
    state.apiError = error;
    return;
  }
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(isPendingAction, (state) => {
      state.asyncCount += 1;
      state.apiError = "";
    });
    builder.addMatcher(isFulfilledAction, (state) => {
      state.asyncCount -= 1;
    });
    builder.addMatcher(isRejectedAction, (state, { error }) => {
      state.asyncCount -= 1;
      handleError(state, error);
    });
  },
});

export const appReducer = appSlice.reducer;
