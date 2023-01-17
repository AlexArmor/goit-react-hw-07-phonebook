import { FilterInput } from './Filter.styled';
import { filterContacts } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h3>Find contacts by name</h3>
      <FilterInput
        type="text"
        onChange={e => {
          const action = filterContacts(e.target.value);
          dispatch(action);
        }}
      />
    </>
  );
};
