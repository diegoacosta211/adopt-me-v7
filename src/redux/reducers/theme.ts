export default function theme(state = 'darkblue', action: { type: string, payload: string}) {
  switch (action.type) {
    case 'CHANGE_THEME':
      return action.payload;
    default:
      return state;
  }
}
