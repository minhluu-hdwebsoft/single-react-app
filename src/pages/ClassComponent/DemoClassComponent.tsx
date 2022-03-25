import React from "react";

interface DemoClassComponentState {
  count: number;
}

export class DemoClassComponent extends React.Component<any, DemoClassComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };

    this.handleButtonIncresseOnClick = this.handleButtonIncresseOnClick.bind(this);
  }

  handleButtonIncresseOnClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  // Run on updating only
  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log("Run shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    console.log("Run getSnapshotBeforeUpdate");
  }

  // ===== RUN AFTER DOM and REF update (mean update UI) ====

  // Run on first time Component mount in React dom
  componentDidMount() {
    console.log("Run componentDidMount");
  }

  // Run on updating only
  componentDidUpdate() {
    console.log("Run componentDidUpdate");
  }

  // Run on component run Error
  componentDidCatch() {
    console.log("Run componentDidCatch");
  }

  // ===========================================================

  componentWillUnmount() {
    console.log("Run componentWillUnmount");
  }

  render() {
    return (
      <div>
        <h2>Demo class compoment</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.handleButtonIncresseOnClick}>Incresse</button>
      </div>
    );
  }
}
