import { types } from '../types';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_START:
      return {
        ...state,
        loading: true,
      };
    case types.USER_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.users,
      };
    case types.USER_FAIL:
      return {
        ...state,
        items: [],
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
