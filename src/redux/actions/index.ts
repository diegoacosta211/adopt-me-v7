import { Animal } from "../../types";

export const changeTheme = (theme: string) => ({
  type: 'CHANGE_THEME',
  payload: theme
});

export const changeLocation = (location: string) => ({
  type: 'CHANGE_LOCATION',
  payload: location
});


export const changeAnimal = (animal: Animal) => ({
  type: 'CHANGE_ANIMAL',
  payload: animal
});


export const changeBreed = (breed: string) => ({
  type: 'CHANGE_BREED',
  payload: breed
});
