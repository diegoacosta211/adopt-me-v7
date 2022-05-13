import { useState, useEffect } from "react";
import useBreedList from "./hooks/useBreedList";
import PetsList from './PetsList';
import { useContext } from "react";
import ThemeContext from "./theme-context";

const ANIMALS = ["dog", "cat", "bird", "rabbit", "reptile"];

const SearchParamas = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("")
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext)

  const handleAnimalChange = ev => {
    setAnimal(ev.target.value);
    setBreed('');
  }

  const handleBreedChange = ev => {
    setBreed(ev.target.value)
  }

  useEffect(() => {
    requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const result = await res.json();
    setPets(result.pets);
  }

  const handleSubmit = ev => {
    ev.preventDefault();
    requestPets();
  }

  return (
    <div className="my-0 mx-auto w-11/12">
      <form className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center" action="" onSubmit={handleSubmit}>
        <label htmlFor="location">Location</label>
        <input className="w-60 mb-5 block" onChange={ev => setLocation(ev.target.value)} type="text" id="location" value={location} placeholder="Location" />
        <label htmlFor="animal">Choose Animal</label>
        <select className="w-60 mb-5 block" onChange={handleAnimalChange} onBlur={handleAnimalChange} name="animal" id="animal">
          <option defaultValue hidden disabled value="">Choose an Animal</option>
          {ANIMALS.map(a=> <option value={a} key={a} defaultValue={a === animal}>{a}</option>)}
        </select>
        <label htmlFor="breed">Choose Breed</label>
        <select disabled={!breeds.length} className="w-60 mb-5 block disabled:opacity-40" onChange={handleBreedChange} onBlur={handleBreedChange} name="breed" id="breed">
          <option defaultValue hidden disabled value="">Choose an breed</option>
          {breeds.map(b=> <option value={b} key={b} defaultValue={b === breed}>{b}</option>)}
        </select>
        <label htmlFor="theme">Choose Theme</label>
        <select className="w-60 mb-5 block" onChange={ev=> setTheme(ev.target.value)} onBlur={ev=> setTheme(ev.target.value)} name="theme" id="theme">
          <option value="peru">Peru</option>
          <option value="darkblue">Dark Blue</option>
          <option value="chartreuse">Chartreuse</option>
          <option value="mediumorchid">Mediumorchid</option>
          <option value="green">Green</option>
        </select>
        <button
          className="rounded px-6 py-2 text-white hover:opacity-70 border-none"
          style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <PetsList pets={pets} />
    </div>
  )
}

export default SearchParamas;
