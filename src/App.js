import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route element={<AddBook/>} path='/'/>
      <Route element={<SearchBook/>} path='/search'/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
