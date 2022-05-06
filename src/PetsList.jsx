import Pet from './Pet';
const PetsList = ({ pets }) => (
  <div>
    {!pets.length ? (
      <h2>No Pets Found!</h2>
    ) : (
      pets.map(({ id, name, breed, animal, images, city, state }) => (
        <Pet
          key={id}
          id={id}
          name={name}
          breed={breed}
          animal={animal}
          images={images}
          location={`${city}, ${state}`}
        />
      ))
    )}
  </div>
);

export default PetsList;
