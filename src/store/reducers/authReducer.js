import { types } from '../types';

// TODO: try save data user in localStorage and add default state
const user = JSON.parse(localStorage.getItem('userFIT'));
const initialState = user ? { authenticated: true, user } : { authenticated: false, user: {} };

// const initialState = {
//   authenticated: false,
//   user: {},
// };
/*
Example response auth object:
{ 
  authenticated: true,
  user: {
    id: number,
    name: string,
    role: string
  }
}
*/
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_CHECKING: // para comprobar y revisar si esta logeado, tambien si necesita renovar el token
      return {
        ...state,
        authenticated: true,
      };
    case types.AUTH_SET:
      localStorage.setItem(
        'userFIT',
        JSON.stringify({
          uid: action.payload.uid,
          name: action.payload.name,
          role: action.payload.role,
          branch_id: action.payload.branch_id,
        }),
      );
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };
    case types.AUTH_UNSET:
      return {
        authenticated: false,
        user: {},
      };
    default:
      return state;
  }
};
