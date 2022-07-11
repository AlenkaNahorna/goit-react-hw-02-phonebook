export const Filter = ({ value, onFilter }) => {
  return (
    <label htmlFor="">
      Find contacts by name
      <input type="text" value={value} onChange={onFilter} />
    </label>
  );
};
