import { combineReducers } from 'redux';

import { layoutReducer } from './reducers/layoutReducer';
import { authReducer } from './reducers/authReducer';
import { productsReducer } from './reducers/productsReducer';
import { userReducer } from './reducers/userReducer';
import { purchaseReducer } from './reducers/purchaseReducer';
import { saleReducer } from './reducers/saleReducer';

export const rootReducer = combineReducers({
  // public
  layout: layoutReducer,
  // private
  auth: authReducer,
  products: productsReducer,
  user: userReducer,
  purchase: purchaseReducer,
  sale: saleReducer,
  // TODO: branchesReducer
});
