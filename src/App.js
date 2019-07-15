import React from "react";
import Fruits from "./Fruits";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  render() {
    return (
      <div className="App">
        <h1>Fruits App</h1>
        <Fruits />
      </div>
    );
  }
}

export default App;
