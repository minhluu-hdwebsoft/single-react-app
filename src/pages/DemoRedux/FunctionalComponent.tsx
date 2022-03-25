import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, refresh } from "../../app/redux/store/actions";
import { RootState } from "../../app/redux/store";
import { loadingAsyncToolkit } from "app/redux-toolkit/counterSlice";
import { loadingAsync } from "app/redux-thunk";

function FunctionalComponent() {
  const count = useSelector((state: RootState) => state.counterReducer.count);
  const storeType = useSelector((state: RootState) => state.counterReducer.store);
  const dispatch = useDispatch();

  return (
    <div className="demo-redux__card">
      <h2>Functional Component</h2>
      <h3>Delay seconds - {count}</h3>
      <button onClick={() => dispatch(increment(1))}>INCREMENT</button>
      <button onClick={() => dispatch(decrement(1))}>DECREMENT</button>
      <button onClick={() => dispatch(refresh())}>REFRESH</button>
      <br />
      <br />
      <div>
        {storeType === "redux" ? (
          <button onClick={() => dispatch(loadingAsync())}>LOADING ASYNC</button>
        ) : (
          <button onClick={() => dispatch(loadingAsync())}>LOADING ASYNC REDUX TOOLKIT</button>
        )}
      </div>
    </div>
  );
}

export default FunctionalComponent;
