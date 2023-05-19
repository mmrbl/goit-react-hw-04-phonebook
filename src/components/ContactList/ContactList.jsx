import ContactItem from 'components/ContactItem';
import { PropTypes } from 'prop-types';
import { Ul } from './ContactList.styled';

export default function ContactList({ contacts, handleDelete }) {
  return (
      <Ul>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} id={contact.id} name={contact.name} number={contact.number} handleDelete={handleDelete} />
        ))
        }
      </Ul>
    )
}


ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
}