import { Form } from './ContactForm.styled';
import { Title } from './ContactForm.styled';
import { InputName } from './ContactForm.styled';
import { InputNumber } from './ContactForm.styled';
import { BtnSubmit } from './ContactForm.styled';
import { addContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const isAtList = contacts.find(contact => contact.name === name);
    if (isAtList) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    dispatch(addContacts(contact));
    event.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Name</Title>
      <InputName
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <h3>Number</h3>
      <InputNumber
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <BtnSubmit type="submit">Add contacts</BtnSubmit>
    </Form>
  );
};
