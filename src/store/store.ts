import { appReducer } from "./app";
import { configureStore } from "@reduxjs/toolkit";
import { expoReducer } from "./expo";

function makeStore() {
  return configureStore({
    reducer: {
      app: appReducer,
      expo: expoReducer,
    },
  });
}

const store = makeStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
