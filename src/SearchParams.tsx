import { FunctionComponent, useState, useEffect, ChangeEvent, FormEvent } from "react";
import useBreedList from "./hooks/useBreedList";
import PetsList from './PetsList';
import { Animal, Pet, PetApiResponse } from "./types";
import { useSelector, useDispatch } from "react-redux";
import { changeAnimal, changeBreed, changeLocation, changeTheme } from "./redux/actions";
import { RootState } from "./redux/store";

const ANIMALS: Animal[] = ["dog", "cat", "bird", "rabbit", "reptile"];

const SearchParamas: FunctionComponent = () => {
  const animal = useSelector((state: RootState) => state.animal);
  const location = useSelector(( state: RootState ) => state.location);
  const breed = useSelector(( state: RootState ) => state.breed);
  const theme = useSelector(( state: RootState ) => state.theme);

  const dispatch = useDispatch();

  const [pets, setPets] = useState([] as Pet[]);
  const [breeds] = useBreedList(animal);

  const handleAnimalChange = (ev: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeAnimal(ev.target.value as Animal));
    dispatch(changeBreed(''));
  }

  const handleBreedChange = (ev: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeBreed(ev.target.value))
  }

  useEffect(() => {
    void requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const result = (await res.json()) as PetApiResponse;
    setPets(result.pets);
  }

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    void requestPets();
  }

  return (
    <div className="my-0 mx-auto w-11/12">
      <form className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center" action="" onSubmit={handleSubmit}>
        <label htmlFor="location">Location</label>
        <input className="w-60 mb-5 block" onChange={ev => dispatch(changeLocation(ev.target.value))} type="text" id="location" value={location} placeholder="Location" />
        <label htmlFor="animal">Choose Animal</label>
        <select className="w-60 mb-5 block" onChange={handleAnimalChange} onBlur={handleAnimalChange} name="animal" id="animal">
          <option defaultValue="true" disabled value="">Choose an Animal</option>
          {ANIMALS.map(a=> <option value={a} key={a} defaultValue={a === animal ? 1 : 0}>{a}</option>)}
        </select>
        <label htmlFor="breed">Choose Breed</label>
        <select disabled={!breeds.length} className="w-60 mb-5 block disabled:opacity-40" onChange={handleBreedChange} onBlur={handleBreedChange} name="breed" id="breed">
          <option defaultValue={1} value="" disabled >Choose an breed</option>
          {breeds.map((b)=> <option value={b} key={b} defaultValue={b === breed ? 1 : 0}>{b}</option>)}
        </select>
        <label htmlFor="theme">Choose Theme</label>
        <select className="w-60 mb-5 block" onChange={ev=> dispatch(changeTheme(ev.target.value))} onBlur={ev=> dispatch(changeTheme(ev.target.value))} name="theme" id="theme">
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
