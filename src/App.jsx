import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from './theme-context';
import { StrictMode, useState } from 'react';

const App = () => {
  const theme = useState('orange');
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div className="p-0 m-0" style={{
          backgroundImage: "url('http://pets-images.dev-apis.com/pets/wallpaperC.jpg')",
        }}>
          <BrowserRouter>
            <header className="header">
              <Link to="/">
                <h1 className="text-6xl text-white hover:text-gray-200">Adopt Me!</h1>
              </Link>
            </header>
            <Routes>
              <Route path="/" element={<SearchParams />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
 };

export default App;
