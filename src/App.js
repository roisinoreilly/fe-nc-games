import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Categories from "./components/Categories"
import Nav from './components/Nav';
import { Reviews } from './components/Reviews';

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
        </Routes>
    </div>
          </BrowserRouter>
  );
}

export default App;
