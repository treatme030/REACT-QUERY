const Species = ({ species }) => {
  const { name, language, average_lifespan } = species;
  return (
    <li>
      {name}
      <ul>
        <li>language: {language}</li>
        <li>average lifespan: {average_lifespan}</li>
      </ul>
    </li>
  );
};

export default Species;
