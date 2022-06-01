import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./components/account/Account";
import AddTaskForm from "./components/forms/AddTaskForm";
import EditTaskForm from "./components/forms/EditTaskForm";
import Register from "./components/forms/Register";
import Home from "./components/home/Home";
import Header from "./components/navigation/Header";
import NotFound from "./components/notfound/NotFound";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="h-full w-full overflow-hidden md:container md:mx-auto dark:bg-darkmode">
      <AuthProvider>
        {/* Authentication context */}
        <TaskProvider>
          {/* Task Context provider */}
          <ThemeProvider>
            {/* Theme: dark or light */}
            <BrowserRouter>
              <Header />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/task/create" element={<AddTaskForm />} />
                <Route path="/account" element={<Account />} />
                <Route path="/task/update/:taskId" element={<EditTaskForm />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </TaskProvider>
      </AuthProvider>
    </div>
  );
}
export default App;
