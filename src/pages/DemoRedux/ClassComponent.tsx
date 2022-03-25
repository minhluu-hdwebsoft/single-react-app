import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { decrement, increment, refresh } from "../../app/redux/store/actions";
import { RootDispatch, RootState } from "../../app/redux/store";
import { loadingAsyncToolkit } from "app/redux-toolkit/counterSlice";
import { loadingAsync } from "app/redux-thunk";

const mapStateToProps = (state: RootState) => ({
  count: state.counterReducer.count,
  storeType: state.counterReducer.store,
});

const mapDispatchToProps = (dispatch: RootDispatch) => {
  return {
    // dispatching plain actions
    increment: (value: number) => dispatch(increment(value)),
    decrement: (value: number) => dispatch(decrement(value)),
    refresh: () => dispatch(refresh()),
    loadingAsync: () => dispatch(loadingAsync()),
    loadingAsyncToolkit: () => dispatch(loadingAsyncToolkit()),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  title: string;
}

export class ClassComponent extends React.Component<Props> {
  render() {
    return (
      <div className="demo-redux__card">
        <h2>Class Component</h2>
        <h3>Delay seconds - {this.props.count}</h3>
        <button onClick={() => this.props.increment(1)}>INCREMENT</button>
        <button onClick={() => this.props.decrement(1)}>DECREMENT</button>
        <button onClick={() => this.props.refresh()}>REFRESH</button>
        <br />
        <br />
        <div>
          {this.props.storeType === "redux" ? (
            <button onClick={() => this.props.loadingAsync()}>LOADING ASYNC</button>
          ) : (
            <button onClick={() => this.props.loadingAsync()}>LOADING ASYNC REDUX TOOLTKIT</button>
          )}
        </div>
      </div>
    );
  }
}

export default connector(ClassComponent);
