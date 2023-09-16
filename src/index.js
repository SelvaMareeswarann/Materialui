import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Components/Routes/Home";
import Infra from "./Components/Routes/Infra";
import Produtcs from "./Components/Routes/Produtcs";
import Career from "./Components/Routes/Career";
import About from './Components/Routes/AboutUs/About.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="home" element={<Home/>}/>
      <Route Path="infra" element={<Infra/>}/>
      <Route path="career" element={<Career/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="products" element={<Produtcs/>}/>
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();