import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './Components/HomePage';
import UserProfile from './Components/UserProfile';
import UserPhotos from './Components/UserPhotos';
import { Routes, Route, BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path="/" element= { <App /> }/>
        <Route path="/profile" element= { <UserProfile /> }/>
        <Route path="/photos" element= { <UserPhotos /> }/>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
