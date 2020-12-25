import React, { Component } from "react";
import ContactsListItem from "../ContactsListItem/ContactsListItem";

class ContactList extends Component {
  render() {
    const { contactsItem } = this.props;
    return (
      <ul>
        {contactsItem.map((contactsItem) => {
          return (
            <ContactsListItem
              key={contactsItem.id}
              name={contactsItem.name}
              number={contactsItem.number}
              onDelete={() => this.props.onDeleteContact(contactsItem.id)}
            />
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
