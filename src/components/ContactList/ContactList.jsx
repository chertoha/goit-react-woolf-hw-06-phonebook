import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import { Item, List } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/slice';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, ...rest }) => (
        <Item key={id}>
          <ContactItem
            {...rest}
            onClick={() => {
              dispatch(removeContact(id));
            }}
          />
        </Item>
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tel: PropTypes.string.isRequired,
    }).isRequired
  ),
};
