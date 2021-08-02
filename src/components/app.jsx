import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
  };

  intervalId = null;

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  startCount = () => {
    if (this.state.count > 0 && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            alert("Timer finished !");
            clearInterval(this.intervalId);
            this.intervalId = null;
          }
        });
      }, 1000);
    }
  };

  stopCount = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };

  resetCount = () => {
    this.setState({ count: 0 });
    clearInterval(this.intervalId);
    this.intervalId = null;
  };

  render() {
    return (
      <div className="app">
        <h1>React timer</h1>
        <hr />

        <button onClick={this.decrementCount}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.incrementCount}>+</button>
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <button onClick={this.startCount}>Start</button>
          <button onClick={this.stopCount}>Stop</button>
          <button onClick={this.resetCount}>Reset</button>
        </div>
      </div>
    );
  }
}
export default App;
