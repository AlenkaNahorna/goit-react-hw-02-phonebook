import PropTypes from 'prop-types';
import { Input, Label } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ value, onFilter }) => {
  return (
    <Label htmlFor="">
      Find contacts by name
      <Input type="text" value={value} onChange={onFilter} />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};
