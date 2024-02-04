import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = ({ id, name, number }) => {
    const contact = { id, name, number };
    contact.id = nanoid();
    this.setState(
      prevState => ({
        contacts: [...prevState.contacts, contact],
      })
    );
  };

  onFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  onFilterContacts = () => {
    if (this.state.filter) {
      return this.state.contacts.filter(contact => {
        return (
          contact.name.includes(this.state.filter) ||
          contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        );
      });
    } else {
      return this.state.contacts;
    }
  };

  handleDelete = id => {
    const filteredContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState(prevState => {
      return { ...prevState, contacts: filteredContacts };
    });
  };

  render() {
    return (
      <>
        <div className="main-div">
          <h1>Phonebook</h1>
          <ContactForm
            onSubmit={this.addContacts}
            contacts={this.state.contacts}
          />
          <h2>Contacts</h2>
          <Filter filter={this.state.filter} onFilter={this.onFilter} />
          <ContactList
            contacts={this.onFilterContacts()}
            filter={this.state.filter}
            filterContacts={this.onFilterContacts}
            onDelete={this.handleDelete}
          />
        </div>
      </>
    );
  }
}
