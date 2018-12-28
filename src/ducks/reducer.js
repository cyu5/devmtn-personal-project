const INITIAL_STATE = {
  user: ""
};

const SET_USER = "SET_USER";

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, { user: action.payload });
    default:
      return state;
  }
}

export function setUser(user) {
  return {
    action: SET_USER,
    payload: user
  };
}
