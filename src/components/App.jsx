import { Component } from 'react'
import { Container } from './App.styled'
import ContactList from './ContactList'
import ContactsForm from './ContactsForm'
import Filter from './Filter'



export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
}

  onFormChange = (newContact) => {
    const isIncluded = this.state.contacts.some((contact) => contact.name.toLowerCase() === newContact.name.toLowerCase())

    if (isIncluded) {
      alert(`${this.toTitleCase(newContact.name)} is already in contacts.`)
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact]
      }))
    }
  }

 toTitleCase = (name) => {
  return name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};


  handleSearch = e => {
    this.setState({ filter: e.currentTarget.value })
  }

  handleFilter = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    )
  }

  handleDelete = (id) => {
   this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
   }))
  }

  render() {
  const { contacts } = this.state;
  const filteredContacts = this.handleFilter();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm onFormChange={this.onFormChange} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter handleSearch={this.handleSearch} />

      <ContactList contacts={contacts} filteredContacts={filteredContacts} handleDelete={this.handleDelete} />
    </Container>
  );
}
}
