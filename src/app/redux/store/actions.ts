import {
  DECREMENT,
  INCREMENT,
  LOADING,
  LOADING_FAILTURE,
  LOADING_SUCCESS,
  REFRESH,
} from "../../constants/action-types";

export function increment(value: number) {
  return { type: INCREMENT, payload: value };
}
export function decrement(value: number) {
  return { type: DECREMENT, payload: value };
}
export function refresh() {
  return { type: REFRESH };
}
export function loading() {
  return { type: LOADING };
}
export function loadingSuccess() {
  return { type: LOADING_SUCCESS };
}
export function loadingFailture() {
  return { type: LOADING_FAILTURE };
}
