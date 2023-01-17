import { useEffect } from 'react';
import { fetchTasks } from 'redux/operations';
import { getTasks } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contactSlice';
import { useDispatch } from 'react-redux';
import { Item } from './ContactList.styled';
import { BtnDeleteItem } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
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
