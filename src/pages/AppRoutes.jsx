import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import About from "./About/About";
import Clicker from "./Clicker/Clicker";
export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/clicker" element={<Clicker />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
