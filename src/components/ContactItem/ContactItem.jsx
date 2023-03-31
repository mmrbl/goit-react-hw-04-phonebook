import { Component } from 'react'
import { Button, Li } from './ContactItem.styled'

export default class ContactItem extends Component {
  render() {
    const {id, name, number, handleDelete} = this.props
    return (
      <Li>
        {name}: {number}
        <Button type='button' onClick={() => handleDelete(id)}>Delete</Button>
      </Li>
    )
  }
}
