import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../index.jsx";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
import About from "./pages/about/about.jsx";
import Tos from "./pages/tos/tos.jsx";
import Movies from "./pages/Movies/movies.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/tos" element={<Tos />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
