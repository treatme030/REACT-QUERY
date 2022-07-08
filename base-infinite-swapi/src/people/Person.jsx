const Person = ({ person }) => {
  const { name, hair_color, eye_color } = person;
  return (
    <li>
      {name}
      <ul>
        <li>hair: {hair_color}</li>
        <li>eyes: {eye_color}</li>
      </ul>
    </li>
  );
};

export default Person;
