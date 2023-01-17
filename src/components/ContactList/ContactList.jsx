import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactSlice';
import { Item } from './ContactList.styled';
import { BtnDeleteItem } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <BtnDeleteItem
              type="button"
              onClick={() => {
                const action = deleteContacts(id);
                dispatch(action);
              }}
            >
              delete
            </BtnDeleteItem>
          </Item>
        );
      })}
    </ul>
  );
};
