import { RootState } from "app/redux/store";
import { loading, loadingSuccess } from "app/redux/store/actions";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

export function loadingAsync(): ThunkAction<void, RootState, (ms: number) => Promise<any>, AnyAction> {
  return async function (dispatch, getState, apiClient) {
    const { count, loadingState } = getState().counterReducer;

    if (loadingState === "pending") {
      return false;
    }

    dispatch(loading());
    await apiClient(count * 1000);
    dispatch(loadingSuccess());

    return true;
  };
}
