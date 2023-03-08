import { types } from '../types';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const saleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SALES_START:
      return {
        ...state,
        loading: true,
      };
    case types.SALES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.sales,
      };
    case types.SALES_FAIL:
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
