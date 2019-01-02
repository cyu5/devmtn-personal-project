const INITIAL_STATE = {
  menu: []
};

const GET_MENU = "GET_MENU";

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_MENU:
      return Object.assign({}, state, { menu: action.payload });
    default:
      return state;
  }
}

export function getMenu(menu) {
  return {
    type: GET_MENU,
    payload: menu
  };
}
