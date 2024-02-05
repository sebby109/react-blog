import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navb from './Components/NavB';
import HomePage from './Components/HomePage';

function App() {

  return (
    <BrowserRouter basename={"/"}>
      <Navb />
      <Routes>
        <Route path="/" element= { <HomePage /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
