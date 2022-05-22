import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./components/account/Account";
import AddTaskForm from "./components/forms/AddTaskForm";
import Register from "./components/forms/Register";
import Home from "./components/home/Home";
import Header from "./components/navigation/Header";
import NotFound from "./components/notfound/NotFound";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div className="h-full w-full overflow-hidden md:container md:mx-auto">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addtask" element={<AddTaskForm />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
export default App;
