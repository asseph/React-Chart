// import { useSelector } from 'react-redux';
import SimpleBar from 'simplebar-react';

import SidebarContent from './SidebarContent';

const Sidebar = ({ type, isMobile }) => {
  // const layout = useSelector(state => state.layout);
  // console.log(layout);

  return (
    <>
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          {type !== 'condensed' ? (
            <SimpleBar style={{ maxHeight: '100%' }}>
              <SidebarContent />
            </SimpleBar>
          ) : (
            <SidebarContent />
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
