import { types } from '../types';

/**
 * ACTION TYPES
 */
const changeSidebarType_TYPES = (sidebarType, isMobile) => {
  return {
    type: types.CHANGE_SIDEBAR_TYPE,
    payload: { sidebarType, isMobile },
  };
};

/**
 * ACTIONS
 */
/**
 * Changes the left sidebar type
 */
const changeSidebarType = (sidebarType, isMobile) => {
  return (dispatch, getState) => {
    // console.log(getState());
    switch (sidebarType) {
      case 'compact':
        changeBodyAttribute('data-sidebar-size', 'small');
        manageBodyClass('sidebar-enable', 'remove');
        manageBodyClass('vertical-collpsed', 'remove');
        break;
      case 'icon':
        changeBodyAttribute('data-keep-enlarged', 'true');
        manageBodyClass('vertical-collpsed', 'add');
        break;
      case 'condensed':
        manageBodyClass('sidebar-enable', 'add');
        if (!isMobile) manageBodyClass('vertical-collpsed', 'add');
        break;
      default:
        changeBodyAttribute('data-sidebar-size', '');
        manageBodyClass('sidebar-enable', 'remove');
        if (!isMobile) manageBodyClass('vertical-collpsed', 'remove');
        break;
    }
    dispatch(changeSidebarType_TYPES(sidebarType, isMobile));
  };
};

/**
 * HELPERS
 */
// Changes the body attribute
function changeBodyAttribute(attribute, value) {
  if (document.body) document.body.setAttribute(attribute, value);
  return true;
}

// Toggle the class on body
function manageBodyClass(cssClass, action = 'toggle') {
  switch (action) {
    case 'add':
      if (document.body) document.body.classList.add(cssClass);
      break;
    case 'remove':
      if (document.body) document.body.classList.remove(cssClass);
      break;
    default:
      if (document.body) document.body.classList.toggle(cssClass);
      break;
  }

  return true;
}

export { changeSidebarType };
