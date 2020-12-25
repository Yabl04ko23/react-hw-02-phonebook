import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.checkSameName(this.state.name);
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };

  checkSameName = (checkedName) => {
    const { contactName } = this.props;
    contactName.forEach((item) => {
      if (item.name === checkedName) {
        alert(`${checkedName} is already in contacts.`);
      }
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <label className="contact-label">
          Name
          <input
            className="contact-input"
            required
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label className="contact-label">
          Number
          <input
            className="contact-input"
            required
            type="text"
            placeholder="Enter number"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button className="submit-Btn" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
