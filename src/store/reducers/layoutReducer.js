// @flow
import { types } from '../types';

const initialState = {
  leftSideBarType: 'default', // activa o desactiva el sidebar
  isMobile: false,
};

export const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_SIDEBAR_TYPE:
      return {
        ...state,
        leftSideBarType: action.payload.sidebarType,
      };
    default:
      return state;
  }
};
