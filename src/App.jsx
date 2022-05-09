import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from './theme-context';
import { useState } from 'react';

const App = () => {
  const theme = useState('orange');
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <div>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
 };

export default App;
