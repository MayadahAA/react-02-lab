import Home from "./pages/Home";
import Login from "./pages/login";


import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={'404'} />
      </Routes>
    </>
  );
}

export default App;
