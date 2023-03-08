export const activateParentDropdown = item => {
  item.classList.add('active');
  const parent = item.parentElement;

  if (parent) {
    parent.classList.add('mm-active');
    const parent2 = parent.parentElement;

    if (parent2) {
      parent2.classList.add('mm-show');

      const parent3 = parent2.parentElement;

      if (parent3) {
        parent3.classList.add('mm-active'); // li
        parent3.childNodes[0].classList.add('mm-active'); //a
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add('mm-active');
        }
      }
    }
    return false;
  }
  return false;
};

export const capitalizeFirstLetter = string => {
  return string.charAt(1).toUpperCase() + string.slice(2);
};

export const createTitleDocument = loc => {
  let currentage = capitalizeFirstLetter(loc.pathname);
  let titleBase = currentage ? currentage + ' | ' : '';
  document.title = titleBase + 'Fintech - Dashboard No-Country Fundation';
};

export const toggleFullscreen = () => {
  if (
    !document.fullscreenElement /* alternative standard method */ &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement
  ) {
    // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
};
