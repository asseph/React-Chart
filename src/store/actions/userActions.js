import { axiosWithOutToken, axiosWithToken } from '../../services/axios';
import { types } from '../types';

/** Type Actions */
const getUsersStart = () => {
  return {
    type: types.USER_START,
  };
};
const getUsersSuccess = users => {
  return {
    type: types.USER_SUCCESS,
    payload: { users },
  };
};
const getUsersFail = error => {
  return {
    type: types.USER_START,
    payload: { error },
  };
};

/** Actions Service */
function getUsers() {
  return dispatch => {
    dispatch(getUsersStart());
    return axiosWithOutToken('/users')
      .then(resp => {
        dispatch(getUsersSuccess(resp.data));
        return resp.data;
      })
      .catch(err => {
        console.log(err.response);
        dispatch(getUsersFail(err.response?.data));
      });
  };
}

function saveUser(data, id) {
  return dispatch => {
    // 1 - indicamos que estamos procesando la solicitud
    dispatch(getUsersStart());
    // 2 - procesamos la solicitud PUT porque es actualizacion
    return axiosWithToken('/users/' + id, data, 'PUT')
      .then(resp => {
        // 3 - si todo sale bien indicamos la action para actualizar el estado
        dispatch(getUsersSuccess(resp.data));
        return resp.data;
      })
      .catch(err => {
        console.log(err.response);
        // 4 - si hay algun error actualizamos el estado para mostrarlo en pantalla
        dispatch(getUsersFail(err.response?.data));
      });
  };
}

export { getUsers, saveUser };
