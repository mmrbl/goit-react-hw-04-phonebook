// import { Component } from 'react'
import { useEffect, useState } from 'react'
import { Container } from './App.styled'
import ContactList from './ContactList'
import ContactsForm from './ContactsForm'
import Filter from './Filter'





export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');


  function handleAdd(newContact) {
    setContacts([...contacts, newContact])
  }
  
  function handleSearch(e){
    setFilter(e.currentTarget.value)
  }

  function handleFilter() {
    if (contacts.length > 0) {
      return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    }
  }

  function handleDelete(id) {
    setContacts(contacts.filter((contact) => contact.id !== id)) 
  }

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'))
    console.log(parsedContacts)
    if (parsedContacts) {
       return () => {
    setContacts(parsedContacts)
      } 
      
    }
   

}, []);

    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);



return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm onFormChange={handleAdd} contacts={contacts} />
      <h2>Contacts</h2>

      {contacts.length > 0 ?
        (<>
        <Filter handleSearch={handleSearch} />

      {handleFilter().length > 0 ?
        <ContactList contacts={handleFilter()} handleDelete={handleDelete} /> :
        <ContactList contacts={contacts} handleDelete={handleDelete} />
      }
        </>) :
        (<p>No contacts yet. <br/> You`re alone :c</p>)
      }

      
      
      
    </Container>
  );
}

