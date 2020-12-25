import React, { Component } from "react";

class ContactsListItem extends Component {
  render() {
    const { id, name, number, onDelete } = this.props;
    return (
      <li className="contact-item" key={id} id={id}>
        {name}: {number} <button className="deleteBtn" onClick={onDelete}>Delete</button>
      </li>
    );
  }
}

export default ContactsListItem;
