import { configureStore } from "@reduxjs/toolkit";
import { apiClient } from "app/api/apiClient";
import rootSaga from "app/saga";
import createSagaMiddleware from "redux-saga";
import counterReducer from "../counterSlice";

const sageMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { extraArgument: apiClient },
    }).concat(sageMiddleware),
});

sageMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
