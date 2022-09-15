import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import ApiGryffindor from "../components/ApiGryffindor";
import ApiHufflepuff from "../components/ApiHufflepuff";
import ApiRavenclaw from "../components/ApiRavenclaw";
import ApiSlytherin from "../components/ApiSlytherin";
import Header from "../components/Header";
function RoutesApi() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gryffindor" element={<ApiGryffindor />} />
        <Route path="/Hufflepuff" element={<ApiHufflepuff />} />
        <Route path="/Ravenclaw" element={<ApiRavenclaw />} />
        <Route path="/Slytherin" element={<ApiSlytherin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApi;