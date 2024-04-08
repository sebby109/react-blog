import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import HomePage from './Components/HomePage';
import UserProfile from './Components/UserProfile';
import UserPhotos from './Components/UserPhotos';
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

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
