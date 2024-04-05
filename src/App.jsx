import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Headar from "./components/Headar";

export default function App(){
  return (
    <BrowserRouter>
    <Headar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SingIn />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}