import { Component } from 'react'
import { Container } from './App.styled'
import ContactList from './ContactList'
import ContactsForm from './ContactsForm'
import Filter from './Filter'



export class App extends Component {
  state = {
  contacts: [],
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
    if (this.state.contacts.length > 0) {
      return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    )
    }
  }

  handleDelete = (id) => {
   this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
   }))
  }

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'))

    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }

      
    
  }
  
  componentDidUpdate(prevProps, prevState) { 
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  } 


  render() {
  const { contacts } = this.state;
  const filteredContacts = this.handleFilter();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm onFormChange={this.onFormChange} contacts={contacts} />
      <h2>Contacts</h2>

      {contacts.length > 0 ?
        (<>
        <Filter handleSearch={this.handleSearch} />

      {filteredContacts.length > 0 ?
        <ContactList contacts={filteredContacts} handleDelete={this.handleDelete} /> :
        <ContactList contacts={contacts} handleDelete={this.handleDelete} />
      }
        </>) :
        (<p>No contacts yet. <br/> You`re alone :c</p>)
      }

      
      
      
    </Container>
  );
}
}
