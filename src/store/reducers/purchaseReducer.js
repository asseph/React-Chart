import { types } from '../types';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const purchaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PURCHASE_START:
      return {
        ...state,
        loading: true,
      };
    case types.PURCHASE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.purchases,
      };
    case types.PURCHASE_FAIL:
      return {
        ...state,
        loading: false,
        items: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};
