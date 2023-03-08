import { axiosWithOutToken } from '../../services/axios';
import { types } from '../types';

/** Type Actions */
const fetchProductsStart = () => {
  return {
    type: types.PRODUCT_START,
  };
};
const fetchProductsSuccess = products => {
  return {
    type: types.PRODUCT_SUCCESS,
    payload: { products },
  };
};
const fetchProductsFail = error => {
  return {
    type: types.PRODUCT_START,
    payload: { error },
  };
};

/** Actions Service */
function getProducts() {
  return dispatch => {
    dispatch(fetchProductsStart());
    return axiosWithOutToken('/products')
      .then(resp => {
        dispatch(fetchProductsSuccess(resp.data.products));
        return resp.data.products;
      })
      .catch(err => {
        console.log(err.response);
        dispatch(fetchProductsFail(err.response?.data));
      });
  };
}

function saveProduct(data) {
  // aqui la funcion
}

export { getProducts, saveProduct };
