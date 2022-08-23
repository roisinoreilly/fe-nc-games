import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from "./components/Home"
import Categories from "./components/Categories"
import Nav from './components/Nav';
import { Reviews } from './components/Reviews';
import { SingleCategory } from './components/SingleCategory';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <h1>NC Games</h1>
        <Nav></Nav>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:category_slug" element={<Reviews />} />
        </Routes>
    </div>
          </BrowserRouter>
  );
}

export default App;
