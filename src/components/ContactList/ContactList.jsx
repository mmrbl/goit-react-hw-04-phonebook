import ContactItem from 'components/ContactItem'
import { Component } from 'react'
import { Ul } from './ContactList.styled'

export default class ContactList extends Component {
    


  render() {
    const { contacts, filteredContacts, handleDelete } = this.props
    const contactList = filteredContacts.length > 0 ? filteredContacts : contacts
    return (
      <Ul>
        {contactList.map((contact) => (
          <ContactItem key={contact.id} id={contact.id} name={contact.name} number={contact.number} handleDelete={handleDelete} />
        ))
        }
      </Ul>
    )
  }
}

