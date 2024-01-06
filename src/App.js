import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import Contact from "./components/Contact";
import TopCourse from "./components/TopCourse";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col  font-inter ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/login"
          element={<LogIn setIsLoggedIn={setIsLoggedIn}></LogIn>}
        ></Route>

        <Route path="/top-course" element={<TopCourse></TopCourse>}></Route>

        <Route path="/contact" element={<Contact></Contact>}></Route>

        <Route
          path="/signup"
          element={<SignUp setIsLoggedIn={setIsLoggedIn}></SignUp>}
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard></Dashboard>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
