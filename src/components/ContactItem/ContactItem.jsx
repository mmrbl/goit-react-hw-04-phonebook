import { PropTypes } from 'prop-types'
import { Button, Li } from './ContactItem.styled'




export default function ContactItem({id, name, number, handleDelete}) {
   return (
      <Li>
        &bull; {name}: {number}
        <Button type='button' onClick={() => handleDelete(id, number)}>Delete</Button>
      </Li>
    )
}





ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
}