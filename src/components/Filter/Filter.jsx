import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { Span, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label>
      <Span>Find contacts by name</Span>

      <Input
        type="text"
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </label>
  );
};
