import React, { Component } from "react";

class Fruits extends Component {
  state = {
    edit: false,
    id: null,
    mockData: [
      { id: 1, name: "Banana", done: false, date: new Date() },
      { id: 2, name: "Orange", done: false, date: new Date() },
      { id: 3, name: "Apple", done: false, date: new Date() },
      { id: 4, name: "Plum", done: false, date: new Date() },
      { id: 5, name: "Peach", done: false, date: new Date() },
      { id: 6, name: "Pear", done: false, date: new Date() }
    ]
  };

  onDeleteHandle() {
    console.log(arguments);
    let id = arguments[0];
    this.setState({
      mockData: this.state.mockData.filter(entry => entry.id !== id)
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.mockData.map(entry => (
            <li key={entry.id}>
              {entry.name + "      "}
              <div>
                <button onClick={this.onDeleteHandle.bind(this, entry.id)}>
                  Delete
                </button>
                <button>Edit</button>
                <button>Complete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Fruits;
