import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div>
        <label className="contact-label">
          Find contacts by name
          <input
            className="contact-input"
            type="text"
            placeholder="Enter name"
            name="filter"
            value={this.props.filterValue}
            onChange={(e) => this.props.changeFilter(e.target.value)}
          />
        </label>
      </div>
    );
  }
}

export default Filter;
