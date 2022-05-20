export default function location(state = 'Seattle, WA', action: { type: string, payload: string}) {
  switch (action.type) {
    case 'CHANGE_LOCATION':
      return action.payload;
    default:
      return state;
  }
}
