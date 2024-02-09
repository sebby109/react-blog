import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from './Components/HomePage';

function App() {

  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path="/" element= { <HomePage /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
