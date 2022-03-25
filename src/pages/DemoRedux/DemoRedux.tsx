import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "app/redux/store";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

export const DemoRedux = () => {
  const loadingState = useSelector((state: RootState) => state.counterReducer.loadingState);

  return (
    <div className="app">
      <div>
        <h2>{loadingState.toUpperCase()}</h2>
      </div>
      <div className="app__content">
        <FunctionalComponent />
        <ClassComponent title="abc" />
      </div>
    </div>
  );
};
