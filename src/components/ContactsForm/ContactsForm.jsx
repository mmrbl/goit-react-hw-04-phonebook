import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Button, Form, Input, Label } from './ContactsForm.styled';

export default class ContacsForm extends Component {
  state = {
    name: '',
    number: '',
  }


    handleChange = e => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }

  handleSubmit = e => {
    e.preventDefault()

    const { name, number } = this.state;
    const id = nanoid()
    const newContact = { id, name, number };
    this.props.onFormChange(newContact)
    this.setState({name: '', number: ''})

    e.target.reset();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="name">
          Name <br/>
          <Input
            type="text"
            name="name"
            onChange={this.handleChange}
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
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add to contacts</Button>
      </Form>
    )
  }
}
