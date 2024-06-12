import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginComponent from './Components/LoginComponent'
import HomeComponent from './Components/HomeComponent'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path='home' element={<HomeComponent />} />
      </Routes>
    </BrowserRouter >
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
