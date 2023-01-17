import { getContacts, getFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { Item } from './ContactList.styled';
import { BtnDeleteItem } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => {
        return (
          <Item key={id}>
            {name}: {phone}
            <BtnDeleteItem
              type="button"
              onClick={() => dispatch(deleteContacts(id))}
            >
              delete
            </BtnDeleteItem>
          </Item>
        );
      })}
    </ul>
  );
};
