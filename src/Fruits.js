import React, { Component } from "react";

class Fruits extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
  }

  onDeleteHandle() {
    console.log(arguments);
    let id = arguments[0];
    this.setState({
      mockData: this.state.mockData.filter(entry => entry.id !== id)
    });
  }

  onSubmitHandle(e) {
    e.preventDefault();
    this.setState({
      mockData: [
        ...this.state.mockData,
        {
          id: Date.now(),
          name: e.target.item.value,
          done: false,
          date: new Date()
        }
      ]
    });
    e.target.item.value = "";
  }

  onEditHandle(e) {
    console.log("Handling edit...");
    this.setState({ edit: true, id: arguments[0], name: arguments[1] });
  }

  onUpdateHandle(e) {
    console.log("Handling update...");
    e.preventDefault();
    this.setState({
      mockData: this.state.mockData.map(item => {
        if (item.id === this.state.id) {
          item["name"] = e.target.updatedName.value;
        }
        return item;
      }),
      edit: false
    });
  }

  renderEditForm() {
    if (this.state.edit) {
      return (
        <form onSubmit={e => this.onUpdateHandle(e)}>
          <input
            type="text"
            name="updatedName"
            className="item"
            defaultValue={this.state.name}
          />
          <button>Update</button>
        </form>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderEditForm()}
        <form onSubmit={this.onSubmitHandle}>
          <input type="text" name="item" className="item" />
          <button className="btn-add-item">Add</button>
        </form>
        <ul>
          {this.state.mockData.map(entry => (
            <li key={entry.id}>
              {entry.name}
              <div>
                <button onClick={e => this.onDeleteHandle(entry.id, e)}>
                  Delete
                </button>
                <button
                  onClick={e => this.onEditHandle(entry.id, entry.name, e)}
                >
                  Edit
                </button>
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
