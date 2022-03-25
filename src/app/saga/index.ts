import { DECREMENT, INCREMENT } from "app/constants/action-types";
import { AnyAction } from "redux";
import { all, fork, takeEvery, select } from "redux-saga/effects";

function* countIncrement(action: AnyAction) {
  const count: number = yield select((state) => state.counterReducer.count);
  yield console.log("Saga: Count Icrement!", count);
}

function* countDecrement(action: AnyAction) {
  const count: number = yield select((state) => state.counterReducer.count);
  yield console.log("Saga: Count Decrement!", count);
}

function* countWatcher() {
  yield takeEvery(INCREMENT, countIncrement);
  yield takeEvery(DECREMENT, countDecrement);
}

export default function* rootSaga() {
  yield console.log("Run RootSaga");
  yield all([
    // list Watcher of saga
    countWatcher(),
  ]);
}
