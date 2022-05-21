import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";
import Header from "./components/navigation/Header";
function App() {
  return (
    <div className="h-full w-full overflow-hidden md:container md:mx-auto">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
