import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import SearchParams from './SearchParams';
// import Details from './Details';
import ThemeContext from './ThemeContext';
import { StrictMode, useState, lazy, Suspense } from 'react';

const Details = lazy(() => import('./Details'));
const SearchParams = lazy(() => import('./SearchParams'));

const App = () => {
  const theme = useState('orange');
  return (
    <StrictMode>
      <Suspense fallback={<h2>Loading, be patient....</h2>}>
        <ThemeContext.Provider value={theme}>
          <div
            className="p-0 m-0"
            style={{
              backgroundImage:
                "url('http://pets-images.dev-apis.com/pets/wallpaperC.jpg')",
            }}
          >
            <BrowserRouter>
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
            </BrowserRouter>
          </div>
        </ThemeContext.Provider>
      </Suspense>
    </StrictMode>
  );
 };

export default App;
