import { AnyAction } from "redux";
import {
  DECREMENT,
  INCREMENT,
  LOADING,
  LOADING_FAILTURE,
  LOADING_SUCCESS,
  REFRESH,
} from "../../constants/action-types";

// interface RootReducer {
//   count: number;
//   loadingState: "idle" | "pending" | "success" | "failture";
// }

const initialState = {
  count: 1,
  loadingState: "idle",
  store: "redux",
};

const reducer = (state = initialState, action: AnyAction): { count: number; loadingState: string; store: string } => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    case REFRESH:
      return initialState;
    case LOADING:
      return { ...state, loadingState: "pending" };
    case LOADING_SUCCESS:
      return { ...state, loadingState: "success" };
    case LOADING_FAILTURE:
      return { ...state, loadingState: "failture" };
    default:
      return state;
  }
};

export default reducer;
