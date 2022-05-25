import { Link } from "react-router-dom";
import { FunctionComponent } from "react";
import { Animal } from "./types";

interface IProps {
  name: string,
  animal: Animal,
  breed: string,
  images: string[],
  location: string,
  id: number
}

const Pet: FunctionComponent<IProps> = ({id, name, animal, breed, images, location }) => {
  let hero = 'http://pet-images.dev-apis.com/pets/none.jpg';
  if (Array.isArray(images) && images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="relative block">
      <div className="image-container h-full">
        <img src={hero} alt={name} className="h-full w-full object-cover" data-testid="thumbnail"/>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-tr from-white to-transparent p-4">
        <h1>{name}</h1>
        <h2>{animal} - {breed} - {location}</h2>
      </div>
    </Link>
  );
 };

export default Pet;
