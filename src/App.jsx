import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SearchParams from './SearchParams';
import Details from './Details';

const App = () => (
  <BrowserRouter>
    <div>
      <header>
        <Link to="/">
          <h1>Adopt Me!</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<SearchParams/>} />
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
