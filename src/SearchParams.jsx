import { useState } from "react";

const ANIMALS = ["Dog", "Cat", "Bird", "Rabbit", "Reptile"];

const SearchParamas = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("")
  const [breed, setBreed] = useState("");

  const handleAnimalChange = ev => {
    setAnimal(ev.target.value);
    setBreed('');
  }

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">Location</label>
        <input onChange={ev => setLocation(ev.target.value)} type="text" id="location" value={location} placeholder="Location" />
        <label htmlFor="animal">Choose Animal</label>
        <select onChange={handleAnimalChange} onBlur={handleAnimalChange} name="animal" id="animal">
          <option selected hidden disabled value="">Choose an Animal</option>
          {ANIMALS.map(a=> <option value={a} key={a} selected={a === animal}>{a}</option>)}
        </select>
        <select onChange={handleBreedChange} onBlur={handleBreedChange} name="breed" id="breed">
          <option selected hidden disabled value="">Choose an breed</option>
          {breeds.map(b=> <option value={b} key={b} selected={b === breed}>{b}</option>)}
        </select>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParamas;
