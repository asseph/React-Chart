import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Layout from './components/layout/Layout';
import PrivateRoute from './router/PrivateRoute';
import PublicRoute from './router/PublicRoute';
import CheckPermission from './router/CheckPermission';

// Import Routes
import { privateRoutesList, publicRoutesList } from './router';
import { NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            {privateRoutesList.map(({ path, element, permission }, idx) => {
              return (
                <Route
                  key={idx}
                  path={path}
                  element={<CheckPermission permission={permission}>{element}</CheckPermission>}
                />
              );
            })}
          </Route>
        </Route>
        <Route path="/" element={<PublicRoute />}>
          {publicRoutesList.map(({ path, element }, idx) => (
            <Route key={idx} path={path} element={element} />
          ))}
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
