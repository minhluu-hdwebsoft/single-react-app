import rootSaga from "app/saga";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { apiClient } from "../../api/apiClient";
import counterReducer from "./reducer";

// Config Redux Devetools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// =========================================

// Config middleware
const thunkMiddleware = thunk.withExtraArgument(apiClient);
const sageMiddleware = createSagaMiddleware();
// const middlewares = [sageMiddleware, thunkMiddleware];
// =============================

const rootReducer = combineReducers({
  counterReducer: counterReducer,
});

// Why applyMiddleware(...middlewares) error ?
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, sageMiddleware)),
  // composeEnhancers(applyMiddleware(...middlewares))
);

sageMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type RootDispatch = typeof store.dispatch;
