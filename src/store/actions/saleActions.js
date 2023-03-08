import { axiosWithOutToken } from '../../services/axios';
import { types } from '../types';

/** Type Actions */
const getPurchasesStart = () => {
  return {
    type: types.SALES_START,
  };
};

const getPurchasesSuccess = sales => {
  return {
    type: types.SALES_SUCCESS,
    payload: { sales },
  };
};
const getPurchasesFail = error => {
  return {
    type: types.SALES_FAIL,
    payload: { error },
  };
};

/** Actions Service */
function getSales() {
  return dispatch => {
    dispatch(getPurchasesStart());
    return axiosWithOutToken('/sales')
      .then(resp => {
        dispatch(getPurchasesSuccess(resp.data.retail_sales));
        return resp.data.retail_sales;
      })
      .catch(err => {
        console.log(err.response);
        dispatch(getPurchasesFail(err.response?.data));
      });
  };
}

function saveSale(data) {
  // aqui la funcion
}

export { getSales, saveSale };
