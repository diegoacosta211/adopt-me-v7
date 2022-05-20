import { Animal } from "../../types";

export default function animal(state = '' as Animal, action: { type: string, payload: Animal}) {
  switch (action.type) {
    case 'CHANGE_ANIMAL':
      return action.payload;
    default:
      return state;
  }
}
