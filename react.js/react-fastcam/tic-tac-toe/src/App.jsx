import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";
import Login from "./Pages/Login"

// 로그인 페이지 조건분기 하기 위함
const isLogin = false;


function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Routes>
        <Route 
          path="/login" 
          element={isLogin ? <Navigate to="/" /> : <Login />} />
        <Route path="/"   element={ <Home /> } />
        <Route path="/profile"  element={ <Profile />} />
        <Route path="/profile/:id" element={ <Profile />} />
        <Route path="/about" element={ <About />} />
        <Route path="*" element={ <NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
