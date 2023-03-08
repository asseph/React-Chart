import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Outlet } from 'react-router-dom';

// Actions
import { changeSidebarType } from '../../store/actions/layoutActions';

// Components
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

// Helpers
import { createTitleDocument } from '../../utils/helpers';

const Layout = ({ children }) => {
  const location = useLocation();
  const layout = useSelector(state => state.layout);
  const dispatch = useDispatch();

  const [state] = useState({
    isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
  });

  const toggleMenuCallback = () => {
    if (layout.leftSideBarType === 'default') {
      dispatch(changeSidebarType('condensed', state.isMobile));
    } else if (layout.leftSideBarType === 'condensed') {
      dispatch(changeSidebarType('default', state.isMobile));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    createTitleDocument(location);

    if (layout.leftSideBarType) {
      dispatch(changeSidebarType(layout.leftSideBarType));
    }
  }, []);

  return (
    <>
      {/* <div id="preloader">
        <div id="status">
          <div className="spinner">
            <i className="ri-loader-line spin-icon"></i>
          </div>
        </div>
      </div> */}

      <div id="layout-wrapper">
        <Header toggleMenuCallback={toggleMenuCallback} />
        <Sidebar type={layout.leftSideBarType} isMobile={layout.isMobile} />
        <div className="main-content">
          {/* {children} */}
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
