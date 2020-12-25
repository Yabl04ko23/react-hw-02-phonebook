import React, { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (name, number) => {
    const contact = {
      name,
      number,
      id: uuidv4(),
    };

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  deleteContact = (taskId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== taskId),
      };
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  findContact = () => {
    const { filter, contacts } = this.state;
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  render() {
    const { filter, contacts } = this.state;
    const foundContacts = this.findContact();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} contactName={contacts} />

        <h2>Contacts</h2>
        <Filter changeFilter={this.changeFilter} filterValue={filter} />
        <ContactList contactsItem={foundContacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;
