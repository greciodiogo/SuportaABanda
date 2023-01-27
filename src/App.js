
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './pages/landing'
import './App.css';
import Footer from './components/Footer/Footer';
import MainFooter from './components/MainFooter/MainFooter';
import HomePage from './pages/home';
import ProfissionalsPage from "./pages/profissionals";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<ProfissionalsPage />} />
      </Routes>
      <MainFooter />
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
