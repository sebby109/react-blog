import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from './Components/HomePage';
import UserProfile from './Components/UserProfile';
import UserPhotos from './Components/UserPhotos';

function App() {

  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path="/" element= { <HomePage /> }/>
        <Route path="/profile" element= { <UserProfile /> }/>
        <Route path="/photos" element= { <UserPhotos /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
