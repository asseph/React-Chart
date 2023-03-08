import { types } from '../types';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCT_START:
      // muestra el estado como cargando 'loading' asi podemos mostrar un estilo de cargando o spinner
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.PRODUCT_SUCCESS:
      // aca cuando todo salio correcto
      return {
        ...state,
        loading: false,
        items: action.payload.products,
      };
    case types.PRODUCT_FAIL:
      // aqui es donde guardamos el error para mostrarlo al usuario
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

    default:
      return state;
  }
};

export { productsReducer };
