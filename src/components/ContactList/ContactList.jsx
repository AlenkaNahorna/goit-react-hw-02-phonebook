export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: <p>{number}</p>
          <button onClick={() => onDeleteContact(id)}>Delate</button>
        </li>
      ))}
    </ul>
  );
};
