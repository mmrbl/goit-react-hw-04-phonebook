import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';
import { useReducer } from 'react';
import { Button, Form, Input, Label } from './ContactsForm.styled';


    
function reducer(state, actions) {
  const {type, value} = actions
  switch (type) {
   case 'name':
      return { ...state, name: value }
    
    case 'number':
      return { ...state, number: value }
    
    case 'clear':
      return {...state, name: value, number: value}
  
    default:
      throw new Error('Unexpected action type');
  }
}


export default function ContactsForm({contacts, onFormChange}) {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    number: ''
  });

  function handleSubmit(e) {
    e.preventDefault()

    const { name, number } = state;
    const id = nanoid()
    const newContact = { id, name, number };
    dispatch({type: 'clear', value: ''})
    
    const isIncluded = contacts.some((contact) =>
      contact.name.toLowerCase() === newContact.name.toLowerCase())

    if (isIncluded) {
      alert(`${toTitleCase(newContact.name)} is already in contacts.`)
    } else {
      onFormChange(newContact)
    }

    e.target.reset();
  }

  function toTitleCase(name) {
    return name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  };


   return (
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">
          Name <br/>
          <Input
            type="text"
            name="name"
           onChange={(e) => { dispatch({ type: 'name', value: e.target.value}) }}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="number">
          Phone <br/>
          <Input
            type="tel"
            name="number"
            onChange={(e) => { dispatch({ type: 'number', value: e.target.value}) }}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add to contacts</Button>
      </Form>
    )
}

ContactsForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  onFormChange: PropTypes.func.isRequired,
}