import { axiosWithOutToken, axiosWithToken } from '../../services/axios';
import { types } from '../types';

const adminAuthSet = () => {
  return dispatch => {
    dispatch({
      type: types.AUTH_CHECKING,
      payload: JSON.parse(localStorage.getItem('userFIT')),
    });
  };
};

const adminLogin = (credentials, callback) => {
  return async dispatch => {
    try {
      const res = await axiosWithOutToken('/auth/login', credentials, 'POST');
      if (res) {
        localStorage.setItem('tokenFIT', res.data.token);
        // localStorage.setItem('tokenFIT-init', new Date().getTime());
        // dispatch results to redux store
        dispatch(
          login({
            uid: res.data.user.id,
            name: res.data.user.name,
            role: res.data.user.role,
            branch_id: res.data.user.branch_id
          }),
        );
        console.log({
          uid: res.data.user.id,
          name: res.data.user.name,
          role: res.data.user.role,
          branch: res.data.user.branch || null,
        });
        //return callback(false, null);
        return Promise.resolve();
      }
    } catch (err) {
      // console.log(err.response?.data);
      //return callback(true, err.response?.data);
      return Promise.reject(err.response?.data);
    }
  };
};

// used in startChecking & adminLogin
const login = user => {
  return {
    type: types.AUTH_SET,
    payload: user,
  };
};

const adminLogout = () => {
  return dispatch => {
    if (localStorage.getItem('tokenFIT')) {
      localStorage.removeItem('tokenFIT');
    }
    if (localStorage.getItem('userFIT')) {
      localStorage.removeItem('userFIT');
    }
    // localStorage.clear();
    dispatch({
      type: types.AUTH_UNSET,
    });
  };
};
/* 
const startCheking = () => {
  return async dispatch => {
    try {
      const res = await axiosWithToken('/auth/renew');
      // console.log(res.status);
      // si esta todo ok se graba el nuevo token
      if (res.status === 200) {
        localStorage.setItem('tokenFIT', res.data.token);
        // localStorage.setItem('tokenFIT-init', new Date().getTime());
        // console.log(res.data);
        // dispatch results to redux store
        dispatch(
          login({
            // uid: res.data.user.id,
            name: res.data.user.name,
          }),
        );
      }
    } catch (err) {
      console.log(err.response.data);
      dispatch({
        type: types.AUTH_CHECKING,
      });
    }
  };
};
 */
export { adminAuthSet, adminLogin, adminLogout };
