import {  Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

const Details = lazy(() => import('./Details'));
const SearchParams = lazy(() => import('./SearchParams'));

const App = () => {
  return (
      <Provider store={store}>
        <Suspense fallback={<h2>Loading, be patient....</h2>}>
            <div
              className="p-0 m-0"
              style={{
                backgroundImage:
                  "url('http://pets-images.dev-apis.com/pets/wallpaperC.jpg')",
              }}
            >
                <header className="header">
                  <Link to="/">
                    <h1 className="text-6xl text-white hover:text-gray-200">
                      Adopt Me!
                    </h1>
                  </Link>
                </header>
                <Routes>
                  <Route path="/" element={<SearchParams />} />
                  <Route path="/details/:id" element={<Details />} />
                </Routes>
            </div>
        </Suspense>
      </Provider>
  );
 };

export default App;
