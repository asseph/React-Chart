import { axiosWithOutToken } from '../../services/axios';
import { types } from '../types';

/** Type Actions */
const getPurchasesStart = () => {
  return {
    type: types.PURCHASE_START,
  };
};

const getPurchasesSuccess = purchases => {
  return {
    type: types.PURCHASE_SUCCESS,
    payload: { purchases },
  };
};
const getPurchasesFail = error => {
  return {
    type: types.PURCHASE_FAIL,
    payload: { error },
  };
};

/** Actions Service */
function getPurchases() {
  return dispatch => {
    dispatch(getPurchasesStart());
    return axiosWithOutToken('/purchase')
      .then(resp => {
        dispatch(getPurchasesSuccess(resp.data.purchase_order));
        return resp.data.purchase_order;
      })
      .catch(err => {
        console.log(err.response);
        dispatch(getPurchasesFail(err.response?.data));
      });
  };
}

function savePurchase(data) {
  // aqui la funcion
}

export { getPurchases, savePurchase };
