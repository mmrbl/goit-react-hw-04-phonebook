import { PropTypes } from 'prop-types'
import { Component } from 'react'
import { Button, Li } from './ContactItem.styled'

export default class ContactItem extends Component {
  render() {
    const {id, name, number, handleDelete} = this.props
    return (
      <Li>
        &bull; {name}: {number}
        <Button type='button' onClick={() => handleDelete(id, number)}>Delete</Button>
      </Li>
    )
  }
}


ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
}